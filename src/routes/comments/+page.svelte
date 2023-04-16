<script lang="ts">
  import Comment from "$lib/components/Comment.svelte";
  import NoComments from "$lib/components/NoComments.svelte";
  import Reply from "$lib/components/Reply.svelte";
  import { meme, topics } from "$lib/stores/mainStore";
  import type { NewReply } from "$lib/types";
  let reply = '';


  function submitReply(reply: NewReply) {
    console.log(reply);
    const newReply = {
      id: Math.random(),
      user: 'Meme',
      createDate: '03/09/2023',
      text: reply.commentReply,
      commentReply: '',
      votes: 0,
      replies: [],
      isReply: false
    }

    reply.replies.push(newReply);

    topics.update((topics) => {
      return topics;
    });

    // topics = topics;
  }

  function onReplyClick(topic) {
    console.log(topic);
    topic.isReply = !topic.isReply;
    topics.update((topics) => {
      return topics;
    });
  }
</script>



{#if $topics.length === 0}
  <NoComments />
{:else}
  <div class="topics-container">

    {#each $topics as topic (topic.id)}
      <div class="topic">
        <Comment on:click={() => onReplyClick(topic)} text={topic.text} />
        <div class="topic-replies">
          {#each topic.replies as topicReply (topicReply.id)}
          <Comment on:click={() => onReplyClick(topicReply) } text={topicReply.text} />
          {#if topicReply.isReply}
            <Reply bind:value={topicReply.commentReply} on:click={() => submitReply(topicReply)} />
          {/if}
          {/each}
        </div>
        {#if topic.isReply}
          <Reply bind:value={topic.commentReply} on:click={() => submitReply(topic)} />
        {/if}
      </div>

    {/each}
    {$meme}
  </div>
{/if}

<style>
  .topics-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
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