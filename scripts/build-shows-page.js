

const showsContainer = document.getElementById('shows-container');

// Array for Shows data
const shows = [
    { date: 'Mon Sept 09 2024', venue:'Ronald Lane', location: 'San Francisco, CA'},
    { date: 'Tue Sept 17 2024', venue: 'Pier 3 East', location: 'San Francisco, CA'},
    { date: 'Sat Oct 12 2024', venue: 'View Lounge', location: 'San Francisco, CA'},
    { date: 'Sat Nov 16 2024', venue: 'Hyatt Agency', location: 'San Francisco, CA'},
    { date: 'Fri Nov 29 2024', venue: 'Moscow Center', location: 'San Francisco, CA'},
    { date: 'Wed Dec 18 2024', venue: 'Press Club', location: 'San Francisco, CA'}
];

// Function to create the headings row (for tablet and desktop view)
function createHeadingsRow() {
    const headingsRowDiv = document.createElement('div');
    headingsRowDiv.classList.add('show-headings');
    // headingsRowDiv.className = 'show-headings';

    const dateHeadingDiv = document.createElement('div');
    dateHeadingDiv.classList.add('show-headings__date');
    dateHeadingDiv.textContent = 'DATE';
    headingsRowDiv.appendChild(dateHeadingDiv);

    const venueHeadingDiv = document.createElement('div');
    venueHeadingDiv.classList.add('show-headings__venue');
    venueHeadingDiv.textContent = 'VENUE';
    headingsRowDiv.appendChild(venueHeadingDiv);

    const locationHeadingDiv = document.createElement('div');
    locationHeadingDiv.classList.add('show-headings__location');
    locationHeadingDiv.textContent = 'LOCATION';
    headingsRowDiv.appendChild(locationHeadingDiv);

    const buttonHeadingDiv = document.createElement('div');
    buttonHeadingDiv.classList.add('show-headings__button');
    buttonHeadingDiv.textContent = '';
    headingsRowDiv.appendChild(buttonHeadingDiv);

    return headingsRowDiv;
}

// Function to render the shows
function renderShows() {
    showsContainer.innerHTML = '';   // Clear the container

    const headingsRow = createHeadingsRow();
    showsContainer.appendChild(headingsRow);

    // Loop through each show : create its elements
    shows.forEach((show, index) => {

        const showDiv = document.createElement('div');
        showDiv.className = 'show';
        
        // DATE section
        const dateSectionDiv = document.createElement('div');
        dateSectionDiv.classList.add('show__section');
        showDiv.appendChild(dateSectionDiv);

        const dateLabelDiv = document.createElement('div');
        dateLabelDiv.classList.add('show__label');
        dateLabelDiv.textContent = 'DATE';
        dateSectionDiv.appendChild(dateLabelDiv);

        const dateValueSpan = document.createElement('span');
        dateValueSpan.classList.add('show__date');
        dateValueSpan.textContent = show.date;
        dateSectionDiv.appendChild(dateValueSpan);

        // VENUE Section
        const venueSectionDiv = document.createElement('div');
        venueSectionDiv.classList.add('show__section');
        showDiv.appendChild(venueSectionDiv);

        const venueLabelDiv = document.createElement('div');
        venueLabelDiv.classList.add('show__label');
        venueLabelDiv.textContent = 'VENUE';
        venueSectionDiv.appendChild(venueLabelDiv);

        const venueValueSpan = document.createElement('span');
        venueValueSpan.classList.add('show__venue');
        venueValueSpan.textContent = show.venue;
        venueSectionDiv.appendChild(venueValueSpan);

        // LOCATION Section
        const locationSectionDiv = document.createElement('div');
        locationSectionDiv.classList.add('show__section');
        showDiv.appendChild(locationSectionDiv);

        const locationLabelDiv = document.createElement('div');
        locationLabelDiv.classList.add('show__label');
        locationLabelDiv.textContent = 'LOCATION';
        locationSectionDiv.appendChild(locationLabelDiv);

        const locationValueSpan = document.createElement('span');
        locationValueSpan.classList.add('show__location');
        locationValueSpan.textContent = show.location;
        locationSectionDiv.appendChild(locationValueSpan);

        // BUTTON Section
        const buttonSectionDiv = document.createElement('div');
        buttonSectionDiv.classList.add('show__section');
        buttonSectionDiv.classList.add('show__section-button');
        showDiv.appendChild(buttonSectionDiv);

        const buttonTextDiv = document.createElement('div');
        buttonTextDiv.classList.add('show__button');
        buttonTextDiv.textContent = 'BUY TICKETS';
        buttonSectionDiv.appendChild(buttonTextDiv);

        // Add click events to highlight the selected show
        showDiv.addEventListener('click', function() {
            const selectedShow = document.querySelector('.show-selected');

            if(selectedShow) {
                selectedShow.classList.remove('show-selected');
            }

            showDiv.classList.add('show-selected');
        });
        showsContainer.appendChild(showDiv);

        // Add a divider after each show           
        const dividerDiv = document.createElement('div');
        dividerDiv.classList.add('show-divider');
        showsContainer.appendChild(dividerDiv);

    });
}

// Initial render
renderShows();




