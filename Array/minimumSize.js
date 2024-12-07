/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function(nums, maxOperations) {
    const canDivideWithPenalty = (penalty) => {
        let operations = 0;
        for (const balls of nums) {
            // Calculate operations needed for this bag
            operations += Math.floor((balls - 1) / penalty);
            if (operations > maxOperations) return false; // Early exit if over limit
        }
        return operations <= maxOperations;
    };

    // Binary search for the minimum penalty
    let low = 1, high = Math.max(...nums);
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (canDivideWithPenalty(mid)) {
            high = mid; // Try smaller penalty
        } else {
            low = mid + 1; // Increase penalty
        }
    }

    return low;
    
};

//1760. Minimum Limit of Balls in a Bag