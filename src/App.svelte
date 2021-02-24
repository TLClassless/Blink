<script>
	import Header from "./Layout/Header.svelte";
	import Nav from "./Layout/Nav.svelte";
	import Login from "./Components/Function/Login.svelte";
	import Feed from "./Pages/Feed.svelte";
	import Profile from "./Pages/Profile.svelte";

	//Login/User Func
	import {userstate} from './js/store.js';
	import auth from './js/userstate.js';

</script>

<main>
	<Header 
		userIcon="img/users/TLClassless.jpg"
	/>
	{#if $userstate == true}
	<section class="content">
		<Profile />
	</section>
	<div class="navbar"></div>
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

	.navbar {
		display: block;
		position:absolute;
		height: 3.5rem;
		bottom: 0;
	}

	.content {
		max-width: 640px;
		margin-left: 1rem;
		margin-right: 1rem;
		margin-top: 3.5rem; 
	}
</style>