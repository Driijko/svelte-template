<!-- SCRIPTS ///////////////////////////////////////////////////////////// -->
<script>
  const emojis = {
    apple: "🍎",
    banana: "🍌",
    carrot: "🥕",
    doughnut: "🍩",
    egg: "🥚",
	}

  export let name;

  $: emoji = emojis[name];
</script>

<!-- MARKUP //////////////////////////////////////////////////////////////// -->
<p>
  <span>The emoji for {name} is {emoji}</span>
</p>

<!-- STYLE /////////////////////////////////////////////////////////////// -->
<style>
  p {
    margin: 0.8rem 0;
  }
  span {
    display: inline-block;
    padding: 0.2rem 1rem 0.3rem;
    text-align: center;
    border-radius: 0.2rem;
    background-color: #FFDFD3;
  }
</style>