var str  = prompt("Enter the text in Human's language ");
var whaleText = "";

for(i = 0; i < str.length; i++)
{
    if(str[i] == 'e' || str[i] == 'u')
    {
        whaleText[i] += str[i].repeat(2);
    }
    else
    {
        whaleText[i] += str[i];
    }
}

document.write("Text converted to whale's language is " + whaleText);
