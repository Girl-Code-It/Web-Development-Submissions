
const secondsArm = document.querySelector('.seconds-arm');
const minutesArm = document.querySelector('.minutes-arm');
const hoursArm = document.querySelector('.hours-arm');
const hand = document.querySelector('.hand');

function clockTime(){
    const myTime = new Date();

    const seconds = myTime.getSeconds();
    //calculating the percentage also adding 90 because of initial offset
    const secondsDegree = ((seconds/60)*360)+90;
    if(secondsDegree == 450){
        hand.style.transition = 'none';
    }
    secondsArm.style.transform = `rotate(${secondsDegree}deg)`;

    const minutes = myTime.getMinutes();
    //calculating the percentage also adding 90 because of initial offset
    const minutesDegree = ((minutes/60)*360)+90;
    if(minutesDegree == 450){
        hand.style.transition = 'none';
    }
    minutesArm.style.transform = `rotate(${minutesDegree}deg)`;

    const hours = myTime.getHours();
    //calculating the percentage also adding 90 because of initial offset
    const hoursDegree = ((hours/12)*360)+90;
    if(hoursDegree == 450){
        hand.style.transition = 'none';
    }
    hoursArm.style.transform = `rotate(${hoursDegree}deg)`;
}
setInterval(clockTime,1000);