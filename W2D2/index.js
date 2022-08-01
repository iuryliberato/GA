const salaries = [10, 20, 30, 40]
let totalSalary = 0
for (var i = 0; i < salaries.length; i++) {
  totalSalary += salaries[i]
  console.log(totalSalary)
}
console.log(totalSalary)


const averageSalaries = [10, 20, 30, 40, 50, 60, 80]
const doubledSalaries = averageSalaries.map(salarydoubled => salarydoubled * 2)
console.log(doubledSalaries)


