<script>
    export let Profile;
    export let Username;
    export let Game;
    export let Lang;
    export let Upvotes;

    const Comment = "img/message.svg";
    const Share = "img/forward-inactive.svg";
    const Warning = "img/warning-inactive.svg";

</script>

<div class="profile">
    <span class="head">
        <span class="indentity">
            <img id="profile-picture" src={Profile} alt="profile"/>
            <span class="br"></span>
            <h3 class="username">/{Username}</h3>
        </span>
        <span class="information">
            <img class="circ-img" src={Game} alt="game" />
            <span class="br"></span>
            <span class="circ-img">
                <img class="crop-to-fill" src={Lang} alt="lang" />
            </span>
        </span>

    </span>

    <span class="player-cont">
        <img class="player" src="img/placeholder/gameplay.jpg" alt="gameplay-placeholder">
    </span>

    <span class="interaction">
        <span class="left">
            <span class="circ-img" id="upvotes">+{Upvotes}</span>
            <span class="br"></span>
            <span class="circ-img"><img class="comment" src={Comment} alt="comment" /></span>
            <span class="br"></span>
            <span class="circ-img"><img class="share" src={Share} alt="share" /></span>
        </span>
        <span class="right">
            <span class="circ-img"><img class="warning" src={Warning} alt="warning" /></span>
        </span>
    </span>

    <span class="description">
        <p class="description-txt"><b><i>{Username}</i></b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </span>
</div>

<style>
    .username {
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

    .profile {
        display: flex;
        flex-direction: column;
    }

    #profile-picture {
        display: flex;
        height: 2rem;
        width: 2rem;
        border: 0.1rem;
        border-radius: 50%;
        background-color: var(--neon-trees-1);
        border-color: var(--neon-trees-1);
        border-style: solid;
    }

    .br {
        width: 0.5rem;
    }

    .head {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 1.4rem;
    }

    .indentity {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .information {
        display: flex;
        flex-direction: row;
    }

    .circ-img {
        display: flex;
        border-radius: 50%;
        height: 2rem;
        width: 2rem;
        border: 0.2rem;
        background-color: #0E111A;
        border-color: #0E111A;
        border-style: solid;
    }

    .username {
        font-size: 1.4em;
        margin: 0;
    }

    .player {
        border-radius: 0.5rem;
    }

    .player-cont {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 11.5rem;
        object-fit: fill;
        margin: 0.8rem 0;
    }

    .crop-to-fill {
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        object-fit: cover;
    }

    .interaction {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 1.4rem;
    }

    .left {
        display: flex;
        flex-direction: row;
    }

    #upvotes {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8em;
    }
    
    .comment {
        padding: 0.2rem;
    }

    .share {
        padding: 0.1rem 0.2rem;
    }

    .warning {
        padding: 0.2rem;
    }

    .description {
        padding: 0 1.6rem;
    }

    .description-txt {
        margin: 0.5rem 0;
        max-height: 2.4rem;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 2rem;
    }
</style>