let kelvin = prompt('What is the temperature in Kelvin ?');

//kelvin to celsius and fahreheit
let celsius = kelvin - 273.15;
let fahren = (kelvin - 273.15) * 9 / 5 + 32;
document.write("Temp in degree celsius is ", celsius," and in fahrenheit is ", fahren, ".");