<script>
  let m = {x: 0, y: 0};
  function handleMouseMove(event) {
    m.x = event.clientX;
    m.y = event.clientY;
  }
</script>

<!-- MARKUP //////////////////////////////////////////////////////////////// -->
<div id="main-container">
  <div on:mousemove={handleMouseMove}>
    The mouse position is {m.x} x {m.y}
  </div>
</div>

<!-- STYLE /////////////////////////////////////////////////////////////// -->
<style>
  #main-container {
    padding: 1rem;
    height: 100vh;
  }
  #main-container > div {
    width: 100%;
    height: 100%;
  }
</style>