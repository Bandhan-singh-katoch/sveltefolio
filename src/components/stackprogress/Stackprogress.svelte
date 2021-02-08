<script>
  //src/components/stackprogress/Stackprogress.svelte
  export let stackprogressData = {};
  const { viewStackProgress, viewSkillBars, experience } = stackprogressData;
</script>

<style>
  .meter {
    height: 20px;
    position: relative;
    background: rgb(243, 239, 239);
    -moz-border-radius: 25px;
    -webkit-border-radius: 25px;
    border-radius: 25px;
  }

  .meter > span {
    display: block;
    height: 100%;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: #aaa5ff;
    position: relative;
    overflow: hidden;
  }

  .skill {
    line-height: 3.5vw;
  }

  .skills-container {
    display: flex;
    width: 90%;
    padding: 20px 10px;
    margin: 0px auto;
    margin-top: 2rem;
  }

  .skills-container > * {
    flex: 1;
    margin-bottom: 30px;
  }

  .skills-image > img {
    margin-left: 80px;
    max-width: 90%;
    height: auto;
  }

  .skills-heading {
    font-size: 56px;
    font-weight: 400;
  }

  /* Media Query */

  @media (max-width: 1456px) {
    .skills-bar {
      line-height: 4rem;
    }
    .skills-image {
      display: none;
      order: 2;
    }
    .skills-heading {
      font-size: 40px;
    }
  }

  @media (max-width: 768px) {
    .skills-heading {
      font-size: 30px;
      text-align: center;
    }
    .skills-container {
      flex-direction: column;
    }
    .skills-bar {
      line-height: 3rem;
      margin: 20px;
    }
    .skills-image {
      display: none;
      order: 2;
    }
  }
</style>

<div class="skills-container">
  <div class="skills-bar">
    <h1 class="skills-heading">Proficiency</h1>
    <div data-aos="zoom-in">
      <div class="skill">
        {#each experience as list}
          <p>{list.Stack}</p>
          <div class="meter">
            <span style="width: {list.progressPercentage};" />
          </div>
        {/each}
      </div>
    </div>
  </div>
  <div class="skills-image">
    <img alt="Skills" src="images/skill.svg" />
  </div>
</div>
