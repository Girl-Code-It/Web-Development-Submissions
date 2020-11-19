function converion() {

    var text = "";
    var str = document.getElementById("convert").innerHTML;
    console.log(str);
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "u" || str[i] === "e")
            text += str[i].repeat(2);
        else
            text += str[i];
    }

    return text;
}