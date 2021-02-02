<script>
    let icon = "img/blink-ico.svg";
    let settings = "img/cog-inactive.svg";
</script>

<main class="header">
    <div class="header-content">
        <img src={icon} alt="icon" class="icon">
        <img src={settings} alt="messages" class="messages">
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

    .messages {
        height: 2rem;
    }

    .icon {
        height: 1.5rem;
    }
</style>