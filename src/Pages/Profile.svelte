<script>
    let followingUser = "false";
    let username = "TLClassless";
    import Feed from "./Feed.svelte";
</script>

<main class="profile">
    <div class="profile-mast">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img class="profile-picture" src="img/users/TLClassless.jpg" alt="profile-picture" />
        <h1 class="username">/{username}</h1>
    </div>
    
    <div class="profile-description-container">
        <p class="profile-description-text">Lorem ipsum solar dolomet</p>
        <span class="profile-description-information">
            <p class="profile-description-location">Location</p>
            <a href="/" class="profile-description-url">http://twitch.tv/username/</a>
        </span>
    
    <div class="profile-stats">
        <span class="profile-stats-posts">
            <p class="profile-stats-number"></p>
            <p class="profile-stats-title"></p>
        </span>
        <span class="profile-stats-followers">
            <p class="profile-stats-number"></p>
            <p class="profile-stats-title"></p>
        </span>
        <span class="profile-stats-following">
            <p class="profile-stats-number"></p>
            <p class="profile-stats-title"></p>
        </span>
    </div>
    
    <div class="profile-games">
        <img class="profile-games-img" src="img/games/overwatch.png" alt="placeholder"/>
        <img class="profile-games-img" src="img/games/overwatch.png" alt="placeholder"/>
        <img class="profile-games-img" src="img/games/overwatch.png" alt="placeholder"/>
        <img class="profile-games-img" src="img/games/overwatch.png" alt="placeholder"/>
        <img class="profile-games-img" src="img/games/overwatch.png" alt="placeholder"/>
    </div>

    <div class="profile-buttons">
        {#if followingUser === true}
        <button class="Follow">Unfollow User</button>
        {:else}
        <button class="Follow">Follow User</button>
        {/if}
        <button class="Report">Report</button>
    </div>

    <div class="profile-feed">
        <Feed />
    </div>
</main>

<style>

    .profile-mast {
        margin-top: 2rem;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;      
    }

    .profile-picture {
        border-radius: 50%;
        height: 4rem;
        border: 0.2rem;
        background-color: var(--neon-trees-1);
        border-color: var(--neon-trees-1);
        border-style: solid;
        cursor: pointer;
    }

    .username {
        font-size: 2rem;
        margin: 0;
        text-transform: uppercase;
        font-family: 'Rubik', sans-serif;
        font-weight: 700;
        font-style: italic;
        background-color: var(--neon-trees-1);
        background-image: linear-gradient(45deg, var(--neon-trees-1), var(--neon-trees-2));
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
    }

    .profile-description-information {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .profile-description-location{
        margin: 0;
    }

    .profile-games {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.5rem;
    }

    .profile-games-img {
        border-radius: 50%;
        height: 3rem;
        border: 0.1rem;
        background-color: var(--neon-trees-1);
        border-color: var(--neon-trees-1);
        border-style: solid;
        cursor: pointer;
    }

    .profile-buttons {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .Follow {
        width: 80%;
        margin: 0.2rem;
        margin-left: 0;
        background-color: var(--accent-color);
        border-color: var(--accent-color);
        color: #fff;
    }

    .Report {
        width: 20%;
        margin: 0.2rem;
        margin-right: 0;
        background-color: var(--accent-color);
        border-color: var(--accent-color);
        color: #fff;
    }

    .Follow:active {
        background-color: #1b2136;
        border-color: #1b2136;
    }

    .Report:active {
        background-color: #1b2136;
        border-color: #1b2136;
    }

    @media (min-width: 640px) {
		.username {
            font-size: 3.5rem;
		}
	}
</style>