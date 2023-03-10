<script lang="ts">
  import Avatar from "./Avatar.svelte";
  import Voter from "./Voter.svelte";

</script>

<div class="comment-container">

  <div class="desktop-voter">
    <Voter voteCount="{5}" />
  </div>

  <div class="comment-header-body-container">
    <div class="comment-header">
      <div class="comment-header-avatar-container">
        <Avatar />
        <h2 class="comment-header-username">Meme</h2>
        <span class="comment-header-time desktop-time">1 month ago</span>
      </div>
      <span class="comment-header-time mobile-time">1 month ago</span>
      <button class="reply-btn desktop-reply">Reply</button>
    </div>
    <div class="comment-body">
      <p>Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.</p>
    </div>
    <div class="comment-footer">
      <Voter voteCount="{5}" />
      <button class="reply-btn">Reply</button>
    </div>
  </div>
  
</div>

<div class="replies">

</div>


<style>
  .comment-container {
    background-color: #fff;
    border-radius: 8px;
  }
  .desktop-voter {
    display: none;
  }

  .comment-header-body-container {
    padding: 8px 12px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .comment-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .comment-header-avatar-container {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .comment-header-time {
    color: #67727E;
  }

  .desktop-time,
  .desktop-reply {
    display: none;
  }

  .comment-header-username {
    font-size: 1rem;
  }

  .comment-body p {
    line-height: 24px;
  }

  .comment-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .reply-btn {
    background-color: transparent;
    color: #5357B6;
    width: 66px;
    height: 24px;
    border-radius: 4px;
    font-weight: 600;
  }

  @media (min-width: 768px) {
    .comment-container {
      display: flex;
      align-items: center;
      padding: 24px;
    }

    .comment-footer {
      display: none;
    }

    .desktop-voter,
    .desktop-time,
    .desktop-reply {
      display: block;
    }

    .mobile-time {
      display: none;
    }
  }
</style>