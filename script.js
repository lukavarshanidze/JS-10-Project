


const newYears = '01 Jan 2023';
function countDown() {

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = timeWithZeros(hours);
    minutesEl.innerHTML = timeWithZeros(minutes);
    secondsEl.innerHTML = timeWithZeros(seconds);
setInterval(countDown, 1000);


    }
    

countDown();

function timeWithZeros(time) {
    return time < 10 ? `0${time}` : time;
}