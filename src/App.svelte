<script>
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";
  import { store } from "./store.js";
  import SingleItem from "./SingleItem.svelte";

  let value;

  function handleSubmit(val) {
    const item = {
      id: Math.random() * Date.now(),
      foo: val,
    };

    store.update((currentItems) => {
      return (currentItems = [item, ...currentItems]);
    });

    localStorage.setItem("test", JSON.stringify($store));
    value = "";
  }

  onMount(() => {
    const testItems = localStorage.getItem("test")
      ? JSON.parse(localStorage.getItem("test"))
      : [];

    store.set(testItems);
  });
</script>

<div>
  {#each $store as item (item.id)}
    <div out:slide|local>
      <SingleItem {...item} />
    </div>
  {/each}
</div>

<button on:click={() => window.location.reload(true)}>Refresh page</button>

<form on:submit|preventDefault={handleSubmit(value)}>
  <input type="text" bind:value />
  <button>Submit</button>
</form>
