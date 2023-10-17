// Custom function to log execution time
const t0 = Date.now();
const log = arg => console.log(`${arg} \n > Time elapsed: ${Date.now() - t0}ms`);

// Number of pokemons URLs to request
const limit = 50;
// Start index of the requested pokemon URLS (starts at 1)
const offset = 0;

function handlePokemonsFetch() {
	// First, get all the URLs of the pokemons needed
	fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
		.then(response => response.json())
		.then(data => {
			const mapURLsToFetch = data.results.map(object =>
				fetch(object.url)
					.then(res => res.json())
					.catch(error => console.error(error))
			);

			const promises = Promise.allSettled(mapURLsToFetch);

			promises.then(array => {
				array.forEach((promise, index) => {
					if (promise.status === 'fulfilled')
						console.log(`Promise ${index + 1} fulfilled for ${promise.value.name} ✅`);
					else console.log(`Promise ${index + 1} rejected ❌`);
				});
			});
		})
		.catch(error => console.log(error));
}

handlePokemonsFetch();

//! Alternative request approach
function handlePokemonsFetch_alt() {
	// Create an array of fetch Promises
	const fetchArray = () => {
		let array = [];
		for (let i = 0; i <= 15; i++) {
			array.push(
				fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
					.then(response => response.json())
					.catch(error => console.error(error))
			);
		}
		return array;
	};

	// Pass the array of fetch promises to the .allSettled() method
	// Returns on array when all promises are settled (either fulfilled OR rejected), whereas Promise.all() rejects if any of the iterable is rejected
	const promises = Promise.allSettled(fetchArray());

	// Iterate/loop over the array to check the status of the promise and get the data accordingly
	promises.then(array => {
		array.forEach((promise, index) => {
			if (promise.status === 'fulfilled')
				console.log(`Promise ${index + 1} fulfilled for ${promise.value.name} ✅`);
			else console.log(`Promise ${index + 1} rejected ❌`);
		});
	});
}

// handlePokemonsFetch_alt();

//! EXEMPLE (not functional)
// const promises = [promise1, promise2, promise3];
// Promise.allSettled(promises).then(results => {
// 	console.log(results);
// });
