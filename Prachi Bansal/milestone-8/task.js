function task(age,eorl)
{
    var age;
    var racno;
    var eorl;
    if(age>=18)
    {   document.write("you entered your age as "+ age + '<br>');
         
        if(eorl=="early")
        {   raceno=age+1000;
            document.write("you are registered late " + '<br>');
            document.write("your race number is "+ raceno + '<br>');
            document.write("your running time is 9:30");
        }
        else if(eorl=="late")
        {   raceno=1000-age;
            document.write("you are registered late "+ '<br>');
            document.write("your running time is 11:30" + '<br>');
            document.write("your race number is "+ raceno);
        }
    }

    else
    {   document.write("you entered your age as "+ age + '<br>');
        raceno=1000-age;
        document.write("your running time is 12:30" + '<br>');
        document.write("your race number is "+ raceno);
    }


}
task(19,"late");