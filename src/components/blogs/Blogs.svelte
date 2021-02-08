<script>
  //src/components/blogs/Blogs.svelte
  export let darkmodeblog;
  export let blogsData = {};
  const { viewblogSection, title, subtitle, blogs } = blogsData;
  import Header from "../header/Header.svelte";
</script>

<style>
  .blogs-container {
    display: flex;
    width: 90%;
    padding: 20px 10px;
    margin: 0px auto;
    margin-top: 2rem;
  }

  .blogs-container > * {
    flex: 1;
  }

  /*Blog Cards Layout*/

  .blog-header-text {
    font-size: 56px;
    font-weight: 400;
  }

  .blog-subtitle {
    text-transform: uppercase;
  }

  .blog-main-div > * {
    flex: 1;
    margin-bottom: 30px;
  }

  .blog-main-div {
    display: flex;
  }

  .blog-text-div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 32px;
  }

  .blog-container {
    border-radius: 10px;
    color: #586069;
    background-color: #fff;
    box-shadow: 0 0 36px rgba(0, 0, 0, 0.1);
    /* padding: 2rem; */
    cursor: pointer;
    height: 200px;
  }

  .blog-title {
    color: #262626;
    font-size: 22px;
    line-height: 24px;
    font-weight: 700;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 14px;
    margin-top: 32px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .small {
    font-size: 17px;
    font-weight: 400;
    line-height: 1.5rem;
    color: #666666;
    padding: 0px 20px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    margin: 0px;
  }

  /* start blog dark mode */
  .blogdm-container {
    color: #fff;
    background-color: #171c28;
    box-shadow: 0 0 36px rgba(0, 0, 0, 0.1);
  }

  .blogdm-title {
    color: #fff;
  }

  .blogdm-card {
    box-shadow: 1px 0 20px #fff;
  }

  .smalldm {
    color: #fff;
  }
  /* end blog dark mode */

  .go-corner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 32px;
    height: 32px;
    overflow: hidden;
    top: 0;
    right: 0;
    background-color: #55198b;
    border-radius: 0 4px 0 32px;
  }

  .go-arrow {
    margin-top: -4px;
    margin-right: -4px;
    color: white;
    font-family: courier, sans;
  }

  .blog-card {
    display: block;
    position: relative;
    background-color: transparent;
    border-radius: 4px;
    text-decoration: none;
    z-index: 0;
    overflow: hidden;
    height: 100%;
  }

  .blog-card::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: #55198b;
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.4s ease-out;
  }

  .blog-card:hover::before {
    transform: scale(30);
  }

  .blog-card:hover > .small {
    transition: all 0.3s ease-out;
    color: rgba(255, 255, 255, 0.8);
  }

  .blog-card:hover > h3 {
    transition: all 0.3s ease-out;
    color: #ffffff;
  }

  /* Media Query */
  @media (max-width: 1380px) {
    .blog-header-text {
      font-size: 40px;
    }
  }
  @media (max-width: 768px) {
    .blog-header-text {
      font-size: 30px;
      text-align: center;
    }
    .blog-subtitle {
      font-size: 16px;
      line-height: normal;
      text-align: center;
    }
  }

  @media screen and (max-width: 480px) and (min-width: 300px) {
    .blog-text-div {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }

  @media screen and (max-width: 480px) and (min-width: 300px),
    (min-width: 925px) and (max-width: 1024px),
    (min-width: 1405px) and (max-width: 1550px) {
    .blog-card:hover::before {
      transform: scale(30);
    }
  }

  @media screen and (min-width: 481px) and (max-width: 675px),
    (min-width: 1025px) and (max-width: 1404px),
    (min-width: 1551px) {
    .blog-card:hover::before {
      transform: scale(40);
    }
    .blog-card::before {
      transition: transform 0.45s ease-out;
    }
  }

  @media screen and (min-width: 675px) and (max-width: 860px) {
    .blog-card:hover::before {
      transform: scale(50);
    }
    .blog-card::before {
      transition: transform 0.5s ease-out;
    }
  }

  @media screen and (min-width: 860px) and (max-width: 924px) {
    .blog-card:hover::before {
      transform: scale(60);
    }
    .blog-card::before {
      transition: transform 0.5s ease-out;
    }
  }

  @media screen and (max-width: 480px) and (min-width: 300px) {
    .blog-title {
      font-size: 18px;
    }
  }
</style>

<div id="blogs">
  <div class="blogs-container" id="blogs">
    <div class="main" id="blogs">
      <div class="blog-header">
        <h1 class="blog-header-text">{title}</h1>
        <p class="subTitle blog-subtitle">{subtitle}</p>
      </div>
      <div class="blog-main-div">
        <div class="blog-text-div">
          {#each blogs as list}
            <div data-aos="flip-left" data-aos-duration="1500">
              <div class="blog-container" class:blogdm-container={darkmodeblog}>
                <a
                  class="blog-card"
                  class:blogdm-card={darkmodeblog}
                  href={list.url}
                  title={list.title}>
                  <h3 class="blog-title" class:blogdm-title={darkmodeblog}>
                    {list.title}
                  </h3>
                  <p class="small" class:smalldm={darkmodeblog}>
                    {list.description}
                  </p>
                  <div class="go-corner">
                    <div class="go-arrow">→</div>
                  </div>
                </a>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
