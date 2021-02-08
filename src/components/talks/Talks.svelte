<script>
  //src/components/talks/Talks.svelte
  export let talksData = {};
  const { viewtalkSection, title, subtitle, talks } = talksData;
</script>

<style>
  .container {
    display: flex;
    justify-content: center;
  }

  .talk-container {
    display: flex;
    width: 90%;
    padding: 20px 10px;
    margin: 0px auto;
    margin-top: 2rem;
  }

  .talk-container > * {
    flex: 1;
  }

  /* Rectangle Card Layout */
  .rectangle {
    background: url(../images/talksCardBack.svg);
    width: 380px;
    height: 300px;
    border-radius: 4px;
    box-shadow: 0px 20px 50px #d9dbdf;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    margin-top: 50px;
  }

  .rectangle:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  }

  /* Card  Styling */
  .talk-card-title {
    color: white;
    margin: auto;
    text-align: left;
    margin-top: 25px;
    padding: 0px 0px 40px 30px;
    font-size: 30px;
    line-height: normal;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .talk-card-subtitle {
    margin-top: 35px;
    text-align: justify;
    padding-left: 30px;
    padding-right: 30px;
    font-size: 16px;
    color: #7f8287;
    line-height: 18px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .talk-button {
    background-color: #55198b;
    color: white;
    width: 90px;
    padding: 10px 18px;
    border-radius: 3px;
    text-align: center;
    text-decoration: none;
    display: block;
    margin-top: 20px;
    font-size: 14px;
    cursor: pointer;
    transition: 0.2s ease-in;
  }

  .talk-button:hover {
    background: #8c43ce;
  }

  .card-footer-button-div {
    display: flex;
    justify-content: space-around;
  }

  /* Media Query */
  @media (max-width: 768px) {
    .talk-card-title {
      margin-top: 30px;
    }
  }
</style>

<div class="talk-container" id="talks">
  <div class="talk-header">
    <h1 class="talk-header-title">{title}</h1>
    <p class="subTitle talk-header-subtitle">{subtitle}</p>
    {#each talks as list}
      <div data-aos="fade-up" data-aos-duration="1500">
        <div class="container">
          <div class="rectangle">
            <div class="diagonal-fill" />
            <div class="talk-card-title">{list.title}</div>
            <p class="talk-card-subtitle">{list.subtitle}</p>
            <div class="card-footer-button-div">
              <a href={list.slides_url} target="_" class="talk-button">
                Slides
              </a>
              <a href={list.event_url} target="_" class="talk-button">Event</a>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
