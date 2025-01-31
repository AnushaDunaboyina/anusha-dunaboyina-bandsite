
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


    function renderShows() {
        showsContainer.innerHTML = '';

        shows.forEach(show => {
            const showDiv = document.createElement('div');
            showDiv.className = 'show';

            const dateLabelDiv = document.createElement('div');
            dateLabelDiv.className = 'show__label';
            dateLabelDiv.textContent = 'DATE'
            showDiv.appendChild(dateLabelDiv);

            const dateSpan = document.createElement('span');
            dateSpan.className = 'show__date';
            dateSpan.textContent = show.date;
            showDiv.appendChild(dateSpan);

            const venueLabelDiv = document.createElement('div');
            venueLabelDiv.className = 'show__label';
            venueLabelDiv.textContent = 'VENUE'
            showDiv.appendChild(venueLabelDiv);

            const venueSpan = document.createElement('span');
            venueSpan.className = 'show__venue';
            venueSpan.textContent = show.venue;
            showDiv.appendChild(venueSpan);

            const locationLabelDiv = document.createElement('div');
            locationLabelDiv.className = 'show__label';
            locationLabelDiv.textContent = 'LOCATION';
            showDiv.appendChild(locationLabelDiv);

            const locationSpan = document.createElement('span');
            locationSpan.className = 'show__location';
            locationSpan.textContent = show.location;
            showDiv.appendChild(locationSpan);



        });
    }


})
