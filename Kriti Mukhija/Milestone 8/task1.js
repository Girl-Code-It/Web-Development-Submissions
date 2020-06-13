function fact(num){
  var i,fact=1 ,num;
  for(i=1;i<=num;i++)
  {
    fact*=i;
  }
  document.write("Factorial of "+ num +' ='+fact);
}

fact(9);
