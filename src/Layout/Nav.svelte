<script>
    export let home = "img/icons/home-active.svg";
    export let search = "img/icons/zoom-inactive.svg";
    export let activity = "img/icons/heart-inactive.svg";
    export let cog = "img/icons/cog-inactive.svg";
    export let media = "img/icons/media-active.svg";

    import {apiUrl} from "../js/api.js";

    let files;
</script>

<!-- <section class="upload">
    <form action="{apiUrl}">
        <input type="file" bind:files>
        <input type="submit" value="Submit">
    </form>
    {#if files && files[0]}
	<p>
		{files[0].name}
	</p>
{/if}
</section> -->

<main class="header">
    <div class="header-content">
        <img id="home" src={home} alt="home" class="icon">
        <img src={search} alt="search" class="icon">
        <span id="upload" class="icon"><img src={media} alt="upload"></span>
        <img src={activity} alt="activity" class="icon">
        <img src={cog} alt="settings" class="icon">
    </div>
</main>

<style>
    /* upload */
    /* .upload {
        height: 100%;
        width: 100%;
        display: flex;
        position: fixed;
        align-content: center;
        justify-content: center;
        background-color: #151926;
    } */
    /* upload */

    .header {
        display: block;
        margin: 0 auto;
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: #0E111A;
    }

    .header-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0.3rem 2rem;
    }

    .icon {
        height: 2rem;
    }

    #upload {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-color: var(--neon-trees-1);
    }

    #home {
        height: 1.8rem;
    }

    @media (min-width: 640px) {
        .header {
            display: none;
        }
	}
</style>