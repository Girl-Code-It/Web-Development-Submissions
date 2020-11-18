function whaleTalk(youSaid){   
    let i;
    let whaleWord = "";
    youSaid = youSaid.toLowerCase();

    for(i=0; i< youSaid.length-1; i++){

        if(youSaid[i]==='a' || youSaid[i]==='e' || youSaid[i]==='i' || youSaid[i]==='o' || youSaid[i]==='u'){

            if(youSaid[i]==='u'){
                whaleWord += 'uu';
            }
            else if(youSaid[i]==='e'){
                whaleWord += 'ee';
            }
            else{
                whaleWord += youSaid[i];
            }
        }
    }
    return whaleWord;
}
console.log(whaleTalk("You are Amazing"));