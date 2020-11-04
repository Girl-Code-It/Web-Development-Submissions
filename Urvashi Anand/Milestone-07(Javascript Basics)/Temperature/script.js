let kelvin = prompt('What is the temperature in kelvin ?');

let celsius = kelvin - 273.15;
let fahrenheit = (kelvin - 273.15) * 9 / 5 + 32;

document.write("The Temperature in celsius is ", celsius, " and in fahrenheit is ", fahrenheit ,".");