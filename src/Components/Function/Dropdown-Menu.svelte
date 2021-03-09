<script>
    let clicked = false;
    export let profilePicture;
    import { auth } from "../../js/firebase.js";

    const logout = () => {
        auth.signOut().then(() => {
            console.log('See Ya Next Time!')
        })
    }

    import { link } from "svelte-routing";
</script>

<div class="dropdown">
    <img src={profilePicture} alt="profilePic" class="dropbtn" on:click={() => clicked = !clicked} />
    <nav class="dropdown-content" class:clicked={clicked} on:click={() => clicked = !clicked}>
        <a id="profile-link" href="profile" use:link><p>View Profile</p></a>
        <a href="settings" use:link>Settings</a>
        <p id="logout" on:click={logout}>Log Out</p>
    </nav>
</div>

<style>
    /* Dropdown Button */
    .dropbtn {
        border-radius: 50%;
        height: 2rem;
        border: 0.1rem;
        background-color: var(--neon-trees-1);
        border-color: var(--neon-trees-1);
        border-style: solid;
        cursor: pointer;
    }

    /* The container <div> - needed to position the dropdown content */
    .dropdown {
    position: relative;
    display: inline-block;
    }

    /* Dropdown Content (Hidden by Default) */
    .dropdown-content {
    display: none;
    position: absolute;
    background-color: #0E111A;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    right: 0;
    }

    /* Links inside the dropdown */
    .dropdown-content a, p {
    color: #fff;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    margin: 0;
    }

    /* Change color of dropdown links on hover */
    .dropdown-content a:hover {background-color: #181d2e}
    .dropdown-content p:hover {background-color: #181d2e}

    /* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
    .clicked {display:block;} 

    #logout {
        color: #FF0000;
        cursor: pointer;
        margin: 0;
    }

    #profile-link {
        padding: 0;
    }
</style>