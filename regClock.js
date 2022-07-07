//Angle for arms
const deg = 6;

// DomElem
const hr = document.querySelector('#hr');
const min = document.querySelector('#mn');
const sec = document.querySelector('#sc');

// Move Arms
function moveArms() {
    requestAnimationFrame(moveArms);
    const day = new Date();
    const ss = day.getSeconds() + (day.getMilliseconds() / 1000);
    const mm = day.getMinutes() + (ss / 60);
    const hh = day.getHours() + (mm / 60);

    hr.style.transform = `rotateZ(${hh * 30}deg)`;
    mn.style.transform = `rotateZ(${mm * deg}deg)`;
    sc.style.transform = `rotateZ(${ss * deg}deg)`;
}
// Don't Use Set Interval
moveArms();



