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
<h1>BOOKS</h1>
    
<p id="demo"></p>

<script>
var books={
  author:"V.P Mishra",
  title:"Applied Mathematics",
  pages:600,
  isCheckedOut:false,
  ratings:[],
  getAverageRating:function(){},
  toggleCheckOutStatus:function(){},
  addRating:function(){}
}
document.getElementById("demo").innerHTML ="Name of the author is " + books.author;
//document.getElementById("demo").innerHTML ="Title of the book " + books.title;
//document.getElementById("demo").innerHTML ="Total number of pages " +  books.pages;
</script>

</body>
</html>
