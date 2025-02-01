
document.addEventListener('DOMContentLoaded', () => {
    const showsContainer = document.getElementById('shows-container');

    const shows = [
        { date: 'Mon Sept 09 2024', venue:'Ronald Lane', location: 'San Francisco, CA'},
        { date: 'Tue Sept 17 2024', venue: 'Pier 3 East', location: 'San Francisco, CA'},
        { date: 'Sat Oct 12 2024', venue: 'View Lounge', location: 'San Francisco, CA'},
        { date: 'Sat Nov 16 2024', venue: 'Hyatt Agency', location: 'San Francisco, CA'},
        { date: 'Fri Nov 29 2024', venue: 'Moscow Center', location: 'San Francisco, CA'},
        { date: 'Wed Dec 18 2024', venue: 'Press Club', location: 'San Francisco, CA'}
    ];
    console.log('show:', shows);

    // Function to create the headings row (for tablet and desktop view)

    function createHeadingsRow() {
        const headingsRowDiv = document.createElement('div');
        headingsRowDiv.className = 'show-headings';

        const dateHeadingDiv = document.createElemnt('div');
        dateHeadingDiv.className = 'show-heading__date';
        dateHeadingDiv.textContent = 'DATE';
        headingsRowDiv.appendChild(dateHeadingDiv);

        const venueHeadingDiv = document.createElemnt('div');
        venueHeadingDiv.className = 'show-heading__venue';
        venueHeadingDiv.textContent = 'VENUE';
        headingsRowDiv.appendChild(venueHeadingDiv);

        const locationHeadingDiv = document.createElemnt('div');
        locationHeadingDiv.className = 'show-heading__location';
        locationHeadingDiv.textContent = 'LOCATION';
        headingsRowDiv.appendChild(locationHeadingDiv);

        const buttonHeadingDiv = document.createElemnt('div');
        buttonHeadingDiv.className = 'show-heading__button';
        buttonHeadingDiv.textContent = '';
        headingsRowDiv.appendChild(buttonHeadingDiv);
    }
});
    // Function to create Heading row (for tablet and desktop view)
    // function createHeadingsRow() {
    //     console.log('Creating heading row...');
    //     const headingRowDiv = document.createElement('div');
    //     headingRowDiv.className = 'show-heading';
    // };

//     const renderShows() {
//         showsContainer.innerHTML = '';

//         // loop through each show and create its corresponding elements

//         shows.forEach((show, index) => {

//             const showDiv = document.createElement('div');
//             showDiv.className = 'show';

//             const dateSection = document.createElement('div');
//             dateSection.className = 'show__section';
//             showDiv.appendChild(dateSection);
        
//             const dateLabelDiv = document.createElement('div');
//             dateLabelDiv.className = 'show__label';
//             dateLabelDiv.textContent = 'DATE'
//             showDiv.appendChild(dateLabelDiv);

//             const dateSpan = document.createElement('span');
//             dateSpan.className = 'show__date show-item--flex-row';
//             dateSpan.textContent = show.date;
//             showDiv.appendChild(dateSpan);

//             const venueSection = document.createElement('div');
//             venueSection.className = 'show__section';
//             showDiv.appendChild(venueSection);

//             const venueLabelDiv = document.createElement('div');
//             venueLabelDiv.className = 'show__label';
//             venueLabelDiv.textContent = 'VENUE'
//             showDiv.appendChild(venueLabelDiv);

//             const venueSpan = document.createElement('span');
//             venueSpan.className = 'show__venue show-item--flex-row';
//             venueSpan.textContent = show.venue;
//             showDiv.appendChild(venueSpan);

//             const locationSection = document.createElement('div');
//             locationSection.className = 'show__section';
//             showDiv.appendChild(locationSection);

//             const locationLabelDiv = document.createElement('div');
//             locationLabelDiv.className = 'show__label';
//             locationLabelDiv.textContent = 'LOCATION';
//             showDiv.appendChild(locationLabelDiv);

//             const locationSpan = document.createElement('span');
//             locationSpan.className = 'show__location show-item--flex-row';
//             locationSpan.textContent = show.location;
//             showDiv.appendChild(locationSpan);

//             // Button : Buy Tickets
//             const buttonDiv = document.createElement('div')
//             buttonDiv.className = 'show__button-section';
//             showDiv.appendChild(buttonDiv);

//             const buyTicketsButton = document.createElement('button');
//             buyTicketsButton.className = 'show__button show-item--flex-row'
//             buyTicketsButton.textContent = 'BUY TICKETS';
//             buttonDiv.appendChild(buyTicketsButton);

            


//             // Creating Click eventListener
//             showDiv.addEventListener('click', () => {
//                 const selectedShow = document.querySelector('.show-selected');

//                 if (selectedShow) {
//                     selectedShow.classList.remove('show-selected');
//                 }

//                 showDiv.classList.add('show-selected')
//             });

//             showsContainer.appendChild(showDiv);    
            
//             // adding divider after each show 
//             const dividerDiv = document.createElement('div');
//             dividerDiv.className = 'show-divider';
//             showsContainer.appendChild(dividerDiv);
           
//         });
//     }

//     renderShows();
// })
