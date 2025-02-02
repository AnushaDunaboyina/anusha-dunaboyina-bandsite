
document.addEventListener('DOMContentLoaded', function() {
    const commentContainer = document.getElementById('comment-container');
    const form = document.getElementById('comment-form');
    const nameInput = document.getElementById('name');
    const commentInput = document.getElementById('comment');


    // Default three comments array
    const comments = [
        {
            name: 'Victor Pinto',
            date: '11/02/2023',
            comment: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
            avatar: ' '        
        },
    
        {
            name:'Christina Cabrera',
            date: '10/28/2023',
            comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
            avatar: ''       
        },
    
        {
            name:'Isaac Tadesse',
            date: '10/20/2023',
            comment: `I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.`,
            avatar: ''       
        }
    ];
    
    // Function to create a single comment element
    
    function createCommentElement(comment) {
        
    
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment-container';
    
        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'comment__avatar';  
        commentDiv.appendChild(avatarDiv);
    
        const detailsDiv = document.createElement('div');
        detailsDiv.className = 'comment__details';    
        commentDiv.appendChild(detailsDiv);
    
        const nameDateDiv = document.createElement('div');
        nameDateDiv.className = 'comment__name-date';    
        detailsDiv.appendChild(nameDateDiv);
    
        const nameEl = document.createElement('h3');
        nameEl.className = 'comment__name';
        nameEl.textContent = comment.name;  
        nameDateDiv.appendChild(nameEl);
    
        const dateEl = document.createElement('p');
        dateEl.className = 'comment__date';
        dateEl.textContent = formatDate(comment.date); 
        console.log(dateEl.textContent);
        nameDateDiv.appendChild(dateEl);
    
        const paragraphDiv = document.createElement('div');
        paragraphDiv.className = 'comment__paragraph-section';  
        detailsDiv.appendChild(paragraphDiv);
    
        const commentPara = document.createElement('p');
        commentPara.className = 'comment__paragraph';
        commentPara.textContent = comment.comment;   
        paragraphDiv.appendChild(commentPara);
        
        console.log(commentDiv)
        return commentDiv;
    
    }
    
    // Function to format Date
    

    function formatDate(dateString) {
        console.log(dateString)
        if (dateString.includes('-')){
            const [year, month, day] = dateString.split('-');
            const newMonth = month.padStart(2, '0');
            const newDay = day.padStart(2, '0');
            return `${newMonth}/${newDay}/${year}` ;
        } else {
            const date = new Date(dateString);
            const day = String(date.getUTCDate()).padStart(2, '0');
            const month = String(date.getUTCMonth() + 1).padStart(2, '0');
            // return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
            const year = date.getUTCFullYear();
            return `${month}/${day}/${year}` ;
        }
        
    }

    // Function to render comments
    
    function renderComments() {
        commentContainer.innerHTML = '';
            
        comments.forEach((comment) => {                        // loop through comments and add them to container
            const commentElement = createCommentElement(comment);
            commentContainer.appendChild(commentElement);
        });
    }
    
    
    //  Initial render
    
    renderComments();
    
    form.addEventListener('submit', (event) => {               // form submission event
        event.preventDefault();
           
        const name = nameInput.value.trim();                   // adding name and comment to form    
        const commentText = commentInput.value.trim();

        if (name.length === 0 || commentText.length === 0) {   // input validation
            alert("Please fill out fields.");
            return;
        }
        
        const newComment = {                                   // Creating new comment object
            name: name,
            date: new Date().toISOString().split('T')[0],
            comment: commentText,
            avatar: ''
        };

        comments.unshift(newComment);                         // adding new comment to top of the array

        if (comments.length > 3) {                            // removing old comment
            comments.pop();
        }

        renderComments();                                     // Re-render the comments

        event.target.querySelector('#name').value = '';       // Clearing the form
        event.target.querySelector('#comment').value = '';       
    });
});







