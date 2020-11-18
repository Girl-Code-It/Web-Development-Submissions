function factorial(num){
    let fact = 1;
    for(let i = 1; i <= num; i++)
    {
        fact *= i;
        console.log('Factorial of ', i, ' is ', fact);
    }
}

factorial(50);