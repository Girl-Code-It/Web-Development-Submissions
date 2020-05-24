function fact(n)
{
    var f=1;
    var n;
    var i;
    for(i=n;i>=1;i--)
    {
        f=f*i;
    }
    document.write("factorial of "+ n +" is "+ f);
}
fact(10);