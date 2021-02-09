<script>
	import Header from "../Layout/Header.svelte";
    import {auth, provider} from '../js/firebase';

    function login(){
        auth.signInWithRedirect(provider);
    };
</script>

<main>
	<Header />
	<span class="posts">
        <button class="btn" on:click={login}>
        Sign in with Google
        </button>
	</span>
</main>

<style>
    .btn {
        display: flex;
        background-color: #fff;
        color: #000;
        text-align: center;
        text-decoration: none;
        width: 4rem;
    }

</style>