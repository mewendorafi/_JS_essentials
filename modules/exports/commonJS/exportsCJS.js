var name = 'name'
let name1 = 'name1'
const name2 = 'name2'

const myFunction = () => {
	console.log('I am an arrow function')
}

function myOtherFunction() {
	console.log('I am another function defined with function declaration')
}

// Individual export : exporting only one variable or function
module.exports = myOtherFunction

// Object export : exporting multiple variables and/or functions
// As we export a JS object, we can define keys names on export & rename them on import !
module.exports = { name, name1, name2, renamedFunction: myFunction, myOtherFunction }
