<script lang="ts">
  import { meme } from "$lib/stores/mainStore";

  function updateMeme() {
    meme.update((meme) => {
      console.log(meme);
      return 'new meme'
    });
  }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>This is the mainStore: {$meme}</p>
<button on:click={updateMeme}>Update Meme</button>
<a href="/comments">Link to comments</a>
