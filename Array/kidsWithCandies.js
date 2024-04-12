//Qus-  1431. Kids With the Greatest Number of Candies
//Qus Url - 


/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    
    // let max=0;
    // let result=[];

    // for(let i=0;i<candies.length;i++){
    //     max= Math.max(candies[i], max)
    // }

    // console.log(max);

    // for(let i=0;i<candies.length;i++){
    //     if(candies[i]+extraCandies>=max){
    //         result.push(true);
    //     }else{
    //         result.push(false);
    //     }

    // }

    // return result;

    // SECOND METHOD

    const maxCandies = Math.max(...candies);
    
    // Initialize an array to store the result
    const result = [];
    
    // Iterate through each kid's candies
    for (let i = 0; i < candies.length; i++) {
        // Check if adding extraCandies to the current kid's candies makes them have the most candies
        result.push(candies[i] + extraCandies >= maxCandies);
    }
    
    return result;
};