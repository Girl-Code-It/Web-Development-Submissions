var Books = {
    author : "Urvashi",
    title : "Mathematics",
    pages : 350,
    isCheckedOut : false,
    ratings : [2 , 3 , 4 , 5],

    getAverageRating: function(){
        return ((this.ratings[0] + this.ratings[1] + this.ratings[2] + this.ratings[3])/4);
    },

    toggleCheckOutStatus : function(){
        if(this.isCheckedOut == true)
        this.isCheckedOut = false;
        else
        this.isCheckedOut = true;
    },

    addRating : function(r0, r1, r2, r3){
        this.ratings[0] = r0;
        this.ratings[1] = r1;
        this.ratings[2] = r2;
        this.ratings[3] = r3;
    }
};

document.write("Book's Author Name is " +  Books.author + "<br>");
document.write("Book's Title is " +  Books.title + "<br>");
document.write("Number of pages in the book is " +  Books.pages + "<br>");
document.write("Average Book Rating is ");
Books.addRating(4, 5, 5, 3);
document.write(Books.getAverageRating());