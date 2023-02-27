<script lang="ts">
  import FormInput from "$lib/components/FormInput.svelte";

  let username = '';
  let password = ''

  let resetInput = false;

  async function onLogin(e: Event) {
    e.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'content-type': 'application/json'
      }
    });

    const msg = await response.json();
    console.log(msg);

    reset();
  }

  function reset() {
    resetInput = true;

    setTimeout(() => {
      resetInput = false;
    }, 1000);
  }
</script>


<div class="login-page">
  <h2>Register</h2>
  <form on:submit={onLogin} method="POST">
    <FormInput {resetInput} bind:value="{username}" id="username" name="User Name" />
    <FormInput {resetInput} bind:value="{password}" id="password" name="Password" type="password" />
    <button type="submit">Register</button>
  </form>
  <p>Not registered? <a href="/register">Register here!</a></p>
</div>

<style>
  .login-page {
    max-width: 480px;
    margin: 42px auto;
  }

  h2 {
    margin-bottom: 24px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 16px;
  }

  button {
    display: block;
    padding: 16px;
    background-color: var(--accent-color);
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
  }
</style>