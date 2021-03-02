<script>
    let username = "TLClassless";
    let commented = "commented:";
    let liked = "liked your post!";
    let comment = "This is a sample comment! hi omg what a cool comment this will definitely go over one line";
    let thumbnail = "img/placeholder/thumbnail.jpeg";
    
</script>

<main>
    <div class="notification">
        <span class="interaction-span">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src="img/users/{username}.jpg" alt="profile-picture" class="profile-pic" />
            <span class="interaction">
                <span class="interaction-indentity"><h3 class="interaction-type" id="color">/{username}</h3><span class="divider"></span><h3 class="interaction-type"> {liked}</h3></span>
                <p class="interaction-type"></p>
            </span>
        </span>
        <img src="{thumbnail}" class="content-thumbnail" alt="thumbnail" />
    </div>

    <div class="notification">
        <span class="interaction-span">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src="img/users/{username}.jpg" alt="profile-picture" class="profile-pic" />
            <span class="interaction">
                <span class="interaction-indentity"><h3 class="interaction-type" id="color">/{username}</h3><span class="divider"></span><h3 class="interaction-type"> {liked}</h3></span>
                <p class="interaction-type"></p>
            </span>
        </span>
        <img src="{thumbnail}" class="content-thumbnail" alt="thumbnail" />
    </div>

    <div class="notification">
        <span class="interaction-span">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src="img/users/{username}.jpg" alt="profile-picture" class="profile-pic" />
            <span class="interaction">
                <span class="interaction-indentity"><h3 class="interaction-type" id="color">/{username}</h3><span class="divider"></span><h3 class="interaction-type"> {liked}</h3></span>
                <p class="interaction-type"></p>
            </span>
        </span>
        <img src="{thumbnail}" class="content-thumbnail" alt="thumbnail" />
    </div>

    <div class="notification">
        <span class="interaction-span">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src="img/users/{username}.jpg" alt="profile-picture" class="profile-pic" />
            <span class="interaction">
                <span class="interaction-indentity"><h3 class="interaction-type" id="color">/{username}</h3><span class="divider"></span><h3 class="interaction-type"> {commented}</h3></span>
                <p class="interaction-type">{comment}</p>
            </span>
        </span>
        <img src="{thumbnail}" class="content-thumbnail" alt="thumbnail" />
    </div>

    <div class="notification">
        <span class="interaction-span">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src="img/users/{username}.jpg" alt="profile-picture" class="profile-pic" />
            <span class="interaction">
                <span class="interaction-indentity"><h3 class="interaction-type" id="color">/{username}</h3><span class="divider"></span><h3 class="interaction-type"> {liked}</h3></span>
                <p class="interaction-type"></p>
            </span>
        </span>
        <img src="{thumbnail}" class="content-thumbnail" alt="thumbnail" />
    </div>

    <div class="notification">
        <span class="interaction-span">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src="img/users/{username}.jpg" alt="profile-picture" class="profile-pic" />
            <span class="interaction">
                <span class="interaction-indentity"><h3 class="interaction-type" id="color">/{username}</h3><span class="divider"></span><h3 class="interaction-type"> {liked}</h3></span>
                <p class="interaction-type"></p>
            </span>
        </span>
        <img src="{thumbnail}" class="content-thumbnail" alt="thumbnail" />
    </div>

    <div class="notification">
        <span class="interaction-span">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src="img/users/{username}.jpg" alt="profile-picture" class="profile-pic" />
            <span class="interaction">
                <span class="interaction-indentity"><h3 class="interaction-type" id="color">/{username}</h3><span class="divider"></span><h3 class="interaction-type"> {liked}</h3></span>
                <p class="interaction-type"></p>
            </span>
        </span>
        <img src="{thumbnail}" class="content-thumbnail" alt="thumbnail" />
    </div>
</main>

<style>
    .divider {
        width: 0.4rem;
    }

    .notification {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 1rem 0;
        width: 100%;
    }

    .content-thumbnail {
        display: flex;
        height: 2rem;
    }

    .interaction {
        display: flex;
        flex-direction: column;
    }

    .interaction-type {
        margin: 0;
        font-size: 0.8rem;
        /* display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;   */
        overflow: hidden;
        max-height: 1rem;
    }

    .interaction-indentity {
        display: flex;
        flex-direction: row;
    }

    #color {
        margin: 0;
        text-transform: uppercase;
        font-weight: 700;
        background-color: var(--neon-trees-1);
        background-image: linear-gradient(45deg, var(--neon-trees-1), var(--neon-trees-2));
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
    }

    .profile-pic {
        height: 2rem;
        border-radius: 50%;
        margin-right: 0.5rem;
        border: 0.1rem;
        border-style: solid;
        border-color: var(--neon-trees-1);
    }

    .interaction-span {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    /* @media (min-width: 640px) {
        
	} */
</style>