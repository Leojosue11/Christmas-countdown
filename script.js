const DayElement = document.getElementById('days');
const HourElement = document.getElementById('hours');
const MinElement = document.getElementById('minutes');
const SecElement = document.getElementById('seconds');


const countdown = () => {
    const currentDate = new Date();
    const christmas = new Date(currentDate.getFullYear(),11,25);
    
    const diff = (christmas-currentDate) / 1000;
    const sec = Math.floor(diff % 60);
    const min = Math.floor(diff/60 % 24);
    const hour = Math.floor(diff/3600 %24);
    const days = Math.floor(diff/3600/24);
    
    DayElement.textContent = days;
    HourElement.textContent= Format(hour);
    MinElement.textContent = Format(min);
    SecElement.textContent = Format(sec);

}

const Format = (time) => {
    return time < 10 ? `0${time}` : time;
}

setInterval(() => {
    countdown();
}, 1000);
