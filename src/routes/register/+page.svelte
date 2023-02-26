<script lang="ts">
    import FormInput from "$lib/components/FormInput.svelte";

</script>


<div class="register-page">
  <h2>Register</h2>
  <form action="">
    <FormInput id="username" name="User Name" />
    <FormInput id="password" name="Password" type="password" />
    <button type="submit">Register</button>
  </form>
  <p>Already registered? <a href="/login">Login here!</a></p>
</div>

<style>
  .register-page {
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
  }

  button {
    display: block;
    padding: 16px;
    background-color: #7C4DFF;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
  }
</style>