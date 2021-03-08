<script>
    export let userIcon;
    let login = "img/icons/user-placeholders.svg";
    let icon = "img/icons/blink-ico.svg";

    import {userstate} from '../js/store.js';
    import Dropdown from "../Components/Function/Dropdown-Menu.svelte";
    import InteractionDropdown from "../Components/Function/Dropdown-Menu-Interactions.svelte";

    export let search = "img/icons/zoom-inactive.svg";
    export let cog = "img/icons/cog-inactive.svg";
    export let media = "img/icons/media-active.svg";

    import { Link } from "svelte-routing";
</script>

<main class="header">
    <div class="header-content">
        <a href="/"><img src={icon} alt="icon" class="user-icon" /></a>
        {#if $userstate == true}
        <div class="header-buttons">
            <!-- <img id="home" src={home} alt="home" class="icon"> -->
            <!-- <span class="divider" /> -->
            <a href="search"><img src={search} alt="search" class="icon"></a>

            <span class="divider" />
            
            <span class="icon"><InteractionDropdown /></span>
            
            <span class="divider" />

            <a href="settings"><img src={cog} alt="settings" class="icon"></a>
            
            <span class="divider" />
            
            <a href="upload"><span id="upload" class="icon"><img src={media} alt="upload"></span></a>
            
            <span class="divider" />
            
            <Dropdown 
            profilePicture = {userIcon}
            />
        </div>

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

    .header-buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .user-icon {
        height: 1.5rem;
    }

    .icon {
        display: none;
        height: 2rem;
    }

    .user {
        border-radius: 50%;
        height: 1.8rem;
        border: 0.1rem;
        background-color: #151926;
        border-color: #fff;
        border-style: solid;
    }

    #upload {
        display: none;
        align-items: center;
        justify-content: center;
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
        background-color: var(--neon-trees-1);
    }

    .divider {
        width: 0.5rem;
    }

    @media (min-width: 640px) {
        #upload {
            display: flex;
        }

        .icon {
            display: flex;
        }
	}
</style>