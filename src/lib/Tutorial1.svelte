<script>
  import Tutorial2 from "./Tutorial2.svelte";
  let todos = [
    {done: false, text: "finish Svelte tutorial"},
    {done: false, text: "build an app"},
    {done: false, text: "world domination"},
  ];

  function add() {
    todos = todos.concat({done:false, text: ""});
  }

  function clear() {
    todos = todos.filter(t => !t.done);
  }

  $: remaining = todos.filter(t => !t.done).length;

</script>

<!-- MARKUP //////////////////////////////////////////////////////////////// -->
<div id="main-container">

  <h1>Todos</h1>

  {#each todos as todo}
    <div class:done={todo.done}>
      <input type=checkbox bind:checked={todo.done} />
      <input placeholder="What needs to be done?" bind:value={todo.text} />
    </div>
  {/each}

  <p>
    {remaining} remaining
  </p>

  <button on:click={add}>Add new</button>
  <button on:click={clear}>Clear completed</button>

</div>

<!-- STYLE /////////////////////////////////////////////////////////////// -->
<style>
  #main-container {
    padding: 1rem;
    height: 100vh;
  }
  .done {
    opacity: 0.4;
  }
</style>