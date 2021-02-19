<script>
    export let userIcon;
    let login = "img/icons/user-placeholders.svg";
    let icon = "img/icons/blink-ico.svg";

    import {userstate} from '../js/store.js';
    import Dropdown from "../Components/Function/Dropdown-Menu.svelte";
</script>

<main class="header">
    <div class="header-content">
        <a href="/"><img src={icon} alt="icon" class="icon" /></a>
        {#if $userstate == true}
        <Dropdown 
            profilePicture = {userIcon}
        />
        {:else}
        <img src={login} alt="user" class="user"/>
        {/if}
    </div>
</main>

<style>
    .header {
        display: block;
        margin: 0 auto;
        position: fixed;
        top: 0;
        width: 100%;
        background-color: #151926;
        z-index: 10;
    }

    .header-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 1.5rem;
    }

    .icon {
        height: 1.5rem;
    }

    .user {
        border-radius: 50%;
        height: 1.8rem;
        border: 0.1rem;
        background-color: #151926;
        border-color: #fff;
        border-style: solid;
    }
</style>