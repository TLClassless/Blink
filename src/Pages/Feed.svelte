<script>
import Userpost from "../Components/Blocks/User-Post.svelte";

// API fetch
import { onMount } from 'svelte'; 
let posts = [];
onMount(async () => {
    const res = await fetch(`api/posts.json`);
    posts = await res.json();
});
</script>

<span class="posts">
    {#each posts as post}
        <Userpost
        Profile={post.pic} 
        Username={post.name}
        Description={post.desc}
        Game={post.game}
        Lang={post.lang}
        Color={post.color}
        Gradient={post.gradient}
        Upvotes={post.upvotes}
        Video={post.videoid}
        />
    {/each}
</span>

<style>
    .posts {
		display: flex;
		flex-direction: column;
		margin-bottom: 3.5rem;
	}
</style>