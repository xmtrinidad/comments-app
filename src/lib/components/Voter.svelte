<script lang="ts">
    import Icon from "./Icon.svelte";

    export let voteCount = 0;

    function onVote(direction: 'up' | 'down') {
      if (direction === 'up') {
        voteCount += 1;
      } else {
        voteCount -= 1;
      }
    }
</script>

<div class="voter-container">
  <button on:click="{() => onVote('up')}"><Icon name="add" fill="#C5C6EF" /></button>
  <span class="voter-number">{voteCount}</span>
  <button on:click="{() => onVote('down')}"><Icon name="minus" fill="#C5C6EF" /></button>
</div>

<style>
  .voter-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #F5F6FA;
    border-radius: 10px;
    width: 100px;
    height: 40px;
  }
  
  button {
    background-color: transparent;
  }

  .voter-number {
    color: #5357B6;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    .voter-container {
      flex-direction: column;
      width: 40px;
      height: 100px;
    }
  }
</style>