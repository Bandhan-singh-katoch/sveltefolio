<script>
  //src/components/podcasts/Podcasts.svelte
  export let podcastsData = {};
  const { viewpodcastsSection, title, subtitle, podcasts } = podcastsData;
</script>

<style>
  .podcast-container {
    display: grid;
    width: 90%;
    padding: 20px 10px;
    margin: 0px auto;
    margin-top: 2rem;
  }

  .podcast-header-title {
    font-size: 56px;
    font-weight: 400;
    line-height: 0px;
  }

  .podcast {
    width: 600px;
  }

  .podcast-main-div {
    display: grid;
    float: left;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem 1rem;
  }

  @media (max-width: 768px) {
    .podcast-header-title {
      font-size: 30px;
      text-align: center;
    }

    .podcast-header-subtitle {
      font-size: 16px;
      line-height: normal;
      text-align: center;
    }

    .podcast {
      width: 300px;
    }

    .podcast-main-div {
      text-align: center;
      display: block;
    }
  }
</style>

<div id="podcast">
  <div class="podcast-container">
    <div class="podcast-header">
      <h1 class="podcast-header-title">{title}</h1>
      <p class="subTitle podcast-header-subtitle">{subtitle}</p>
    </div>
    {#each podcasts as list}
      <div class="podcast-main-div">
        <div>
          <iframe
            class="podcast"
            src={list.podcast_url}
            title="podcast"
            frameborder="0"
            scrolling="no" />
        </div>
      </div>
    {/each}
  </div>
</div>
