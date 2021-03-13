<script>
    let followingUser = "false";
    let username = "TLClassless";
    let url = "http://twitch.tv/username/";
    let location = "Liverpool";
    let description = "This is a the description of the user " + username + " enjoy the profile!";

    let posts = 99;
    let followers = 999;
    let following = 999;

    import Feed from "./Feed.svelte";
</script>

<main class="profile">
    <div class="profile-mast">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img class="profile-picture" src="img/users/TLClassless.jpg" alt="profile-picture" />
        <h1 class="username">/{username}</h1>
    </div>
    
    <div class="profile-description-container">
        <p class="profile-description-text">{description}</p>
        <span class="profile-description-information">
            <p class="profile-description-location">{location}</p>
            <a href="/" class="profile-description-url">{url}</a>
        </span>
    
    <div class="profile-stats">
        <span class="profile-stats-posts">
            <p class="profile-stats-number">{posts}</p>
            <p class="profile-stats-title">Posts</p>
        </span>
        <span class="profile-stats-posts">
            <p class="profile-stats-number">{followers}</p>
            <p class="profile-stats-title">Followers</p>
        </span>
        <span class="profile-stats-posts">
            <p class="profile-stats-number">{following}</p>
            <p class="profile-stats-title">Following</p>
        </span>
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

    .profile-stats {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .profile-stats-posts {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem 0;
    }

    .profile-stats-posts p {
        font-family: 'Rubik', sans-serif;
        margin: 0;
    }

    .profile-stats-title {
        font-size: 1rem;
    }

    .profile-stats-number {
        font-size: 1.8rem;
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

    .profile-buttons {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-bottom: 1rem;
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
        background-color: var(--light-accent);
        border-color: var(--light-accent);
    }

    .Report:active {
        background-color: var(--light-accent);
        border-color: var(--light-accent);
    }

    @media (min-width: 640px) {
		.username {
            font-size: 3.5rem;
		}

        .profile-picture {
            height: 6rem;
        }

	}
</style>