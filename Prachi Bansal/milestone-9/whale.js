function human(){
    
    var lang = prompt("enter in human language" , "enter your text here")


    if (lang != null) {
    document.getElementById("demo").innerHTML = lang.replace(/e/g,"ee").replace(/u/g,"uu"); 
    }
} 

