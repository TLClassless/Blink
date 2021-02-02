<script>
	import Header from "./Layout/Header.svelte";
	import Nav from "./Layout/Nav.svelte";
	import Userpost from "./Components/Blocks/User-Post.svelte";
</script>

<main>
	<Header />
	<span class="head-space"></span>
	<Userpost />
	<Userpost />
	<Userpost />
	<Userpost />
	<Userpost />
	<Userpost />
	<Userpost />
	<Nav />
</main>

<style>
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.head-space {
		display: block;
		height: 3.5rem;
		width: 100%;
	}
</style>