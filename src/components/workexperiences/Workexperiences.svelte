<script>
  //src/components/workexperiences/Workexperiences.svelte
  export let workexperiencesData = {};
  const { viewExperiences, experience } = workexperiencesData;
</script>

<style>
  .experience-cards-div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    gap: 1rem 1rem;
  }

  .experience-heading {
    font-size: 56px;
    font-weight: 400;
  }

  .experience-container {
    display: flex;
    width: 90%;
    padding: 20px 10px;
    margin: 0px auto;
    margin-top: 2rem;
  }

  .experience-container > * {
    flex: 1;
  }

  .experience-card {
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px -15px;
    border-radius: 10px;
    border: 1px solid rgba(211, 211, 211, 0.397);
  }

  .experience-card:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px -10px;
  }

  .experience-banner {
    background-position: center;
    background-repeat: no-repeat;
    background-size: 150%;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2));
    border-radius: 10px 10px 0px 0px;
    -webkit-filter: blur(0px);
    -moz-filter: blur(0px);
    -o-filter: blur(0px);
    -ms-filter: blur(0px);
    filter: blur(0px);
    height: 11rem;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .experience-blurred_div {
    position: absolute;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2));
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
    height: 11rem;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 10px 10px 0px 0px;
  }

  .experience-div-company {
    position: absolute;
    background: transparent;
    height: 9rem;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .experience-text-company {
    text-align: center;
    padding: 1.5rem;
    margin: 0;
    color: #fff;
    font-size: 25px;
    text-align: center;
    font-weight: 700;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .experience-roundedimg {
    position: absolute;
    object-fit: cover;
    left: 0;
    right: 0;
    top: 7rem;
    margin-left: auto;
    margin-right: auto;
    width: 8rem;
    height: 8rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
    border-radius: 50%;
  }

  .experience-text-role {
    text-align: center;
    font-weight: 700;
    font-size: 25px;
    margin: 0px;
    padding-top: 1.5rem;
    line-height: normal;
  }

  .experience-text-date {
    text-align: center;
    font-size: 20px;
    margin: 0px;
    padding-top: 1rem;
    font-weight: 600;
  }

  .experience-text-desc {
    text-align: center;
  }

  .experience-text-details {
    padding: 1.5rem;
    margin-top: 2rem;
  }

  /* Media Query */

  @media (max-width: 1380px) {
    .experience-heading {
      font-size: 40px;
    }
  }

  @media (max-width: 1380px) {
    .experience-text-role {
      padding-top: 0.5rem;
      font-size: 22px;
    }
    .experience-text-company {
      font-size: 22px;
    }
    .experience-text-date {
      font-size: 18px;
    }
    .experience-roundedimg {
      width: 6.5rem;
      height: 6.5rem;
    }
  }

  @media (max-width: 768px) {
    .experience-heading {
      font-size: 30px;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    .experience-text-role {
      font-size: 22px;
    }
    .experience-text-company {
      font-size: 22px;
    }
    .experience-text-date {
      font-size: 18px;
    }
    .experience-text-desc {
      font-size: 16px;
    }
  }
</style>

<div id="experience">
  <div class="experience-container" id="workExperience">
    <div>
      <h1 class="experience-heading">Experiences</h1>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500">
        <div class="experience-cards-div">
          {#each experience as list}
            <div class="experience-card">
              <div
                class="experience-banner"
                style="background-color: {list.companybackgroungcolor};">
                <div class="experience-blurred_div" />
                <div class="experience-div-company">
                  <h5 class="experience-text-company">{list.company}</h5>
                </div>
                <img
                  class="experience-roundedimg"
                  src={list.companylogo}
                  alt={list.company} />
              </div>
              <div class="experience-text-details">
                <h5 class="experience-text-role">{list.role}</h5>
                <h5 class="experience-text-date">{list.date}</h5>
                <p class="subTitle experience-text-desc">{list.desc}</p>
                <ul>
                  {#each list.descBullets as descBullets}
                    <li class="subTitle">{descBullets.bulletsName}</li>
                  {/each}
                </ul>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
