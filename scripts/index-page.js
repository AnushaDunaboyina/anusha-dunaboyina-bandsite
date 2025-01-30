
document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('comment-form');
    const nameInput = document.getElementById('name');
    const commentInput = document.getElementById('comment');
    const commentsContainer = document.getElementById('comments-container');

})


// Default Comments : name, date, comment and avatar

const defaultComments = [
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

// Creating Elements for Comments Container

function createCommentElement(comment) {

    const commentContainer = document.createElement('div');
    commentContainer.className = 'comment-container';

    const userAvatar = document.createElement('div');
    userAvatar.className = 'comment__avatar';

    commentContainer.appendChild(userAvatar)

    const commentDetails = document.createElement('div');
    commentDetails.className = 'comment__details';

    commentContainer.appendChild(commentDetails);

    const commentNameDateSection = document.createElement('div');
    commentNameDateSection.className = 'comment__name-date';

    const userName = document.createElement('h3');
    userName.className = 'comment__name';
    userName.textContent = comment.name;

    commentNameDateSection.appendChild(userName);

    const commentDate = document.createElement('p');
    commentDate.className = 'comment__date';
    commentDate.textContent = formatDate(comment.date);

    commentNameDateSection.appendChild(commentDate);

    const commentParagraphSection = document.createElement('div');
    commentParagraphSection.className = 'comment__paragraph-section';

    const commentParagraph = document.createElement('p');
    commentParagraph.className = 'comment__paragraph';
    commentParagraph.textContent = comment.comment

    commentParagraphSection.appendChild(commentParagraph);

    return commentContainer;

}



