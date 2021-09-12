<!--see how it's in order the nav is before the slot or pg components-->
<script>
	import Nav from '../components/nav.svelte';
</script>

<!--** what ever you add in here will go onto every page
* this page needs to display the children which are the page components so HAVE to include the slot -->
<!--this does not do a full refresh its intercepting the anchor tags and just doing a client side swap SO no request back to the server!  It does this by default which is diff from Next.js see vid 14:05 for next-->

<div class="p-10 max-w6xl mx-auto">
	<!-- also see another way to import the nav into the index by using import Nav; this might be better see other way 11:53 mins in video-->
	<Nav />
	<slot />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
