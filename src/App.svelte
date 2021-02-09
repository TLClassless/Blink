<script>
	import Header from "./Layout/Header.svelte";
	import Nav from "./Layout/Nav.svelte";
	import Userpost from "./Components/Blocks/User-Post.svelte";
	import Login from "./Components/Login.svelte";
	
	// API fetch
	import { onMount } from 'svelte'; 
	let posts = [];
	onMount(async () => {
		const res = await fetch(`http://localhost:5000/api/posts.json`);
		posts = await res.json();
	});

	//Login/User Func
	import {userstate} from './js/store.js';
	import auth from './js/userstate.js';

</script>

<main>
	<Header />
	{console.log(userstate)}
	{#if $userstate == true}
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
	{/each}
</span>
	<Nav />
	{:else if $userstate == false}
	<Login></Login>
	{:else}
		<span class="loading-container"><img class="loader" src="img/icons/spinner.svg" alt=""></span>
	{/if}

	
	
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