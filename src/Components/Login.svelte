<script>
    import {auth, provider} from '../js/firebase';

    let emailInput;
    let passwordInput;



    function loginWithGoogle(){
        auth.signInWithRedirect(provider);
    };

    function loginWithEmail(){
        let email = emailInput.value;
        let password = passwordInput.value;
        auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            //signed in
            var user = userCredential.user;
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        })
    }
</script>

<main>
	<span class="login">
        <label for="uname"><b>Email</b></label>
        <input bind:this={emailInput} type="text" placeholder="enter@youremail.here" name="uname" required>

        <label for="psw"><b>Password</b></label>
        <input bind:this={passwordInput} type="password" placeholder="*************" name="psw" required>
        <button class="btn" on:click={loginWithEmail}>
            Sign in
        </button>
        <p>Alternatively</p>
        <button class="btn" on:click={loginWithGoogle}>
            <img class="btn-ico" src="img/icons/google-icon.svg" alt="Sign in with Google"> Sign in with Google
        </button>
        <button class="btn">
            Sign Up with Email & Password
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
        cursor: pointer;
    }

    input {
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