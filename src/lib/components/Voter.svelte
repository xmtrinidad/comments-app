<script lang="ts">
    import Icon from "./Icon.svelte";

</script>

<div class="voter-container">
  <button><Icon name="add" /></button>
  <span class="voter-number">2</span>
  <button><Icon name="minus" /></button>
</div>

<style>
  .voter-container {
    display: flex;
    align-items: center;
  }
</style>