var books = {
  author: "JK Rowling",
  title: "Harry Potter",
  pages: 200,
  isCheckedOut: false,
  ratings: [3, 4, 5],

  getAverageRating: function () {
    var sum = 0;

    document.write((this.ratings[0] + this.ratings[1] + this.ratings[2]) / 3);
  },
  toggleCheckOutStatus: function () {
    if (isCheckedOut == true) {
      isCheckedOut = false;
    } else {
      isCheckedOut = false;
    }
  },
  addRating: function (r0, r1, r2) {
    this.ratings[0] = r0;
    this.ratings[1] = r1;
    this.ratings[2] = r2;
  },
};

document.write("Pages in the book are: " + books.pages + "<br>");

document.write("Book name is: " + books.title + "<br>");

document.write("the average is: ");
books.addRating(2, 3, 4);
books.getAverageRating();
