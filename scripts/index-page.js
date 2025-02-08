const api = new BandSiteApi("f2ea095f-53f5-4297-ac13-b5b99c7a7097");

const commentContainer = document.getElementById('comments-container');
const form = document.getElementById('comment-form');
const nameInput = document.getElementById('name');
const commentInput = document.getElementById('comment');

// 

// Function to create a single comment element

function createCommentElement(comment) {
    
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment-container');

    const avatarDiv = document.createElement('div');
    avatarDiv.classList.add('comment__avatar');  
    commentDiv.appendChild(avatarDiv);

    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('comment__details');    
    commentDiv.appendChild(detailsDiv);

    const nameDateDiv = document.createElement('div');
    nameDateDiv.classList.add('comment__name-date');    
    detailsDiv.appendChild(nameDateDiv);

    const nameEl = document.createElement('h3');
    nameEl.classList.add('comment__name');
    nameEl.textContent = comment.name;  
    nameDateDiv.appendChild(nameEl);

    const dateEl = document.createElement('p');
    dateEl.classList.add('comment__date');
    dateEl.textContent = formatDate(comment.timestamp); 
    nameDateDiv.appendChild(dateEl);

    const paragraphDiv = document.createElement('div');
    paragraphDiv.classList.add('comment__paragraph-section');  
    detailsDiv.appendChild(paragraphDiv);

    const commentPara = document.createElement('p');
    commentPara.classList.add('comment__paragraph');
    commentPara.textContent = comment.comment;   
    paragraphDiv.appendChild(commentPara);
    
    return commentDiv;
}

// Function to format Date

function formatDate(timeStamp) {
    const date = new Date(timeStamp);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${month}/${day}/${year}`;
}

// function formatDate(dateString) {
//     if (dateString.includes('-')){
//         const [year, month, day] = dateString.split('-');
//         const newMonth = month.padStart(2, '0');
//         const newDay = day.padStart(2, '0');
//         return `${newMonth}/${newDay}/${year}` ;
//     } else {
//         const date = new Date(dateString);
//         const day = String(date.getUTCDate()).padStart(2, '0');
//         const month = String(date.getUTCMonth() + 1).padStart(2, '0');
//         const year = date.getUTCFullYear();
//         return `${month}/${day}/${year}` ;
//     }        
// }

// Function to render comments

function renderComments(comments) {
    commentContainer.innerHTML = '';

    // sort comments by date in desending order (newest first)
    comments.sort((a,b) => b.timestamp - a.timeStamp);
        
    comments.forEach((comment) => {                        // loop through comments and add them to container
        const commentElement = createCommentElement(comment);
        commentContainer.prepend(commentElement);
    });
}
    
//  Fetch data from API
async function getComments() {
    try {
        const comments = await api.getComments();
        renderComments(comments);
    } catch (error) {
        console.error(error);
    }
}

// Post comment to API
async function postComment(newComment) {
    try {
        const comment = await api.postComment(newComment);
        console.log('New comment posted:', comment);
        getComments();
    } catch (error) {
        console.error(error);
    }
}

// Initial render
getComments();

// From submission to add a new comment
form.addEventListener('submit', (event) => {               // form submission event
    event.preventDefault();
        
    const name = nameInput.value.trim();                   // adding name and comment to form    
    const commentText = commentInput.value.trim();

    if (name.length === 0 || commentText.length === 0) {   // input validation
        alert("Please fill out the fields.");
        return;         
    }
    
    const newComment = {                                   // Creating new comment object
        name: name,         
        comment: commentText       
    };

    postComment(newComment);                         // adding new comment to top of the array

    event.target.querySelector('#name').value = '';       // Clearing the form
    event.target.querySelector('#comment').value = '';    
});








