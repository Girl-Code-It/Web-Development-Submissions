var books = {
    author: "Charles Darwin",
    title: "The Origin Of Species",
    pages: 364,
    isCheckOut: false,
    rating: [],

    getAverageRating: function(){
        let i, sum = 0, avg = 0;
        for(i = 0; i < this.rating.length - 1; i++ )
            sum += rating[i];
        
        avg = sum/(i+1);
        return avg;
    },

    toggleCheckOutStatus: function(){
        return (!this.isCheckOut);
    },

    addRating: function(newRating){
        this.rating.push(newRating);
    }
};