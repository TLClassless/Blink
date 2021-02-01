<script>
    let home = "img/home-inactive.svg";
    let search = "img/zoom-inactive.svg";
    let activity = "img/heart-inactive.svg";
    let profile = "img/placeholder/user.png";
</script>

<main class="header">
    <div class="header-content">
        <img id="home" src={home} alt="home" class="icon">
        <img src={search} alt="search" class="icon">
        <span id="upload" class="icon"></span>
        <img src={activity} alt="activity" class="icon">
        <img id="profile" src={profile} alt="profile" class="icon">
    </div>
</main>

<style>
    .header {
        display: block;
        margin: 0 auto;
        position: absolute;
        bottom: 0;
        width: 100%;
        background-color: #0E111A;
    }

    .header-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
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
        background-color: blueviolet;
    }

    #home {
        height: 1.8rem;
    }
</style>