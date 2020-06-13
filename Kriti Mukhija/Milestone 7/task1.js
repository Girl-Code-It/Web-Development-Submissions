function temptof(k){

  var k;
  var temp;
  temp=k;
  var f=(temp-273.15)*(9/5)+32;
  document.write(k + ' K '+"is "+ f + " \xB0F "+'           \n\n\n\n\n\n                                                                                     ');
  document.write('\n');
}
function temptoc(k1){

  var k1;
  var temp;
  temp=k1;
  var c=k1-273.15;
  document.write(k1 + ' K '+"is "+ c + " \xB0C ");
}

temptof(273.15);

temptoc(573.15);
