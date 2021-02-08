<script>
  //src/components/projects/Projects.svelte
  import { onMount } from "svelte";
  export let projectData = {};
  export let darkmodeprojects;
  const { viewprojectsSection, apiURL } = projectData;
  let data = [];
  let datastatus = true;
  let errorstatus = "";

  onMount(async function() {
    const response = await fetch(apiURL);
    errorstatus = response.status;
    if (response.status === 200) {
      data = await response.json();
    } else {
      datastatus = !datastatus;
    }

    var byStargazers_count = data.slice(0);
    byStargazers_count.sort(function(a, b) {
      return b.stargazers_count - a.stargazers_count;
    });

    data = byStargazers_count.slice(0, 6);
  });
</script>

<style>
  .project-container {
    display: grid;
    width: 90%;
    padding: 20px 10px;
    margin: 0px auto;
    margin-top: 2rem;
  }

  .project-title {
    font-size: 52px;
    font-weight: 400;
    line-height: normal;
  }

  .repo-cards-div-main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 1rem 1rem;
  }

  a:link {
    text-decoration: none;
  }

  .repo-card-div {
    color: rgb(88, 96, 105);
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px -15px;
    padding: 2rem;
    cursor: pointer;
  }

  .repo-card-div:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px -10px;
  }

  .repo-stats {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    font-size: 13px;
    color: rgb(106, 115, 125);
  }

  .repo-left-stat {
    -webkit-box-flex: 1;
    flex-grow: 1;
    display: flex;
  }

  .language-color {
    width: 10px;
    height: 10px;
    background-color: #f1e05a;
    margin-right: 0.25rem;
    border-radius: 100%;
  }

  .repo-left-stat span {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-right: 0.75rem;
  }

  .repo-name-div {
    display: flex;
    align-items: center;
  }

  .repo-name {
    white-space: nowrap;
    text-overflow: ellipsis;
    color: rgb(36, 41, 46);
    margin-bottom: 0.75rem;
    font-size: 25px;
    font-weight: 700;
    letter-spacing: -0.5px;
    overflow: hidden;
    margin: 0px;
  }

  .repo-description {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .octicon {
    vertical-align: text-bottom !important;
    margin-right: 8px !important;
  }

  /* start blog dark mode */
  .repodm-card-div {
    color: #fff;
    background-color: #171c28;
    box-shadow: #fff 0px 10px 30px -15px;
  }

  .repodm-card-div:hover {
    box-shadow: #fff 0px 20px 30px -10px;
  }

  .repodm-stats {
    color: #fff;
  }

  .repodm-name {
    color: #fff;
  }
  /* end blog dark mode */

  /* Media Query */
  @media (max-width: 1380px) {
    .project-title {
      font-size: 40px;
    }
  }
  @media (max-width: 768px) {
    .project-title {
      font-size: 30px;
      text-align: center;
    }
    .repo-cards-div-main {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
</style>

<div class="project-container" id="projects">
  <div class="main" id="opensource">
    <h1 class="project-title">Open Source Projects</h1>
    <div data-aos="zoom-in">
      <div class="repo-cards-div-main">
        {#if datastatus}
          {#each data as list}
            <a href={list.html_url}>
              <div
                class="repo-card-div"
                class:repodm-card-div={darkmodeprojects}>
                <div
                  class="repo-name-div"
                  class:repodm-name-div={darkmodeprojects}>
                  <svg
                    aria-hidden="true"
                    class="octicon"
                    height="20"
                    role="img"
                    viewBox="0 0 12 16"
                    width="14">
                    {#if darkmodeprojects}
                      <path
                        fill-rule="evenodd"
                        d="M4
                        9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0
                        .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55
                        0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1
                        10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                        fill="#fff" />
                    {:else}
                      <path
                        fill-rule="evenodd"
                        d="M4
                        9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0
                        .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55
                        0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1
                        10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z" />
                    {/if}
                  </svg>
                  <p class="repo-name" class:repodm-name={darkmodeprojects}>
                    {list.name}
                  </p>
                </div>
                <p class="repo-description">{list.description}</p>
                <div class="repo-stats" class:repodm-stats={darkmodeprojects}>
                  <div class="repo-left-stat">
                    <span>
                      <div class="language-color" />
                      <p>{list.language}</p>
                    </span>
                    <span>
                      <svg
                        aria-hidden="true"
                        class="octicon"
                        height="20"
                        role="img"
                        viewBox="0 0 10 16"
                        width="12"
                        fill="rgb(106, 115, 125)">
                        <path
                          fill-rule="evenodd"
                          d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993
                          1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3
                          3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0
                          1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34
                          4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2
                          1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2
                          0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55
                          1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2
                          1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z" />
                      </svg>
                      <p>{list.forks_count}</p>
                    </span>
                    <span>
                      <svg
                        aria-hidden="true"
                        class="octicon"
                        height="20"
                        role="img"
                        viewBox="0 0 14 16"
                        width="14"
                        fill="rgb(106, 115, 125)">
                        <path
                          fill-rule="evenodd"
                          d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7
                          11.67 11.33 14l-.93-4.74L14 6z" />
                      </svg>
                      <p>{list.stargazers_count}</p>
                    </span>
                  </div>
                  <div class="repo-right-stat">
                    <p>{list.size} KB</p>
                  </div>
                </div>
              </div>
            </a>
          {/each}
        {:else}
          <p>
            😱 Sorry we have an error {errorstatus}, we can't display the data.
          </p>
        {/if}
      </div>
    </div>
  </div>
</div>
