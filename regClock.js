//Angle for arms
const deg = 6;

// DomElem
const hr = document.querySelector('#hr');
const min = document.querySelector('#mn');
const sec = document.querySelector('#sc');

// Set Interval to move arms.
setInterval(() => {
    let day = new Date();
    let ss = day.getSeconds() + (day.getMilliseconds() / 1000);
    let mm = day.getMinutes() + (ss / 60);
    let hh = day.getHours() + (mm / 60);

    hr.style.transform = `rotateZ(${hh * 30}deg)`;
    mn.style.transform = `rotateZ(${mm * deg}deg)`;
    sc.style.transform = `rotateZ(${ss * deg}deg)`;
});

