<script lang="ts">
  import Comment from "$lib/components/Comment.svelte";
import NoComments from "$lib/components/NoComments.svelte";
    import Reply from "$lib/components/Reply.svelte";
  const topics = ['1'];
</script>



{#if topics.length === 0}
  <NoComments />
{:else}
  <div class="topics-container">

    <div class="topic">
      <Comment />
      <div class="topic-replies">
        <Comment />
        <Comment />
      </div>
      <Reply />
    </div>

  </div>
{/if}

<style>
  .topics-container {
    margin: 24px 12px;
    background-color: #fff;
    border-radius: 8px;
    background-color: #F5F6FA;
  }

  .topic {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .topic-replies {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-left: 24px;
    border-left: 2px solid #E9EBF0
  }
</style>