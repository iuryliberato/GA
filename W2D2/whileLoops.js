// // counting to ten with a while loop
// let counter = 0
// while (counter <= 10) {
//   counter++
//   console.log('inside the loop', counter)
// }
// console.log(counter)


// // While loop double salaries
const averageSalaries = [10, 20, 30, 40, 50, 60, 80]
const salary = []
let i = 0
while (i < averageSalaries.length) {
  salary.push(averageSalaries[i] * 2)
  i += 1
}
console.log(salary)


//Filtering the Bears
const bears = ['brown', 'grizzly', 'angry', 'charming']
const myFaveBears = bears.filter((bear, index) => {
  console.log(`${index}`)
  return bear === 'brown' || bear === 'angry'
})
console.log(myFaveBears)


//Do loops
do {
  salary.push(averageSalaries[i] * 2)
  i += 1
} while (i < averageSalaries.length)

