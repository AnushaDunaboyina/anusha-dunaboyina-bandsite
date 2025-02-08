
const API_KEY = "f2ea095f-53f5-4297-ac13-b5b99c7a7097";

// create a class instance
const instance = new BandSiteApi(API_KEY);

const showsContainer = document.getElementById('shows-container');

// Function to create the headings row (for tablet and desktop view)
function createHeadingsRow() {
    const headingsRowDiv = document.createElement('div');
    headingsRowDiv.classList.add('show-headings');
    
    const headings = ["DATE", "VENUE", "LOCATION", ""];
    const classNames = ["show-headings__date", "show-headings__venue", "show-headings__location", "show-headings__button"];

    headings.forEach((heading, index) => {
        const headingDiv = document.createElement('div');
        headingDiv.classList.add(classNames[index]);
        headingDiv.textContent = heading;
        headingsRowDiv.appendChild(headingDiv);
    });

    return headingsRowDiv;
}

// Function to render the shows
function createShowElement(show) {
    const showDiv = document.createElement('div');
    showDiv.classList.add('show');

    // DATE Section
    const dateSectionDiv = document.createElement('div');
    dateSectionDiv.classList.add('show__section');
    showDiv.appendChild(dateSectionDiv);

    const dateLabelDiv = document.createElement('div');
    dateLabelDiv.classList.add('show__label');
    dateLabelDiv.textContent = 'DATE';
    dateSectionDiv.appendChild(dateLabelDiv);

    const dateValueSpan = document.createElement('span');
    dateValueSpan.classList.add('show__date');
    dateValueSpan.textContent = formatDate(show.date);
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
    venueValueSpan.textContent = show.place;
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
    
    return showDiv;
}

// Function to format the timestamp into a readble date format
function formatDate(timestamp) {
    const date = new Date(timestamp);
    const rules = {weekday: 'short', year: 'numeric', month: 'short', day: '2-digit' };
    return date.toLocaleDateString('en-US', rules).split(',').join('');
}

// Function to render shows dynamically

async function renderShows() {
    showsContainer.innerHTML = '';   // Clear the container

    const headingsRow = createHeadingsRow();
    showsContainer.appendChild(headingsRow);

    try {
        const shows = await instance.getShows();

        shows.forEach(show => {
            const showElement = createShowElement(show);
            showsContainer.appendChild(showElement);

            // Add a divider after each show           
            const dividerDiv = document.createElement('div');
            dividerDiv.classList.add('show-divider');
            showsContainer.appendChild(dividerDiv);
        });

    } catch (error) {
        console.error(error);
    }
}   
        
// Initial render
renderShows();




