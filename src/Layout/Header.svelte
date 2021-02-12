<script>
    export let userIcon;
    let login = "img/icons/user-placeholders.svg";
    let icon = "img/icons/blink-ico.svg";

    import {userstate} from '../js/store.js';
    import Dropdown from "../Components/Function/Dropdown-Menu.svelte"
</script>

<main class="header">
    <div class="header-content">
        <img src={icon} alt="icon" class="icon">
        {#if $userstate == true}
        <Dropdown 
            profilePicture = {userIcon}
        />
        {:else}
        <!-- <img src={login} alt="user" id="login" class="profile"> -->
        <Dropdown 
            profilePicture = {login}
        />
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
</style>