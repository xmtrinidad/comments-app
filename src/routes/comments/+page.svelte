<script lang="ts">
  import Comment from "$lib/components/Comment.svelte";
import NoComments from "$lib/components/NoComments.svelte";
  const topics = ['1'];
</script>



{#if topics.length === 0}
  <NoComments />
{:else}
  <div class="topics-container">
    <Comment />
  </div>
{/if}

<style>
  .topics-container {
    margin: 24px 12px;
    background-color: #fff;
    border-radius: 8px;
  }
</style>