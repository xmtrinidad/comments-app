<script lang="ts">
  import Comment from "$lib/components/Comment.svelte";
  import NoComments from "$lib/components/NoComments.svelte";
  import Reply from "$lib/components/Reply.svelte";
  let reply = '';
  let topics = [
    {
      id: Math.random(),
      user: 'Meme',
      createDate: '03/09/2023',
      text: 'Impressive! Though it seems the drag feature could be improved.',
      votes: 0,
      replies: [
        {
          id: Math.random(),
          user: 'Meme 2',
          createDate: '03/09/2023',
          text: 'But overall it looks incredible. You\'ve nailed the design and the responsiveness at various breakpoints works really well.',
          votes: 2,
          replies: []
        }
      ],
      isReply: false
    },
    {
      id: Math.random(),
      user: 'Meme',
      createDate: '03/09/2023',
      text: 'Impressive! Though it seems the drag feature could be improved.',
      votes: 0,
      replies: [],
      isReply: false
    }
  ];

  const hasReplies = false;

  function submitReply() {
    const newReply = {
      id: Math.random(),
      user: 'Meme',
      createDate: '03/09/2023',
      text: reply,
      votes: 0,
      replies: [],
      isReply: false
    }

    topics[0].replies.push(newReply);

    topics = topics;

    reply = '';
  }

  function onReplyClick() {
    topics[0].isReply = true;
    topics = topics;
  }
</script>



{#if topics.length === 0}
  <NoComments />
{:else}
  <div class="topics-container">

    {#each topics as topic (topic.id)}
      <div class="topic">
        <Comment on:click={onReplyClick} text={topic.text} />
        <div class="topic-replies">
          {#each topic.replies as topicReply (topicReply.id)}
          <Comment text={topicReply.text} />
          {/each}
        </div>
        {#if topic.isReply}
          <Reply bind:value={reply} on:click={submitReply} />
        {/if}
      </div>

    {/each}

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