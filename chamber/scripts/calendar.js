document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true,
        events: [
            {
                title: 'Event 1',
                start: '2024-10-01'
            },
            {
                title: 'Event 2',
                start: '2024-10-07',
                end: '2024-10-10'
            }
        ]
    });
    calendar.render();
});
