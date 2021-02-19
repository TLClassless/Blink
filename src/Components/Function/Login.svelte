<script>
    import { auth, provider } from '../../js/firebase.js';

    let clicked = true;

    let emailInput;
    let passwordInput;

    function loginWithGoogle(){
        auth.signInWithRedirect(provider);
    };

    function loginWithEmail(){
        let email = emailInput.value;
        let password = passwordInput.value;
        console.log(email, password);
        auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            //signed in
            var user = userCredential.user;
        })
        .catch((error) => {
            var loginerrorCode = error.code;
            var loginerrorMessage = error.message;
            alert(loginerrorMessage);
        })
    }

    let signupEmailInput;
    let signupPasswordInput;
    let signupUsernameInput;

    function signUpWithEmail(){
        let SUemail = signupEmailInput.value;
        let SUpassword = signupPasswordInput.value;
        auth.createUserWithEmailAndPassword(SUemail, SUpassword)
        .then((userCredential) => {
            //signed in
            var user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
        })
    }

</script>

<main>
    <!-- login -->
	<div class="login" class:clicked={!clicked}>
        <label for="uname"><b>Email</b></label>
        <input bind:this={emailInput} type="text" placeholder="enter@youremail.here" name="uname" required>

        <label for="psw"><b>Password</b></label>
        <input bind:this={passwordInput} type="password" placeholder="*************" name="psw" required>
        
        <span class="sign-up-space"></span>
        
        <input type="submit" value="Sign In" class="btn" on:click={loginWithEmail}>
        
        <p>Alternatively</p>

        <button class="btn" on:click={() => clicked = !clicked}>
            Sign Up with Email & Password
        </button>

        <button class="btn" on:click={loginWithGoogle}>
            <img class="btn-ico" src="img/icons/google-icon.svg" alt="Sign in with Google"> Sign in with Google
        </button>
	</div>

    <!-- signup -->
    <div class="login" class:clicked={clicked}> 
            <label for="email"><b>Email</b></label>
            <input bind:this={signupEmailInput} type="text" placeholder="enter@youremail.here" name="emailsignup" required>

            <label for="psw"><b>Create Password</b></label>
            <input bind:this={signupPasswordInput} type="password" placeholder="*************" name="pswsignup" required>
            
            <label for="uname"><b>Create Username</b></label>
            <input bind:this={signupUsernameInput} type="text" placeholder="sick_username" name="unamesignup">

            <span class="sign-up-space"></span>

            <input type="submit" value="Sign Up" class="btn" on:click={signUpWithEmail}>

            <p>Alternatively</p>
            <button class="btn" on:click={() => clicked = !clicked}>
                Sign In with Email & Password
            </button>
            <button class="btn" on:click={loginWithGoogle}>
                <img class="btn-ico" src="img/icons/google-icon.svg" alt="Sign in with Google"> Sign in with Google
            </button>
    </div>
</main>

<style>

    .sign-up-space {
        height: 1rem;
    }

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

    .clicked {
        display: none;
    }
</style>