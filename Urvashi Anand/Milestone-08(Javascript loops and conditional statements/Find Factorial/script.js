let number = prompt('Enter the number whose factorial you want..');
let fact = 1;
for(i = 1; i <= number; i++)
{
    fact *= i;
}

document.write('Factorial of ', number, ' is ', fact);