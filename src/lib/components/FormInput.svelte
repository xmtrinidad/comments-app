<script lang="ts">
  export let id: string = '';
  export let name: string = '';
  export let type: string = 'text'
</script>

<div class="form-input-container">
  <label for="{id}">{name}</label>
  <input {type} {id}>
</div>

<style>
  .form-input-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  label {
    font-weight: 500;
  }

  input {
    padding: 8px 12px;
  }
</style>