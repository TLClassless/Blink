<script>
    export let home = "img/home-inactive.svg";
    export let search = "img/zoom-inactive.svg";
    export let activity = "img/heart-inactive.svg";
    export let cog = "img/cog-inactive.svg";
</script>

<main class="header">
    <div class="header-content">
        <img id="home" src={home} alt="home" class="icon">
        <img src={search} alt="search" class="icon">
        <span id="upload" class="icon"></span>
        <img src={activity} alt="activity" class="icon">
        <img src={cog} alt="settings" class="icon">
    </div>
</main>

<style>
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

    #profile {
        border-radius: 50%;
        height: 1.8rem;
    }

    #upload {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-color: #fff;
    }

    #home {
        height: 1.8rem;
    }
</style>