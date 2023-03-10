<script lang="ts">
    import Avatar from "./Avatar.svelte";

</script>

<div class="reply-container">

  <label for="reply-textarea">
    <textarea placeholder="Add a comment..." id="reply-textarea"></textarea>
  </label>
  <div class="mobile-reply">
    <Avatar />
    <button>SEND</button>
  </div>

</div>

<style>
  .reply-container {
    padding: 16px;
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .mobile-reply {
    display: flex;
    justify-content: space-between;
  }

  textarea {
    border-radius: 8px;
    width: 100%;
    height: 96px;
    border: 1px solid #E9EBF0;
    padding: 12px 24px;
  }

  button {
    background-color: #5357B6;
    color: #fff;
    width: 104px;
    height: 48px;
    border-radius: 8px;
    font-weight: 600;
  }
</style>