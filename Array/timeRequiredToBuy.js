//2073. Time Needed to Buy Tickets
//QUS URl- https://leetcode.com/problems/time-needed-to-buy-tickets/description/?envType=daily-question&envId=2024-04-09

/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {

    let totalTime = 0;

   for(let i=0; i<tickets.length;i++){
       if(i<=k){
           if(tickets[i]==tickets[k]){
               totalTime+=tickets[i]
           }else{
               totalTime+=Math.min(tickets[i], tickets[k])

           }
       }else{//i>k
           if(tickets[i]<tickets[k]){
               totalTime+=tickets[i]
           }else{
               totalTime+=tickets[k]-1;
           }
       }
   }

return totalTime

   
};