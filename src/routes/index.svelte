<script>
	import PokemanCard from '../components/pokemanCard.svelte';
	// { pokemon } is a named export so it needs the braces; and this is a writable that has data inside of it!
	import { pokemon, fetchPokemon } from '../pokestore';
	console.log($pokemon);

	let searchTerm = '';
	let filteredPokemon = [];

	//we use this $:{} as a function to react to any data that changes that is referenced inside of it ~ so in this case any time search term changes this function will get rerun

	//this would be like a callback function in react

	$: {
		if (searchTerm) {
			//search the pokemon and for each pokeman we only want to keep the pokeman if the name isncludes our search term
			filteredPokemon = $pokemon.filter((pokeman) =>
				pokeman.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			//reset the filtered pokeman to be the entire pokemon list that comes from the store
			//below means 'not the filtered pokemon but the pokemon that comes from the stores' and make a copy of the pokemon data and this is with the spread operator for arrays
			filteredPokemon = [...$pokemon];
		}
	}
	fetchPokemon();

	//the $ sign gets the data out and if the data changes it will react TO that data
	//the $ sign gets the data out and if the data changes it will react TO that data
</script>

<svelte:head>
	<!--alows head info on each page-->
	<title>Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">SvelteKit Pokedex</h1>
<h2 class="text-2xl text-center my-8 uppercase ">
	From James Quick's <a
		class="hover:underline font-bold text-red-400 hover:text-red-600"
		rel="external"
		href="https://youtu.be/UU7MgYIbtAk">YouTube SvelteKit Crash Course</a
	> ~ Thank you!
</h2>
<!-- below is example of 2 way binding aka: Two-way data binding refers to the ability to bind changes to an object's properties to changes in the UI and vice versa, -->
<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	bind:value={searchTerm}
	placeholder="Search Pokemon"
/>
<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	<!-- so below instead of coming from the stores it's iterating from the filteredPokemon -->
	{#each filteredPokemon as pokeman}
		<!-- my svelte extension chaged this to how it looks below below from how he made it which is <PokemanCard pokeman={pokeman}/>  -->
		<!-- here below we are receiving the PokemanCard compoonent and passing in pokeman to that component-->
		<PokemanCard {pokeman} />
	{/each}
</div>
