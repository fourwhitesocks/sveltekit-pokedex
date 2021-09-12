import { writable } from "svelte/store";
// now take the import from the store and make it writable to other parts of our application as a writable and make it readable from other components from the writable
export const pokemon = writable([]);

const pokemonDetails = {};
let loaded = false;

export const fetchPokemon = async () => {
	if (loaded) return;
	const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
	// below is saying get info from the url
	const res = await fetch(url);
	//now we are waiting and convert the 'res' (response) to json
	const data = await res.json();
	// get the data then map over each one get the data and the index
	const loadedPokemon = data.results.map((data, index) => ({
		name: data.name,
		id: index + 1,
		//we are manipulating this url to get the id we are looking for
		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
			index + 1
		}.png`
	}));
	//below make it so others can listen to the data as it changes
	pokemon.set(loadedPokemon);
    
	loaded = true;
};

//now we have the data (from code above but how do we expose it, use the import above, from svelte.store)

//fetchPokemon();

export const getPokemonById = async (id) => {
	if (pokemonDetails[id]) return pokemonDetails[id];

	try {
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		const data = await res.json();
		pokemonDetails[id] = data;
		return data;
	} catch (err) {
		console.error(err);
		return null;
	}
};
