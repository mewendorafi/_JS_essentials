// function declaration
function declaration(a, b) {
	return a + b;
}

// function expression
const expression = function (a, b) {
	return a + b;
};

// named function expression
const named_expr = function sum(a, b) {
	return a + b;
};
sum();

// arrow function
const arrow_sum = (a, b) => {
	return a + b;
};

// single line arrow function (implicit return)
const shorthand_arrow_sum = (a, b) => a + b;

// omit parenthesis when single input parameter
const shorthand_arrow_fn = num => num * 42;

// IIFE
(function log_str() {
	console.log('Immediately Invoked Function Expression');
})(); // the parenthesis are the immediate function call

// anonymous IIFE (without name)
(function () {
	console.log('Anonymous Immediately Invoked Function Expression');
})();

// IIAFE
(() => {
	console.log('Immediately Invoked Arrow Function Expression');
})();
