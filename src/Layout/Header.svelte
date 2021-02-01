<script>
    let icon = "img/blink-ico.svg";
    let messages = "img/messages.svg";
</script>

<main class="header">
    <div class="header-content">
        <img src={icon} alt="icon" class="icon">
        <img src={messages} alt="messages" class="messages">
    </div>
</main>

<style>
    .header {
        display: block;
        margin: 0 auto;
        position: absolute;
        top: 0;
        width: 100%;
    }

    .header-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
    }

    .messages {
        height: 3rem;
    }

    .icon {
        height: 2rem;
    }
</style>