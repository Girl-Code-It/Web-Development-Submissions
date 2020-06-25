var Books = function (author, title, pages, isCheckedOut, ratings) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.check = isCheckedOut;
  this.ratings = ratings;
  this.getAverageRating = function () {
    var avg,
      sum = 0;
    for (i = 0; i < ratings.length; i++) {
      sum = sum + ratings[i];
    }
    avg = sum / ratings.length;
    document.getElementById("data").innerHTML = "The average rating for " + this.title + " is " + avg + ".";
  };
  this.toggleCheckOutStatus = function () {
    if (isCheckedOut == true) {
      document.getElementById("datas").innerHTML = this.title + " by " + this.author + " is checked out.";
    } else {
      document.getElementById("datas").innerHTML = this.title + " by " + this.author + " is not checked out.";
    }
  };
  this.addRating = function () {
    ratings.push(5, 4, 4.5, 4);
    console.log(ratings);
  };
};
var Book1 = new Books("J.K. Rowling", "Harry Potter and the Chamber of Secrets", 400, true, []);
var Book2 = new Books("Khaled Hosseni", "And the Mountains Echoed", 410, false, [3.5, 4.2]);
var Book3 = new Books("Rainbow Rowell", "Elanor and Park", 350, false, []);
Book1.addRating();
Book1.toggleCheckOutStatus();
Book2.addRating();
Book2.getAverageRating();
