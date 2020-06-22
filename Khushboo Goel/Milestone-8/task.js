function Factorial(a) {
  var f = 1;
  for (i = 1; i <= a; i++) {
    f = f * i;
  }
  return f;
}
document.getElementById("fact").innerHTML = "The factorial of 5 is " + Factorial(5) + ".";

function RunnerDetail(age, time) {
  var run, num;
  if (age > 25 && time == "early") {
    num = 1200;
    run = "9:30 am";
    document.getElementById("run").innerHTML = "Your age is " + age + ". Your race number is " + num + ". Your race time is " + run + ".";
  } else if (age >= 18 && age <= 25) {
    run = "12:30 pm";
    num = 550;
    document.getElementById("run").innerHTML = "Your age is " + age + ". Your race number is " + num + ". Your race time is " + run + ".";
  } else if (age > 25 && time == "late") {
    run = "11:00 am";
    num = 490;
    document.getElementById("run").innerHTML = "Your age is " + age + ". Your race number is " + num + ". Your race time is " + run + ".";
  }
}
RunnerDetail(28, "late");
