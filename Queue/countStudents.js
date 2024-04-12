//Number of Students Unable to Eat Lunch
//Qus Url- https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/description/?envType=daily-question&envId=2024-04-08


/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    const queue = [...students];
   
   while (queue.length > 0) {
       const currentStudentPreference = queue.shift();
       if (sandwiches[0] === currentStudentPreference) {
           sandwiches.shift();
       } else {
           queue.push(currentStudentPreference);
       }
       
       // Check if all sandwiches have been taken or no students prefer remaining sandwiches
       if (sandwiches.length === 0 || queue.every(student => student !== sandwiches[0])) {
           break;
       }
   }
   
   return queue.length;
   
};