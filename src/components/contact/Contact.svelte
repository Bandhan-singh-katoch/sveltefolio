<script>
  //src/components/contact/Contact.svelte
  import Sociales from "../socialmedialinks/Socialmedialinks.svelte";
  import Datas from "../../data/portfolio";
  export let darkmodecontact;
  export const socialmedialinksData = {};
  export let contactData = {};
  const { title, subtitle, phone_number, email_address, image } = contactData;
</script>

<style>
  .contact-container {
    display: flex;
    width: 90%;
    padding: 20px 10px;
    margin: 0px auto;
    margin-top: 2rem;
  }

  .contact-container > * {
    flex: 1;
  }

  .contact-div-main {
    display: flex;
  }

  .contact-div-main > * {
    flex: 1;
  }

  .contact-title {
    font-size: 56px;
    font-weight: 400;
  }

  .contact-detail,
  .contact-detail-email {
    margin-top: 20px;
    font-size: 28px;
    font-weight: 400;
    color: #868e96;
    text-decoration: none;
  }

  .contact-detail:hover,
  .contact-detail-email:hover {
    color: black;
    text-shadow: 2px 1px 2px #b5b5b5;
    transition: all 0.3s;
  }

  /* start blog dark mode */
  .contactdm-detail,
  .contactdm-detail-email {
    color: #fff;
  }

  .contactdm-detail:hover,
  .contactdm-detail-email:hover {
    color: #fdfefe;
    text-shadow: 2px 1px 2px #b5b5b5;
  }
  /* end blog dark mode */

  .contact-subtitle {
    text-transform: uppercase;
  }

  .contact-text-div {
    margin-top: 1.5rem;
  }

  .contact-margin-top {
    margin-top: 4rem;
  }

  .contact-image-div > img {
    max-width: 100%;
    height: auto;
    margin-left: 1.5rem;
    margin-top: -4rem;
  }

  /* Media Query */
  @media (max-width: 1380px), (max-width: 768px) {
    .contact-title {
      font-size: 56px;
      font-weight: 400;
      text-align: center;
    }

    .contact-title {
      font-size: 40px;
      text-align: center;
    }

    .contact-subtitle {
      font-size: 16px;
      line-height: normal;
      text-align: center;
    }

    .contact-text-div {
      text-align: center;
      margin-top: 1.5rem;
    }

    .contact-detail,
    .contact-detail-email {
      font-size: 20px;
    }

    .contact-image-div {
      display: none;
    }
  }
</style>

<div id="contact">
  <div class="contact-container">
    <div class="main contact-margin-top">
      <div class="contact-div-main">
        <div class="contact-header">
          <h1 class="heading contact-title">{title}</h1>
          <p class="subTitle contact-subtitle">{subtitle}</p>
          <div class="contact-text-div">
            <a
              class="contact-detail"
              class:contactdm-detail={darkmodecontact}
              href={'tel:' + phone_number}>
              {phone_number}
            </a>
            <br />
            <br />
            <a
              class="contact-detail-email"
              class:contactdm-detail-email={darkmodecontact}
              href={'mailto:' + email_address}>
              {email_address}
            </a>
            <br />
            <br />
            <Sociales socialmedialinksData={Datas.SocialMediaLinks} />
          </div>
        </div>
        <div class="contact-image-div">
          <img alt="John Doe Working" src={image} />
        </div>
      </div>
    </div>
  </div>
</div>
