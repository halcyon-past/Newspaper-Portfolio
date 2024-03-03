const data = document.getElementById('date');

const date = new Date();

const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
});

data.innerText = formattedDate;