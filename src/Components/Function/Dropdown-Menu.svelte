<script>
    let clicked = false;
    export let profilePicture;
</script>

<div class="dropdown">
    <img src={profilePicture} alt="profilePic" class="dropbtn" on:click={() => clicked = !clicked} />
    <div class="dropdown-content" class:clicked={clicked} on:click={() => clicked = !clicked}>
        <a href="/">View Profile</a>
        <a href="/">Settings</a>
        <a id="logout" href="/">Log Out</a>
    </div>
</div>

<style>
    /* Dropdown Button */
    .dropbtn {
        border-radius: 50%;
        height: 1.8rem;
        border: 0.1rem;
        background-color: var(--neon-trees-1);
        border-color: var(--neon-trees-1);
        border-style: solid;
        cursor: pointer;
    }

    /* Dropdown button on hover & focus */
    .dropbtn:hover, .dropbtn:focus {
    background-color: #2980B9;
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
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    right: 0;
    }

    /* Links inside the dropdown */
    .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    }

    /* Change color of dropdown links on hover */
    .dropdown-content a:hover {background-color: #ddd}

    /* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
    .clicked {display:block;} 

    #logout {
        color: #FF0000;
    }
</style>