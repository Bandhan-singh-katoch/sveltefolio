<script>
  //src/components/contacttwitter/Twitter.svelte
  export let twitterData = {};
  const { viewtwitterSection, userName } = twitterData;
  export let darkmodetwitter;
</script>

<style>
  .centerContent {
    text-align: center;
    margin: auto;
    display: block;
    margin: 0 auto;
    padding: 1.5rem;
  }

  .tw-main-div {
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 15px;
    width: auto;
    padding: 1.5rem;
  }
</style>

<div class="tw-main-div" id="twitter">
  {#if darkmodetwitter}
    <div class="centerContent">
      <a
        class="twitter-timeline"
        data-lang="fr"
        data-width="600"
        data-height="600"
        data-theme="dark"
        href="https://twitter.com/{userName}?ref_src=twsrc%5Etfw">
        Tweets by {userName}
      </a>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8">
      </script>
    </div>
  {:else}
    <div class="centerContent">
      <a
        class="twitter-timeline"
        data-lang="fr"
        data-width="600"
        data-height="600"
        data-theme="light"
        href="https://twitter.com/{userName}?ref_src=twsrc%5Etfw">
        Tweets by {userName}
      </a>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8">
      </script>
    </div>
  {/if}
</div>
