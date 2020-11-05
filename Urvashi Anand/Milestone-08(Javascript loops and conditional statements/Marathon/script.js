function TimeSlot(age, AdultCategory) {
    let Time;
    if (age < 18)
        Time = "12:30";
    else if (age >= 18 && AdultCategory == "Early")
        Time = "9:30";
    else if (age >= 18 && AdultCategory == "Late")
        Time = "11:00";
    return  Time;
}

function RaceNumber(age, AdultCategory)
{
    let raceNumber;
    if( age>=18 && raceNumber =='Early')
        raceNumber = 1000 + Math.floor(Math.random()*1000);
    
    else
        raceNumber = Math.floor(Math.random()*1000);
    
    return raceNumber;
}

document.write('Race number is ', RaceNumber(21, "Early"), '\n');
document.write('Time Slot is ', TimeSlot(21, "Late"));