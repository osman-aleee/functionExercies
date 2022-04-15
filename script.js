// Function exercies
// Exercies No 1
function sum(...arg) {
	if (arg.length === 1 && Array.isArray(arg[0]))
		arg = [...arg[0]]
	return arg.reduce((a,b) => a+b)
}

const sumResult = sum([1,2,3,4])
console.log(sumResult)

// Exercies No 2
const circle = {
	radius:2,
	get area () {
		return Math.PI * this.radius * this.radius
	}
}

console.log(circle.area)

// Exercies No 3
function countOccurence(array, searchElement) {
	if (!Array.isArray(array))
		throw new Error("Invalid Array")
	return array.reduce((a,b) => {
		const occurence = (b === searchElement) ? 1 : 0
		return a + occurence
	}, 0)
}

try {
	const occurencArr = countOccurence(1, 1)
	console.log(occurencArr)
} 
catch(e) {
	console.log(e.message)
}
