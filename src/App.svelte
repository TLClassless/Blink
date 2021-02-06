<script>
	import Header from "./Layout/Header.svelte";
	import Nav from "./Layout/Nav.svelte";
	import Userpost from "./Components/Blocks/User-Post.svelte";

	import { onMount } from 'svelte'; 

	let posts = [];

	onMount(async () => {
		const res = await fetch(`http://localhost:5000/api/posts.json`);
		posts = await res.json();
	});
</script>

<main>

	<Header />
	<span class="posts">
	{#each posts as post}
		<Userpost
		Profile={post.pic} 
		Username={post.name}
		Description={post.desc}
		Game={post.game}
		Lang={post.lang}
		Color={post.color}
		Gradient={post.gradient}
		Upvotes={post.upvotes}
		Video={post.videoid}
		/>
	{:else}
		<span class="loading-container"><img class="loader" src="img/spinner.svg" alt=""></span>

{/each}
	</span>
	<Nav />
</main>

<style>
	@media (min-width: 640px) {
		main {
			display: flex;
			justify-content: center;
		}
	}

	.loading-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	.loader {
		width: 2rem;
		height: 2rem;
	}

	main {
		width: 100%;
	}

	.posts {
		display: flex;
		flex-direction: column;
		max-width: 400px;
		margin-top: 3.5rem;
		margin-bottom: 3.5rem;
	}
</style>