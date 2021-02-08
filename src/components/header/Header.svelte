<script>
  //src/components/header/Header.svelte
  export let navbarData = [];
  let navbarDataVisible = navbarData.filter(section => section.visible);
  export let headerdm = false;
</script>

<style>
  /* header */

  .header {
    max-width: 100%;
    padding: 15px 20px;
    margin: 0px auto;
  }

  .header ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
  }

  .grey-color {
    color: #868e96;
  }

  .header li a {
    display: block;
    padding: 20px;
    color: #000;
    text-decoration: none;
  }

  .header .menu-btn:hover,
  .header li a:hover {
    background-color: #f4f4f4;
  }

  .header .logo {
    display: block;
    flex: none;
    float: left;
    font-size: 1.5em;
    text-decoration: none;
    margin-top: 10px;
    line-height: normal;
  }
  .header .logo-name {
    font-family: "Agustina Regular";
    font-weight: 700;
    font-variant-ligatures: no-common-ligatures;
    -webkit-font-variant-ligatures: no-common-ligatures;
    padding: 0 10px;
  }

  /* start header dark mode */

  .grey-colordm {
    color: #fff;
  }

  .headerdm li a {
    color: #fff;
  }

  .headerdm .menu-btn:hover,
  .headerdm li a:hover {
    background-color: #55198b;
  }

  .headerdm .logo-name {
    color: #fff;
  }
  /* end header dark mode */

  /* menu */

  .header .menu {
    clear: both;
    max-height: 0;
    transition: max-height 0.2s ease-out;
  }

  /* menu icon */

  .header .menu-icon {
    cursor: pointer;
    padding: 28px 20px;
    float: right;
    position: relative;
    user-select: none;
  }

  .header .menu-icon .navicon {
    background: #333;
    display: block;
    height: 2px;
    position: relative;
    transition: background 0.2s ease-out;
    width: 18px;
  }

  .header .menu-icon .navicon:before,
  .header .menu-icon .navicon:after {
    background: #333;
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }

  /* start header dark mode */
  .header .menu-icondm .navicondm {
    background: #fff;
  }

  .header .menu-icondm .navicondm:before,
  .header .menu-icondm .navicondm:after {
    background: #fff;
  }
  /* end header dark mode */

  .header .menu-icon .navicon:before {
    top: 5px;
  }

  .header .menu-icon .navicon:after {
    top: -5px;
  }

  /* TOOGLE BUTTON */

  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  /* TOOGLE BUTTON */

  /* menu btn */

  .header .menu-btn {
    display: none;
  }

  .header .menu-btn:checked ~ .menu {
    max-height: 486px;
  }

  .header .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .header .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }

  .header .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }

  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }

  label {
    cursor: default;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 55px;
    height: 26px;
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider,
  .slider:before {
    position: absolute;
    left: 0;
    bottom: 0;
    transition: 0.4s;
  }

  .slider {
    cursor: pointer;
    top: 0;
    right: 0;
    background-color: #ccc;
  }

  /* 48em = 768px */

  @media (min-width: 48em) {
    .header li {
      float: left;
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .header .menu {
      max-height: none;
    }
    .header .menu-icon {
      display: none;
    }
  }
  @media (max-width: 960px) and (min-width: 768px) {
    .header {
      font-size: 12px;
    }
  }
</style>

<header class="header" class:headerdm id="header">
  <a href="/" class="logo">
    <span class="grey-color" class:grey-colordm={headerdm}>&lt;</span>
    <span class="logo-name">John Doe</span>
    <span class="grey-color" class:grey-colordm={headerdm}>/&gt;</span>
  </a>
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" class:menu-icondm={headerdm} for="menu-btn">
    <span class="navicon" class:navicondm={headerdm} />
  </label>
    <ul class="menu">
      <!-- https://svelte.dev/tutorial/animate -->
      {#each navbarDataVisible as list}
        <li>
          <a href={list.url}>{list.label}</a>
        </li>
      {/each}
      <li>
        <a>
          <label class="switch">
            <input type="checkbox" bind:checked={headerdm} />
            <span class="slider round" />
          </label>
        </a>
      </li>
    </ul>
</header>
