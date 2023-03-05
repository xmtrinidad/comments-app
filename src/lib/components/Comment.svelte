<script lang="ts">
    import Voter from "./Voter.svelte";

</script>

<div class="comment-container">
  <div class="desktop-voter">
    <Voter />
  </div>

  <div class="comment-header-body-container">
    <div class="comment-header">
      <div class="comment-header-avatar-container">
        <div class="comment-header-avatar"></div>
        <h2 class="comment-header-username">Meme</h2>
      </div>
      <span class="comment-header-time">1 month ago</span>
    </div>
    <div class="comment-body">
      <p>Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.</p>
    </div>
    <div class="comment-footer">
      <Voter />
      <button>Reply</button>
    </div>
  </div>
  
</div>

<style>
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

  .comment-header-avatar {
    width: 32px;
    height: 32px;
    border-radius: 100%;
    background-color: hotpink;
  }

  .comment-header-time {
    color: #67727E;
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

  .comment-footer button {
    background-color: transparent;
    color: #5357B6;
    width: 66px;
    height: 24px;
    border-radius: 4px;
    font-weight: 600;
  }
</style>