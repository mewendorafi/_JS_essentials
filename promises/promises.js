// Custom function to log runtime timeline
const t0 = Date.now();
const log = (id, res) => console.log(`_ [${Date.now() - t0}ms] ${res} in ${id} ...`);

// Syntax
new Promise((resolve, reject) => {});

// Generating a new Promise
const promise = new Promise((resolve, reject) => {
	const condition = true;
	if (condition === true) resolve(log('promises chain', 'Promise fulfilled ✅'));
	else reject(log('promises chain', 'Promise rejected ❌'));
});

// Chaining Promises
promise
	.then(data => log('promises chain', 'then'))
	.catch(error => {
		log('promises chain', 'catch');
		throw error; // throws an Error, stopping the program execution
	})
	.finally(() => log('promises chain', 'finally'));

// Async/Await
async function async_Await(arg) {
	try {
		await new Promise((resolve, reject) => {
			if (arg === 'resolve') resolve(log('async_Await', 'Promise fulfilled ✅'));
			else if (arg === 'reject') reject('Promise rejected ❌');
			// by default, throws an error to be caught by the catch block
			else throw new TypeError('Invalid or missing argument in function async_Await');
		});
	} catch (error) {
		// catch the error from the promise rejection case
		log('async_Await fn', error);
		throw error;
	}
}

async_Await('resolve');

// Generating an array of promises with a loop
const fetchPromises = [
	'https://api.kanye.rest/',
	'https://api.chucknorris.io/jokes/random',
	'https://pokeapi.co/api/v2/pokemon/',
].map(async (URL, index) => {
	const data = await fetch(URL);
	return await data.json();
});

Promise.resolve('Promise fulfilled ✅').then(result => log('Promise.resolve()', result));

Promise.reject('Promise rejected ❌').catch(error => log('Promise.reject()', error));

Promise.allSettled(fetchPromises).then(result => log('Promise.allSettled', JSON.stringify(result)));

Promise.all(fetchPromises).then(result => log('Promise.all', JSON.stringify(result)));

Promise.any(fetchPromises).then(result => log('Promise.any', JSON.stringify(result)));

Promise.race(fetchPromises).then(result => log('Promise.race', JSON.stringify(result)));
