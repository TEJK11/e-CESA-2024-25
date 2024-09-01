document.addEventListener('DOMContentLoaded', function() {
    updateCalendar();
});

function updateCalendar() {
    const monthSelect = document.getElementById('month-select');
    const selectedMonth = monthSelect.value;
    const calendarTitle = document.getElementById('calendar-title');
    const calendar = document.getElementById('calendar');

    const [year, month] = selectedMonth.split('-').map(Number);
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    calendarTitle.textContent = `${monthNames[month - 1]} ${year}`;

    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDay = new Date(year, month - 1, 1).getDay();

    calendar.innerHTML = '';

    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    dayNames.forEach(dayName => {
        const dayHeader = document.createElement('div');
        dayHeader.classList.add('calendar-day', 'day-header');
        dayHeader.textContent = dayName;
        calendar.appendChild(dayHeader);
    });

    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('calendar-day', 'empty');
        calendar.appendChild(emptyCell);
    }

    // Sample Events Data
    const events = {
        "2024-08-20": {
            image: "../photos/handoverCeremony.png",
            description: "Join us for the handover ceremony marking the transfer of councils and the formation of the new council."
        },
        "2024-09-02": {
            image: "https://via.placeholder.com/600x400?text=Event+3",
            description: "Explore our roadmap for navigating your BTech journey, from core courses to key milestones and basic steps towards career planning."
        },
        "2024-09-05": {
            image: "https://via.placeholder.com/600x400?text=Event+4",
            description: "Celebrate Teachers' Day with us. A day filled with gratitude and appreciation for our mentors."
        }
    };
    
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.classList.add('calendar-day', 'day-cell');
        dayCell.textContent = day;

        const dateKey = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        if (events[dateKey]) {
            dayCell.classList.add('event');
            dayCell.setAttribute('data-image', events[dateKey].image);
            dayCell.setAttribute('data-description', events[dateKey].description);
            dayCell.addEventListener('click', function() {
                showEventDetails(events[dateKey].image, events[dateKey].description);
            });
        }

        calendar.appendChild(dayCell);
    }
}

function showEventDetails(image, description) {
    const eventDetails = document.getElementById('event-details');
    const eventImage = document.getElementById('event-image');
    const eventDescription = document.getElementById('event-description');
    const overlay = document.querySelector('.overlay');

    eventImage.src = image;
    eventDescription.textContent = description;

    eventDetails.style.display = 'block';
    overlay.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const eventDetails = document.getElementById('event-details');
    const closeEventDetailsButton = document.getElementById('close-event-details');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    closeEventDetailsButton.addEventListener('click', function() {
        eventDetails.style.display = 'none';
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', function() {
        eventDetails.style.display = 'none';
        overlay.classList.remove('active');
    });
});
