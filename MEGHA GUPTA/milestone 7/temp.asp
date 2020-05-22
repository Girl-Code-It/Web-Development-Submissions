<!DOCTYPE html>
<html>
    <head>
        <style>
            body{
                background-color: rgb(112, 216, 143);

	background: -moz-linear-gradient(top, rgb(112, 216, 143) 0%, #aadeec 100%);
	background: -webkit-linear-gradient(rgb(112, 216, 143) 0%, #aadeec 100%);
	background: -o-linear-gradient(rgb(112, 216, 143) 0%, #aadeec 100%);
	background: linear-gradient(rgb(112, 216, 143) 0%, #aadeec 100%); 

            }
            h1{
                color: rgb(73, 6, 136);
            }
        </style>
    </head>
<body>

<h1>Temperature Conversion from Kelvin to Celcius and Fahrenheit</h1>

<p id="demo1"></p>

<h1>Human age to Dog years</h1>

<p id="demo2"></p>
<script>
var x,y,z;
x=50;
y=x-272.15;
z=x-457.87;
document.getElementById("demo1").innerHTML= x + " Kelvin is " + y + " Celcius" + " and " + z + "Fahrenheit."; 
var a,b;
a=20;
b=a*7;
document.getElementById("demo2").innerHTML= a + " human years are equal to " + b + " dog years."; 
</script>

</body>
</html>