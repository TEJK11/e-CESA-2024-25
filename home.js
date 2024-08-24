document.addEventListener('DOMContentLoaded', function() {
    const yearSelect = document.getElementById('year-select');
    yearSelect.value = '24-25';
    updateDescription();
});
function updateDescription() {
    const yearSelect = document.getElementById('year-select');
    const selectedYear = yearSelect.value;
    const descriptions = document.querySelectorAll('.description > div, .description > p');

    descriptions.forEach(description => {
        if (description.id === selectedYear) {
            description.style.display = 'block';
        } else {
            description.style.display = 'none';
        }
    });
}