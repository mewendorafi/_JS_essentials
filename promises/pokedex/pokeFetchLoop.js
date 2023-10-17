// Responses in random order
function fetchLoop(n) {
	for (let i = 0; i <= n; i++) {
		fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
			.then(response => response.json())
			.then(data => console.log(data.id))
			.catch(error => console.error(error));
	}
}

fetchLoop(15);

// — Async/Await — Responses in ascending order
async function asyncFetchLoop(n) {
	for (let i = 0; i <= n; i++) {
		await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
			.then(response => response.json())
			.then(data => console.log(data.id))
			.catch(error => console.error(error));
	}
}

asyncFetchLoop(15);

/*
Execute the code & see the console logs:
1. Open a terminal in VS Code
2. Go to folder containing your code file (cd folderName)
2. Type the command "node", followed by the file name & format
3. Hit enter

Exemple: node fetch_loop.js
*/
