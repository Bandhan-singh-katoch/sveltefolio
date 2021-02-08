<script>
  //src/components/achievement/Achievement.svelte
  export let achievementsData = {};
  const {
    viewachievementSection,
    title,
    subtitle,
    achivementsCards
  } = achievementsData;
  export let darkmodeachievement;
</script>

<style>
  .achievement-container {
    display: flex;
    width: 90%;
    padding: 20px 10px;
    margin: 0px auto;
    margin-top: 2rem;
  }

  .achievement-container > * {
    flex: 1;
  }

  .achievement-heading {
    font-size: 56px;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
  }

  .achievement-subtitle {
    text-transform: uppercase;
    margin: 0px;
    margin-bottom: 50px;
  }

  /* Media Query */

  @media (max-width: 1380px) {
    .achievement-heading {
      font-size: 40px;
    }
  }

  @media (max-width: 768px) {
    .achievement-heading {
      font-size: 30px;
      text-align: center;
    }

    .achievement-subtitle {
      font-size: 16px;
      line-height: normal;
      text-align: center;
    }
  }

  .card-image {
    max-width: 100%;
    height: auto;
    width: 250px;
  }

  .card-title {
    color: #000000;
    font-size: 22px;
    line-height: 24px;
    font-weight: 700;
    margin: 15px 0 0 0;
  }

  .card-subtitle {
    color: #666666;
    font-size: 17px;
    line-height: 1.5rem;
  }

  .certificate-card {
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px -15px;
    padding: 1.5rem;
    border-radius: 10px;
    border: 1px solid rgba(211, 211, 211, 0.397);
  }
  .certificate-detail-div {
    text-align: center;
  }
  .certificate-card:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px -10px;
  }

  /* start blog dark mode */
  .certificatedm-card {
    background-color: #171c28;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px -15px;
    border: 1px solid rgba(211, 211, 211, 0.397);
  }

  .carddm-title {
    color: #fff;
  }

  .carddm-subtitle {
    color: #fff;
  }
  /* end blog dark mode */

  .certificate-image-div {
    position: relative;
    height: 250px;
    overflow: hidden;
    text-align: center;
  }

  .achievement-cards-div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem 1rem;
    gap: 1rem 1rem;
  }

  .certificate-card-footer {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }

  .certificate-card-footer span.certificate-tag {
    background: #55198b;
    color: #f5f2f4;
    vertical-align: middle;
    align-items: center;
    border-radius: 4px;
    display: inline-flex;
    font-size: 0.75rem;
    height: 2em;
    justify-content: center;
    white-space: nowrap;
    line-height: 1.5;
    margin: 0 0.5rem 0.5rem 0;
    padding: 0 0.75em;
    cursor: pointer;
    transition: 0.2s ease-in;
  }

  span.certificate-tag:hover {
    background: #8c43ce;
  }

  span.certificate-tag a:hover {
    color: #fff;
    text-decoration: none;
  }

  span.certificate-tag a {
    color: #fff;
    text-decoration: none;
  }
</style>

<div id="achievement">
  <div class="achievement-container">
    <div class="achievement-main-div">
      <div class="achievement-header">
        <h1 class="heading achievement-heading">{title}</h1>
        <p class="subTitle achievement-subtitle">{subtitle}</p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500">
        <div class="achievement-cards-div">
          {#each achivementsCards as list}
            <div
              class="certificate-card"
              class:certificatedm-card={darkmodeachievement}>
              <div class="certificate-image-div">
                <img class="card-image" src={list.image} alt={list.title} />
              </div>
              <div class="certificate-detail-div">
                <h5 class="card-title" class:carddm-title={darkmodeachievement}>
                  {list.title}
                </h5>
                <p
                  class="card-subtitle"
                  class:carddm-subtitle={darkmodeachievement}>
                  {list.subtitle}
                </p>
              </div>
              <div class="certificate-card-footer">
                {#each list.footerLink as footerLink}
                  <span class="certificate-tag">
                    <a href={footerLink.url}>{footerLink.name}</a>
                  </span>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
