<script lang="ts">
  export let id: string = '';
  export let name: string = '';
  export let type: string = 'text'
  export let value = '';
  export let resetInput = false;

  $: if (resetInput) {
    value = '';
    resetInput = false;
  }

  function handleInput(e: Event) {
    const element = e.currentTarget as HTMLInputElement;
    value = element.value;
  }
</script>

<div class="form-input-container">
  <label for="{id}">{name}</label>
  <input {value} on:input={handleInput} {type} {id}>
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