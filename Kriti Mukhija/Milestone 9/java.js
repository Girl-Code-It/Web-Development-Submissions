var books={
  author:'JK Rowling',
title:"Harry porter",
 pages:250,
 isCheckedout:false ,
  ratings:[],
getavgrating: function("ratings"){
  var sum=0;
  for(var i=0; i< ratings.length;i++)
  { sum+= ratings[i];
  }
  var avg= sum/ratings.length;
           return "Average:"+ avg;
  },
toggleCheckOutStatus: function(){
  if(isCheckedout==false)
    this.isCheckedout;
   else
    isCheckedout=true;
},

addRating: function(rate){
  ratings.push(rate);
}

};
document.write("Book Title:"+books.title+'<br>');
document.write("Pages:"+books.pages+'<br>');
document.write("Book Title:"+books.author+'<br>');
document.write("Average:"+books.getavgrating("3,4,5,2,3")+'<br>');
