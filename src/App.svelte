<script>
	import Header from "./Layout/Header.svelte";
	import Nav from "./Layout/Nav.svelte";
	import Login from "./Components/Function/Login.svelte";
	import Feed from "./Pages/Feed.svelte";
	import Profile from "./Pages/Profile.svelte";
	import Interactions from "./Pages/Interactions.svelte";
	import Settings from "./Pages/Settings.svelte";
	import Upload from "./Pages/Upload.svelte";
	import Search from "./Pages/Search.svelte";

	//Login/User Func
	import {userstate} from './js/store.js';
	import auth from './js/userstate.js';
	
	//Routing
	import { Router, Route, Link } from "svelte-routing";

	export let url = "";
</script>

<main>
	<Header 
		userIcon="img/users/TLClassless.jpg"
	/>
	{#if $userstate == true}
	<Router url="{url}">
	<section class="content">
		<Route path="/"><Feed /></Route>
		<Route path="interactions"><Interactions /></Route>
		<Route path="profile"><Profile /></Route>
		<Route path="settings"><Settings /></Route>
		<Route path="upload"><Upload /></Route>
		<Route path="search"><Search /></Route>
	</section>
	<div class="navbar"></div>
	
		<Nav />

	</Router>
	
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