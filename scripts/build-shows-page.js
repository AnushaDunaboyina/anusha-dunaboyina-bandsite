
document.addEventListener('DOMContentLoaded', () => {
    const showsContainer = document.getElementById('shows-container');
    console.log('showsContainer:', showsContainer);

    // Array for Shows data
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

        const dateHeadingDiv = document.createElement('div');
        dateHeadingDiv.className = 'show-headings__date';
        dateHeadingDiv.textContent = 'DATE';
        headingsRowDiv.appendChild(dateHeadingDiv);

        const venueHeadingDiv = document.createElement('div');
        venueHeadingDiv.className = 'show-headings__venue';
        venueHeadingDiv.textContent = 'VENUE';
        headingsRowDiv.appendChild(venueHeadingDiv);

        const locationHeadingDiv = document.createElement('div');
        locationHeadingDiv.className = 'show-headings__location';
        locationHeadingDiv.textContent = 'LOCATION';
        headingsRowDiv.appendChild(locationHeadingDiv);

        const buttonHeadingDiv = document.createElement('div');
        buttonHeadingDiv.className = 'show-headings__button';
        buttonHeadingDiv.textContent = '';
        headingsRowDiv.appendChild(buttonHeadingDiv);

        console.log('headingsRow created:', headingsRowDiv);
        return headingsRowDiv;
    }

    // Function to render the shows
    function renderShows() {
        showsContainer.innerHTML = '';   // Clear the container
        console.log('showsContainer cleared');

        // If condition to check the sreenwidth matching tablet and desktop then adding headings row
        const mediaQuery = '(min-width: 768px)' ;
        const mediaQueryList = window.matchMedia(mediaQuery);
        const tabletDesktopView = mediaQueryList.matches;
        console.log(tabletDesktopView);
        if(tabletDesktopView) {
            const headingsRow = createHeadingsRow();
            showsContainer.appendChild(headingsRow);
            console.log('headingsRow appended to showsContainer');
        }

        // Loop through each show : create its elements
        shows.forEach((show, index) => {
            console.log('Rendering show:', show);

            const showDiv = document.createElement('div');
            showDiv.className = 'show';
            
            // DATE section
            const dateSectionDiv = document.createElement('div');
            dateSectionDiv.className = 'show__section';
            showDiv.appendChild(dateSectionDiv);

            const dateLabelDiv = document.createElement('div');
            dateLabelDiv.className = 'show__label';
            dateLabelDiv.textContent = 'DATE';
            dateSectionDiv.appendChild(dateLabelDiv);

            const dateValueSpan = document.createElement('span');
            dateValueSpan.className = 'show__date';
            dateValueSpan.textContent = show.date;
            dateSectionDiv.appendChild(dateValueSpan);

            // VENUE Section
            const venueSectionDiv = document.createElement('div');
            venueSectionDiv.className = 'show__section';
            showDiv.appendChild(venueSectionDiv);

            const venueLabelDiv = document.createElement('div');
            venueLabelDiv.className = 'show__label';
            venueLabelDiv.textContent = 'VENUE';
            venueSectionDiv.appendChild(venueLabelDiv);

            const venueValueSpan = document.createElement('span');
            venueValueSpan.className = 'show__venue';
            venueValueSpan.textContent = show.venue;
            venueSectionDiv.appendChild(venueValueSpan);

            // LOCATION Section
            const locationSectionDiv = document.createElement('div');
            locationSectionDiv.className = 'show__section';
            showDiv.appendChild(locationSectionDiv);

            const locationLabelDiv = document.createElement('div');
            locationLabelDiv.className = 'show__label';
            locationLabelDiv.textContent = 'LOCATION';
            locationSectionDiv.appendChild(locationLabelDiv);

            const locationValueSpan = document.createElement('span');
            locationValueSpan.className = 'show__location';
            locationValueSpan.textContent = show.location;
            locationSectionDiv.appendChild(locationValueSpan);

            // BUTTON Section
            const buttonSectionDiv = document.createElement('div');
            buttonSectionDiv.className = 'show__section show__section-button';
            showDiv.appendChild(buttonSectionDiv);

            const buttonTextDiv = document.createElement('div');
            buttonTextDiv.className = 'show__button';
            buttonTextDiv.textContent = 'BUY TICKETS';
            buttonSectionDiv.appendChild(buttonTextDiv);


            // Add click events to highlight the selected show
            showDiv.addEventListener('click', function() {
                const selectedShow = document.querySelector('.show-selected');
                console.log('selected show:', selectedShow);

                if(selectedShow) {
                    selectedShow.classList.remove('show-selected');
                }

                showDiv.classList.add('show-selected');
                console.log('show selected:', showDiv);
            });

            showsContainer.appendChild(showDiv);
            console.log('showDiv appended to showsContainer');

            // Add a divider after each show           
            const dividerDiv = document.createElement('div');
            dividerDiv.className = 'show-divider'
            showsContainer.appendChild(dividerDiv);
            console.log('Divider appended after show:', show);

        });
    }

    // Initial render
    renderShows();
    console.log('Initial render complete');

    window.addEventListener('resize', renderShows);  // Re-render on window resize
    console.log('Resize event listener added');

});
    
