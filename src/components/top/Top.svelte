<script>
  //src/components/top/Top.svelte
</script>

<style>
  #topButton {
    visibility: hidden;
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
    border: none;
    outline: none;
    background-color: #55198b;
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 15px;
    font-size: 25px;
  }

  #topButton:hover {
    background-color: #000;
    transition: all ease-in-out 0.2s;
  }
</style>

<button
  onclick="window.location.href='#header';"
  id="topButton"
  title="Go to top"
  style="visibility: visible;">
  <i class="fas fa-hand-point-up" />
</button>
