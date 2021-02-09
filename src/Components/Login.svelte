<script>
	import Header from "../Layout/Header.svelte";
    import {auth, provider} from '../js/firebase';

    function login(){
        auth.signInWithRedirect(provider);
    };
</script>

<main>
	<Header />
	<span class="login">
        <!-- <button class="btn">
            Sign in
        </button> -->
        <button class="btn" on:click={login}>
            <img class="btn-ico" src="img/icons/google-icon.svg" alt="Sign in with Google"> Sign in with Google
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
        align-items: center;
        justify-content: center;
        width: 16rem;
    }

    .btn-ico {
        height: 1rem;
        margin-right: 0.5rem;
    }

    main {
        height: 96%;
    }

    .login {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
</style>