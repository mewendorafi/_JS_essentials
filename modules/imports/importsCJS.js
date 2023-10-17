// Usual import statement : importing only one variable or everything if the export is an object (import name is free)
const everything = require('../exports/commonJS/CJS_exports.js')

// Basic import statement : using object destructuring to access imported object's keys individually
const {
	name,
	renamedFunction,
	myOtherFunction,
} = require('../exports/commonJS/CJS_exports.js')

// Advanced import statement : using object destructuring while renaming some of the object's keys
const {
	name,
	name1: newName,
	renamedFunction,
	myOtherFunction: newFuncName,
} = require('../exports/commonJS/CJS_exports.js')
