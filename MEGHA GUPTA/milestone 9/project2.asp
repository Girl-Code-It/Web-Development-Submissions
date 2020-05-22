<!DOCTYPE html>
<html>
    <head>
        <meta charset="="utf-8>
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
<h1>Converting human language to whale language</h1>
    
<p id="demo"></p>

<script>
var humlang="If you are hungry,there are some biscuits in the cupboard";
var whalelang="";
for(var i=0;i<humlang.length;i++){
if(humlang[i]==="u" || humlang[i]==="e"){
    whalelang+=humlang[i].repeat(2);
}
else{
    whalelang+=humlang[i];
}
}
document.getElementById("demo").innerHTML = whalelang;
</script>

</body>
</html>
