<script>
  //src/components/socialmedialinks/Socialmedialinks.svelte
  export let socialmedialinksData = {};
  const {
    github,
    linkedin,
    gmail,
    gitlab,
    facebook,
    medium,
    stackoverflow,
    instagram,
    twitter
  } = socialmedialinksData;
</script>

<style>
  .social-media-div {
    font-size: 2em;
  }

  .icon-button {
    margin-bottom: 10px;
  }

  .icon-button i {
    color: white;
    border-radius: 2.6rem;
    cursor: pointer;
    display: inline-block;
    font-size: 1.3rem;
    height: 2.6rem;
    line-height: 2.6rem;
    margin: 0 5px;
    position: relative;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 2.6rem;
    margin-bottom: 10px;
    transition: 0.2s ease-in;
  }

  .facebook i {
    background-color: #3b5998;
  }

  .linkedin i {
    background-color: #0e76a8;
  }

  .github i {
    background-color: #333;
  }

  .gitlab i {
    background-color: #fca326;
  }

  .google i {
    background-color: #ea4335;
  }

  .twitter i {
    background-color: #1da1f2;
  }

  .medium i {
    background-color: #000;
  }

  .stack-overflow i {
    background-color: #f48024;
  }

  .instagram i {
    background-color: #c13584;
  }

  /* Hover Transition */
  .twitter i:hover,
  .google i:hover,
  .gitlab i:hover,
  .github i:hover,
  .linkedin i:hover,
  .facebook i:hover,
  .instagram i:hover,
  .stack-overflow i:hover,
  .medium i:hover {
    background-color: black;
  }

  /* Media Query */
  @media (max-width: 768px) {
    .social-media-div {
      text-align: center;
    }
  }
</style>

<section id="socialmedialinks">
  <div class="social-media-div">
    <a href={github} class="icon-button github" target="_blank">
      <i class="fab fa-github" />
    </a>
    <a href={linkedin} class="icon-button linkedin" target="_blank">
      <i class="fab fa-linkedin-in" />
    </a>
    <a href={`mailto:${gmail}`} class="icon-button google" target="_blank">
      <i class="fab fa-google" />
    </a>
    <a href={gitlab} class="icon-button gitlab" target="_blank">
      <i class="fab fa-gitlab" />
    </a>
    <a href={facebook} class="icon-button facebook" target="_blank">
      <i class="fab fa-facebook-f" />
    </a>
    <a href={medium} class="icon-button medium" target="_blank">
      <i class="fab fa-medium" />
    </a>
    <a href={stackoverflow} class="icon-button stack-overflow" target="_blank">
      <i class="fab fa-stack-overflow" />
    </a>
    <a href={instagram} class="icon-button instagram" target="_blank">
      <i class="fab fa-instagram" />
    </a>
    <a href={twitter} class="icon-button twitter" target="_blank">
      <i class="fab fa-twitter" />
    </a>
  </div>
</section>
