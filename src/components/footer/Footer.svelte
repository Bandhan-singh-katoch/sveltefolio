<script>
  //src/components/footer/Footer.svelte
  export let darkmodefooter;
  export let footerData = {};
  const { name, firstname } = footerData;
</script>

<style>
  .footer-div {
    margin-top: 2rem;
  }

  .footer-text {
    text-align: center;
    color: #868e96;
  }

  .footer-a {
    text-decoration: none;
    color: #868e96;
  }

  /* start blog dark mode */
  .footerdm-text {
    text-align: center;
    color: #fff;
  }

  .footerdm-a {
    text-decoration: none;
    color: #fff;
  }
  /* end blog dark mode */
</style>

<footer class="footer-div">
  <p class="footer-text" class:footerdm-text={darkmodefooter}>
    Made with Svelte 🤘 by {firstname} {name}
  </p>
  <p class="footer-text" class:footerdm-text={darkmodefooter}>
    Theme by
    <a
      class="footer-a"
      class:footerdm-a={darkmodefooter}
      href="https://github.com/saadpasta/developerFolio">
      developerFolio
    </a>
  </p>
</footer>
