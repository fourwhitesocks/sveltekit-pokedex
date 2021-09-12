<script context="module">
	import { getPokemonById } from '../../pokestore';
	//this is server side rendering so it loads the information before we even display the component to user in the browser/ie it quieres the info before
	//when it sees this route it will see the async function has a context of module and it will call the function before it actually lets it be rendered
	export async function load(ctx) {
		//here we are getting the id from the params.id
		let id = ctx.page.params.id;
		const pokeman = await getPokemonById(id);
		//returns an object with props inside of it and a property of pokeman and then below it will accept a property of let pokeman... in the next script tags
		return { props: { pokeman } };
	}
</script>

<!-- It runs this query  before it actually renders this page-->
<script>
	export let pokeman;
	//after this you can use it to display the pokeman name below
	const type = pokeman.types[0].type.name;
</script>

<svelte:head>
	<title>Pokedex - {pokeman.name}</title>
</svelte:head>

<div class="flex flex-col items-center">
	<h1 class="text-4xl text-center my-8 uppercase">{pokeman.name}</h1>
	<p>
		Type: <strong>{type}</strong> | Height: <strong>{pokeman.height}</strong>
		| Weight: <strong>{pokeman.weight}</strong>
	</p>
	<img class="card-image" src={pokeman.sprites['front_default']} alt={pokeman.name} />
</div>
