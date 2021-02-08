<script>
  //src/components/skills/Skills.svelte
  export let skillsData = {};
  const { title, subTitle, skills, softwareSkills } = skillsData;
</script>

<style>
  .skills-main-div {
    display: flex;
  }
  .skills-text-div {
    margin-left: 50px;
  }

  .skills-main-div > * {
    flex: 1;
    margin-bottom: 30px;
  }

  .skills-image-div > img {
    max-width: 100%;
    height: auto;
  }

  .skills-heading {
    font-size: 56px;
    font-weight: 400;
  }

  /* Media Query */
  @media (max-width: 1380px) {
    .skills-heading {
      font-size: 40px;
    }
  }
  @media (max-width: 768px) {
    .skills-heading {
      font-size: 30px;
      text-align: center;
    }
    .greeting-text-p {
      font-size: 16px;
      line-height: normal;
    }
    .skills-main-div {
      flex-direction: column;
    }
    .skills-text-div {
      margin-left: 0px;
      margin: 20px;
    }
    .skills-text {
      font-size: 16px;
    }
    .skills-text-subtitle {
      font-size: 16px;
      text-align: center;
    }
    .skills-image-div {
      /* display: none; */
      order: 2;
    }
  }

  /* SoftwareSkill */
  .dev-icons {
    padding-left: 0;
    list-style: none;
    font-size: 3rem;
    margin-bottom: 0px;
    margin-top: 0px;
    text-align: center;
  }

  .software-skill-inline {
    display: inline-block;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .software-skill-inline > i {
    color: #868e96;
  }

  .software-skill-inline > i:hover {
    color: #645beb;
  }
  .software-skill-inline > p {
    color: #868e96;
    font-size: 10px;
  }
  .software-skill-inline > i:hover ~ p {
    color: #645beb;
  }
</style>

<div id="Skillssection">
  <div class="main" id="skills">
    <div class="skills-main-div">
      <div data-aos="fade-right">
        <div class="skills-image-div">
          <img alt="Saad Working" src="images/developerActivity.svg" />
        </div>
      </div>
      <div data-aos="fade-left">
        <div class="skills-text-div">
          <h1 class="skills-heading">{title}</h1>
          <p class="subTitle skills-text-subtitle">{subTitle}</p>
          <div class="software-skills-main-div">
            <ul class="dev-icons">
              {#each softwareSkills as list}
                <li class="software-skill-inline">
                  <i class={list.fontAwesomeClassname} />
                  <p>{list.skillName}</p>
                </li>
              {/each}
            </ul>
          </div>
          <div>
            {#each skills as skillslist}
              <p class="subTitle skills-text">{skillslist.skillTitle}</p>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
