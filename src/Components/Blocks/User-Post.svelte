<script>
    export let Username;
    export let Game;
    export let Lang;
    export let Upvotes;
    export let Description;
    export let Color;
    export let Gradient;
    export let Video;

    const Comment = "img/icons/message.svg";
    const Share = "img/icons/forward-inactive.svg";
    const Warning = "img/icons/warning-inactive.svg";

</script>

<div class="profile">
    <span class="head">
        <span class="indentity">
            <img class="{Color}" src="img/users/{Username}.jpg" alt="profile"/>
            <span class="br"></span>
            <h3 class="username {Gradient}">/{Username}</h3>
        </span>
        <span class="information">
            <img class="circ-img" src="img/games/{Game}.png" alt="game" />
            <span class="br"></span>
            <span class="circ-img">
                <img class="crop-to-fill" src="img/languages/{Lang}.svg" alt="lang" />
            </span>
        </span>

    </span>

    <span class="player-cont">
        <!-- svelte-ignore a11y-media-has-caption -->
        <video controls
        src="video/{Video}.mp4"
        width="100%" height="100%">
        </video>
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
        <p class="description-txt"><b><i>{Username}</i> </b>{Description}</p>
    </span>
</div>

<style>
    .username {
        text-transform: uppercase;
        font-family: 'Rubik', sans-serif;
        font-weight: 700;
        font-style: italic;
        background-color: var(--sunshine-girl-1);
        background-image: linear-gradient(45deg, var(--sunshine-girl-1), var(--sunshine-girl-2));
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

    .br {
        width: 0.5rem;
    }

    .head {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
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
        display: flex;
        flex-direction: row;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 2rem;
    }

    .description-txt {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  
        overflow: hidden;
        max-height: 3rem;
    }

    .neon-trees {
        display: flex;
        height: 2rem;
        width: 2rem;
        border: 0.1rem;
        border-radius: 50%;
        background-color: var(--neon-trees-1);
        border-color: var(--neon-trees-1);
        border-style: solid;
    }

    .neon-trees-grad {
        background-image: linear-gradient(45deg, var(--neon-trees-1), var(--neon-trees-2));
    }

    .sunshine-girl {
        display: flex;
        height: 2rem;
        width: 2rem;
        border: 0.1rem;
        border-radius: 50%;
        background-color: var(--sunshine-girl-1);
        border-color: var(--sunshine-girl-1);
        border-style: solid;
    }

    .sunshine-girl-grad {
        background-image: linear-gradient(45deg, var(--sunshine-girl-1), var(--sunshine-girl-2));
    }

    .green-is-the-new-brown {
        display: flex;
        height: 2rem;
        width: 2rem;
        border: 0.1rem;
        border-radius: 50%;
        background-color: var(--green-is-the-new-brown-1);
        border-color: var(--green-is-the-new-brown-1);
        border-style: solid;
    }

    .green-is-the-new-brown-grad {
        background-image: linear-gradient(45deg, var(--green-is-the-new-brown-1), var(--green-is-the-new-brown-2));
    }

    .condor-orange {
        display: flex;
        height: 2rem;
        width: 2rem;
        border: 0.1rem;
        border-radius: 50%;
        background-color: var(--condor-orange-1);
        border-color: var(--condor-orange-1);
        border-style: solid;
    }

    .condor-orange-grad {
        background-image: linear-gradient(45deg, var(--condor-orange-1), var(--condor-orange-2));
    }

    .oopsie-purple {
        display: flex;
        height: 2rem;
        width: 2rem;
        border: 0.1rem;
        border-radius: 50%;
        background-color: var(--oopsie-purple-1);
        border-color: var(--oopsie-purple-1);
        border-style: solid;
    }

    .oopsie-purple-grad {
        background-image: linear-gradient(45deg, var(--oopsie-purple-1), var(--oopsie-purple-2));
    }

    .seventeen-twelve {
        display: flex;
        height: 2rem;
        width: 2rem;
        border: 0.1rem;
        border-radius: 50%;
        background-color: var(--seventeen-twelve-1);
        border-color: var(--seventeen-twelve-1);
        border-style: solid;
    }   

    .seventeen-twelve-grad {
        background-image: linear-gradient(45deg, var(--seventeen-twelve-1), var(--seventeen-twelve-2));
    }

    .torn-on-blue {
        display: flex;
        height: 2rem;
        width: 2rem;
        border: 0.1rem;
        border-radius: 50%;
        background-color: var(--torn-on-blue-1);
        border-color: var(--torn-on-blue-1);
        border-style: solid;
    }

    .torn-on-blue-grad {
        background-image: linear-gradient(45deg, var(--torn-on-blue-1), var(--torn-on-blue-2));
    }
</style>