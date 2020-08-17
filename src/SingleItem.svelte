<script>
  //stores imports
  import { store } from "./store.js";

  export let id;
  export let foo;

  function handleDelete(id) {
    store.update((currentItems) => {
      currentItems = currentItems.filter((poll) => poll.id !== id);
      localStorage.setItem("test", JSON.stringify(currentItems));
      return currentItems;
    });
  }
</script>

<style>
  button {
    font-size: 16px;
    border: 1px solid red;
    opacity: 1;
  }
</style>

<div>
  <h3>{foo}</h3>
  <button on:click={handleDelete(id)}>Delete</button>
</div>
