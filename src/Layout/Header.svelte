<script>
    let icon = "img/blink-ico.svg";
    let profile = "img/placeholder/user.png";
</script>

<main class="header">
    <div class="header-content">
        <img src={icon} alt="icon" class="icon">
        <img src={profile} alt="messages" class="profile">
    </div>
</main>

<style>
    .header {
        display: block;
        margin: 0 auto;
        position: fixed;
        top: 0;
        width: 100%;
        background-color: #151926;
    }

    .header-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 1.5rem;
    }

    .icon {
        height: 1.5rem;
    }

    .profile {
        border-radius: 50%;
        height: 1.8rem;
        border: 0.1rem;
        background-color: var(--neon-trees-1);
        border-color: var(--neon-trees-1);
        border-style: solid;
    }
</style>