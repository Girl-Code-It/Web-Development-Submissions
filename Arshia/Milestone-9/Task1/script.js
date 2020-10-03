
const books = {
    author: " ",
    title: " ",
    pages: 0,
    isCheckedOut: false,
    ratings:[],

    getAverageRating(){
        let i,sum=0,avg=0;
        for(i=0; i<this.ratings.length-1; i++){
            sum += ratings[i];
        }
        avg = sum/(i+1);
        return avg;
    },

    toggleCheckOutStatus(){
        return (!this.isCheckedOut);
    },

    addRating(newRating){
        this.ratings.push(newRating);
    }
};