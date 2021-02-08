<script>
  //src/components/education/Education.svelte
  export let educationData = {};
  const { viewEducation, schools } = educationData;
</script>

<style>
  .education-heading {
    font-size: 56px;
    font-weight: 400;
  }

  .education-section {
    display: flex;
    flex-direction: column;
    width: 90%;
    padding: 20px 0px;
    margin: 0px auto;
    margin-top: 2rem;
  }

  .education-section > * {
    flex: 1;
    margin-bottom: 30px;
  }

  .education-card-container {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
  }

  @media (max-width: 1380px) {
    .education-card-container {
      padding-top: 0px;
    }
    .education-heading {
      font-size: 40px;
    }
  }

  .education-card {
    display: flex;
    flex-direction: row;
  }

  .education-card:hover + .education-card-border {
    border-color: #a9a7f9;
    width: 100%;
    -webkit-transition: width 0.6s ease-in-out;
    -moz-transition: width 0.6s ease-in-out;
    -o-transition: width 0.6s ease-in-out;
    transition: width 0.6s ease-in-out;
  }

  .education-card-border {
    height: 30px;
    width: 80%;
    border-top: 2px solid rgba(211, 211, 211, 0.397);
    margin-bottom: 20px;
    -webkit-transition: width 0.6s ease-in-out;
    -moz-transition: width 0.6s ease-in-out;
    -o-transition: width 0.6s ease-in-out;
    transition: width 0.6s ease-in-out;
  }

  .education-text-school {
    margin: 0;
    font-size: 28px;
    font-weight: 700;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .education-roundedimg {
    object-fit: cover;
    margin-right: 2rem;
    width: 6rem;
    height: 6rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
    border-radius: 50%;
  }

  .education-card-right {
    max-width: 70%;
  }

  .education-text-subHeader {
    font-weight: 700;
    font-size: 19px;
    margin: 0px;
    padding-top: 0.8rem;
    line-height: normal;
  }

  .education-text-duration {
    font-size: 19px;
    margin: 0px;
    padding-top: 0.5rem;
  }

  .education-text-desc {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .education-text-bullets > ul {
    margin-top: 0.5rem;
  }

  @media (max-width: 1380px) {
    .education-card {
      flex-direction: column;
      padding-bottom: 10px;
    }
    .education-card-right {
      max-width: 90%;
    }
    .education-card-border {
      width: 90%;
    }
    .education-text-subHeader {
      padding-top: 0.5rem;
      font-size: 16px;
    }
    .education-text-school {
      font-size: 20px;
    }
    .education-text-duration {
      font-size: 16px;
    }
    .education-roundedimg {
      width: 4rem;
      height: 4rem;
      margin-bottom: 0.5rem;
      margin-right: 0px;
    }
  }

  @media (max-width: 768px) {
    .education-card-container {
      padding-top: 0px;
    }
    .education-heading {
      font-size: 30px;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    .education-card {
      text-align: center;
    }
    .education-card-right {
      max-width: 100%;
    }
    .education-card-border {
      width: 100%;
    }
    .education-roundedimg {
      margin-top: 10px;
      width: 4rem;
      height: 4rem;
      margin-bottom: 1rem;
      margin-right: 0;
    }
    .education-text-bullets > ul {
      max-width: 80%;
      margin: auto;
    }
  }
</style>

<div class="education-section" id="education">
  <h1 class="education-heading">Education</h1>
  <div class="education-card-container">
    {#each schools as list}
      <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <div class="education-card">
          <div class="education-card-left">
            <img
              class="education-roundedimg"
              src={list.logo}
              alt={list.schoolName} />
          </div>
          <div class="education-card-right">
            <h5 class="education-text-school">{list.schoolName}</h5>
            <div class="education-text-details">
              <h5 class="education-text-subHeader">{list.subHeader}</h5>
              <p class="education-text-duration">{list.duration}</p>
              <p class="education-text-desc">{list.desc}</p>
              <div class="education-text-bullets">
                <ul>
                  {#each list.descBullets as descBullets}
                    <li class="subTitle">{descBullets.bulletsName}</li>
                  {/each}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="education-card-border" />
      </div>
    {/each}
  </div>
</div>
