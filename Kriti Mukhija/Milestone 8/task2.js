
function run(myage,myregister)
{
  var myage;
  var myregister;


  if(myregister ==='Early')
{
    var age=myage+1000;
    document.write("As you registred early, your race number is "+age);
  }
  else{
    document.write("Your race number is below 1000 \n");
  }

  if(myage>18)
  { if(myregister ==='Early')
       { document.write("        The starting time is 9:30 am");}
    else
       {document.write("        The starting time is 11:00 am");}
  }

  else{
    document.write("         The starting time is 12:30 am");
  }

}


run(19,'late');
