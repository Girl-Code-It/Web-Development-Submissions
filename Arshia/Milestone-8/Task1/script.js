 function factorial(num){
     let i,fact=1;
     for(i=1; i<=num; i++){
         fact*=i;
     }
     console.log(fact);
 }
 factorial(10);