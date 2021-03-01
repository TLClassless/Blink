<script>
    let username = "TLClassless";
    let commented = "commented:";
    let liked = "liked your post!";
    let comment = "This is a sample comment!";

    
</script>

<main>
    <div class="notification">
        <img src="img/games/phasmophobia.png" class="content-thumbnail" alt="thumbnail" />
        <span class="interaction">
            <span class="interaction-indentity"><h3 class="interaction-type" id="color">/{username}</h3><span class="divider"></span><h3 class="interaction-type"> {commented}</h3></span>
            <p class="interaction-type">{comment}</p>
        </span>
    </div>
    <div class="notification">
        <img src="img/games/phasmophobia.png" class="content-thumbnail" alt="thumbnail" />
        <span class="interaction">
            <span class="interaction-indentity"><h3 class="interaction-type" id="color">/{username}</h3><span class="divider"></span><h3 class="interaction-type"> {commented}</h3></span>
            <p class="interaction-type">{comment}</p>
        </span>
    </div>
    <div class="notification">
        <img src="img/games/phasmophobia.png" class="content-thumbnail" alt="thumbnail" />
        <span class="interaction">
            <span class="interaction-indentity"><h3 class="interaction-type" id="color">/{username}</h3><span class="divider"></span><h3 class="interaction-type"> {commented}</h3></span>
            <p class="interaction-type">{comment}</p>
        </span>
    </div>
    <div class="notification">
        <img src="img/games/phasmophobia.png" class="content-thumbnail" alt="thumbnail" />
        <span class="interaction">
            <span class="interaction-indentity"><h3 class="interaction-type" id="color">/{username}</h3><span class="divider"></span><h3 class="interaction-type"> {commented}</h3></span>
            <p class="interaction-type">{comment}</p>
        </span>
    </div>
    <div class="notification">
        <img src="img/games/phasmophobia.png" class="content-thumbnail" alt="thumbnail" />
        <span class="interaction">
            <span class="interaction-indentity"><h3 class="interaction-type" id="color">/{username}</h3><span class="divider"></span><h3 class="interaction-type"> {commented}</h3></span>
            <p class="interaction-type">{comment}</p>
        </span>
    </div>
    <div class="notification">
        <img src="img/games/phasmophobia.png" class="content-thumbnail" alt="thumbnail" />
        <span class="interaction">
            <span class="interaction-indentity"><h3 class="interaction-type" id="color">/{username}</h3><span class="divider"></span><h3 class="interaction-type"> {commented}</h3></span>
            <p class="interaction-type">{comment}</p>
        </span>
    </div>
    <div class="notification">
        <img src="img/games/phasmophobia.png" class="content-thumbnail" alt="thumbnail" />
        <span class="interaction">
            <span class="interaction-indentity"><h3 class="interaction-type" id="color">/{username}</h3><span class="divider"></span><h3 class="interaction-type"> {commented}</h3></span>
            <p class="interaction-type">{comment}</p>
        </span>
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
    }

    .content-thumbnail {
        display: flex;
        height: 2.5rem;
        overflow: hidden;
        margin-right: 1rem;
    }

    .interaction {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .interaction-type {
        margin: 0;
        font-size: 1rem;
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
</style>