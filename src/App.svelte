<script>
	import Header from "./Layout/Header.svelte";
	import Nav from "./Layout/Nav.svelte";
	import Userpost from "./Components/Blocks/User-Post.svelte";

	import { onMount } from 'svelte'; 

	let posts = [];

	onMount(async () => {
		const res = await fetch(`http://localhost:5000/api/experiments.json`);
		posts = await res.json();
	});
</script>

<main>

	<Header />
	<span class="head-space"></span>
	<span class="posts">
	{#each posts as post}
		<Userpost
		Profile={post.pic} 
		Username={post.name}
		Game={post.game}
		Lang={post.lang}
		Upvotes={post.upvotes}
		/>
	{:else}
Loading...

{/each}
	</span>
	<span class="head-space"></span>
	<Nav />
</main>

<style>
	@media (min-width: 640px) {
		main {
			display: flex;
		}
	}

	main {
		width: 100%;
	}

	.posts {
		display: flex;
		flex-direction: column;
		justify-content: center;
		max-width: 400px;
	}

	.head-space {
		display: block;
		height: 3.5rem;
		width: 100%;
	}
</style>