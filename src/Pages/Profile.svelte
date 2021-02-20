<script>
    let following = "false";
    import Feed from "./Feed.svelte";
</script>

<main>
    <div class="profile-mast">
        <img class="profile-picture" src="" alt="" />
        <h1 class="username">/Username</h1>
    </div>
    
    <div class="profile-description-container">
        <p class="profile-description-text"></p>
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
        <img class="profile-games-img" src="" alt=""/>
        <img class="profile-games-img" src="" alt=""/>
        <img class="profile-games-img" src="" alt=""/>
        <img class="profile-games-img" src="" alt=""/>
        <img class="profile-games-img" src="" alt=""/>
    </div>

    <div class="profile-buttons">
        {#if following == true}
        <button class="Follow">Follow User</button>
        {:else}
        <button class="Follow">Unfollow User</button>
        {/if}
        <button class="Report">Report</button>
    </div>

    <div class="profile-feed">
        <Feed />
    </div>
</main>

<style>

</style>