<svelte:head>
	<title>Svelte Kit Pokedex Class NOTES</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Class Notes</h1>
<ul class="list-disc p-10 max-w6xl mx-auto ">
	<li class="mb-2">
		At beginning of class he was using Svetle Stores, later he changed that, svelte stores are 14:57
		in
	</li>
	<li class="mb-2">Towards the end he explains why, but this Stores stuff is still good info.</li>
	<li class="mb-2">
		Instead of the api call coming from a store it ended up coming just from the pokestore.js file
		itself
	</li>
	<li class="mb-2">Check out Pokeapi.co</li>

	<li class="mb-2">At 23:00 in he shows how you can call the fetch a second time...</li>
	<li class="mb-2">
		A28:39 explains how putting the TW base styles in the __layout file makes the css global
	</li>

	<li class="mb-2">
		[id]svelte: using this page for any route that is /pokemon and then /something; will make
		another fetch request
	</li>
	<li class="mb-2">
		At the end he shows how you can put the context=module inside of the index.svelte file so it
		will be loaded on the index page before it needs it, but this code isnt' like that
	</li>
</ul>

<section>
	<h2>Image block</h2>
	<div class="py-40 px-4 grid grid-flow-col grid-cols-3 gap-4 bg-blue-200">
		<img src="https://source.unsplash.com/800x600/?nature,water" alt="random unsplash" />

		<img src="/guinea-pig-2400.jpg" width="" alt="guinea pic cutie" />
		<img src="https://source.unsplash.com/LEWbO3MqUsM" alt="owl big eyes" />
	</div>
</section>
