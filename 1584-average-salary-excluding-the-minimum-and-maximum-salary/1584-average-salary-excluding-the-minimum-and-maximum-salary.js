/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
     const minSalary = Math.min(...salary);
  const maxSalary = Math.max(...salary);

  let sum = 0;
  for (let i = 0; i < salary.length; i++) {
    if (salary[i] !== minSalary && salary[i] !== maxSalary) {
      sum += salary[i];
    }
  }
  
  const count = salary.length - 2;
  return sum / count;
};