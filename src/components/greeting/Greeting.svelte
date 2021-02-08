<script>
  //src/components/greeting/Greeting.svelte
  import Sociales from "../socialmedialinks/Socialmedialinks.svelte";
  import Datas from "../../data/portfolio";
  export const socialmedialinksData = {};
  export let greetingData = {};
  const { username, title, subTitle, resumeLink, image } = greetingData;
</script>

<style>
  .greet-main {
    width: 90%;
    padding: 20px 10px;
    margin: 0px auto;
    margin-top: 2rem;
  }

  .greeting-main {
    display: flex;
  }

  .greeting-main > * {
    flex: 1;
    margin-bottom: 30px;
  }

  .button-greeting-div {
    display: flex;
    margin-top: 20px;
  }

  .greeting-text {
    font-size: 70px;
    line-height: 1.1;
  }

  .greeting-text-p {
    font-size: 26px;
    line-height: 32px;
    white-space: normal;
  }

  .greeting-image-div > img {
    max-width: 100%;
    height: auto;
  }

  .wave-emoji {
    animation-duration: 1.8s;
    animation-iteration-count: infinite;
    animation-name: wave;
    display: inline-block;
    transform-origin: 70% 70%;
  }

  .main-button {
    font-family: "Montserrat";
    background-color: #55198b;
    border: solid 1px #55198b;
    color: white;
    font-weight: 700;
    width: max-content;
    padding: 13px 22px;
    margin-right: 50px;
    text-transform: uppercase;
    border-radius: 6px;
    text-align: center;
    text-decoration: none;
    display: block;
    margin-top: 20px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease-in-out 0s;
  }
  .main-button:hover {
    background-color: #ffffff;
    color: #55198b;
    transition: all 0.3s ease 0s;
    transform: translateY(-3px);
  }

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(-10deg);
    }
    20% {
      transform: rotate(12deg);
    }
    30% {
      transform: rotate(-10deg);
    }
    40% {
      transform: rotate(9deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  /* Media Query */
  @media (max-width: 1380px) {
    .greeting-text {
      font-size: 50px;
    }

    .greeting-text-p {
      font-size: 20px;
    }
  }

  @media (max-width: 768px) {
    .button-greeting-div {
      justify-content: space-around;
    }

    .greeting-text {
      font-size: 30px;
      text-align: center;
    }

    .greeting-text-p {
      font-size: 16px;
      line-height: normal;
      text-align: center;
    }

    .greeting-main {
      display: block;
    }

    .main-button {
      font-size: 15px;
      padding: 12px 18px;
      margin-right: 0px;
    }
  }

  @media (max-width: 320px) {
    .main-button {
      font-size: 12px;
    }
  }
</style>

<div class="greet-main" id="greeting">
  <div data-aos="fade-up">
    <div class="greeting-main">
      <div class="greeting-text-div">
        <h1 class="greeting-text">
          {title}
          <span class="wave-emoji">👋</span>
        </h1>
        <p class="greeting-text-p subTitle">{subTitle}</p>
        <Sociales socialmedialinksData={Datas.SocialMediaLinks} />
        <div class="button-greeting-div">
          <button class="main-button" href="#contact">Contact me</button>
          <button class="main-button" href={resumeLink} target="_blank">
            See my resume
          </button>
        </div>
      </div>
      <div class="greeting-image-div">
        <img alt="John sitting on table" src={image} />
      </div>
    </div>
  </div>
</div>
