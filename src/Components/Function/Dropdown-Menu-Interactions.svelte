<script>
    let clicked = false;
    let icon = "img/icons/heart-inactive.svg";
    let iconClicked = "img/icons/heart-active.svg";
    import Interactions from "../Blocks/Interactions.svelte";

</script>

<div class="dropdown">
    <img src={icon} alt="heart-icon" class="dropbtn" on:click={() => clicked = !clicked} />
    <div class="dropdown-content" class:clicked={clicked} on:click={() => clicked = !clicked}>
        <Interactions />
    </div>
</div>

<style>
    /* Dropdown Button */
    .dropbtn {
        height: 2rem;
        cursor: pointer;
    }

    /* The container <div> - needed to position the dropdown content */
    .dropdown {
    position: relative;
    display: inline-block;
    }

    /* Dropdown Content (Hidden by Default) */
    .dropdown-content {
    display: none;
    position: absolute;
    background-color: #0E111A;
    min-width: 160px;
    max-height: 400px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    right: 0;
    overflow-y: scroll;
    }

    /* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
    .clicked {display:block;} 

</style>