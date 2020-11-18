 function raceNumber(age,regTime){
    
    let raceNum;
    if( age>=18 && regTime=='early')
        raceNum = 1000 + Math.floor(Math.random()*1000);
    
    else
        raceNum = Math.floor(Math.random()*1000);
    
    return raceNum;
}

function slot(age,regTime){

    let time;
    if(age<18)
        time="12:30";

    else if(age>=18 && regTime=='early')
        time="9:30";

    else if(age>=18 && regTime=='late')
        time='11:00';

    return time;
}

console.log('Race number of participant is ', raceNumber(18,'early'));
console.log('Slot of participant of is ', slot(18,'early'));