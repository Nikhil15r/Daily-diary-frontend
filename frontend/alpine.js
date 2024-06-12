//          HEADER DATE CHANGE FUNCTION

function formatDate(date) {
    const day = date.getDate();
    const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];
    const monthIndex = date.getMonth();
    const monthName = monthNames[monthIndex];
    
    return `${day} ${monthName}`;
}

window.addEventListener('DOMContentLoaded', function() {
    Alpine.data('calendar', () => ({
        formatDate
    }));
});

//          HEADER DATE CHANGE FUNCTION


function isValidUsername(username) {
    const regex = /^[a-zA-Z0-9]{3,20}$/;
    return regex.test(username);
}