//950. Reveal Cards In Increasing Order
//QUS URL- https://leetcode.com/problems/reveal-cards-in-increasing-order/description/?envType=daily-question&envId=2024-04-10

/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    ///sort deck 
    deck.sort(function(a, b){return a-b});
    //new index array, use to find which go out first
    var indexArray = [];
    for(var i = 0; i < deck.length; i++){
        indexArray.push(i);
    }
    //the array after order 
    var newArray = [];
    
    //reveal indexArray and store in newIndexArray
    while(indexArray.length > 0){
        newArray[indexArray.shift()] = deck.shift();
        if(indexArray.length > 0){
            indexArray.push(indexArray.shift());
        }
    }
    
    return newArray;
    
};