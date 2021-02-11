<script>
    let usericon = "img/users/TLClassless.jpg";
    let login = "img/icons/user-placeholders.svg";
    let icon = "img/icons/blink-ico.svg";

    import {userstate} from '../js/store.js';
    import Dropdown from "../Components/Function/Dropdown-Menu.svelte"
</script>

<main class="header">
    <div class="header-content">
        <img src={icon} alt="icon" class="icon">
        {#if $userstate == true}
        <img src={usericon} alt="user" class="profile">
        {:else}
        <!-- <img src={login} alt="user" id="login" class="profile"> -->
        <Dropdown></Dropdown>
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

    .profile {
        border-radius: 50%;
        height: 1.8rem;
        border: 0.1rem;
        background-color: var(--neon-trees-1);
        border-color: var(--neon-trees-1);
        border-style: solid;
    }
/*     
    #login {
        background-color: #151926;
        border-color: #fff;
    } */
</style>