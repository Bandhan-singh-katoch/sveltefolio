<script>
  import Header from "./components/header/Header.svelte";
  import About from "./components/greeting/Greeting.svelte";
  import Social from "./components/socialmedialinks/Socialmedialinks.svelte";
  import Skills from "./components/skills/Skills.svelte";
  import StackProgress from "./components/stackprogress/Stackprogress.svelte";
  import Education from "./components/education/Education.svelte";
  import WorkExperiences from "./components/workexperiences/Workexperiences.svelte";
  import Projects from "./components/projects/Projects.svelte";
  import Achievement from "./components/achievement/Achievement.svelte";
  import Blogs from "./components/blogs/Blogs.svelte";
  import Talks from "./components/talks/Talks.svelte";
  import Podcasts from "./components/podcasts/Podcasts.svelte";
  import Contact from "./components/contact/Contact.svelte";
  import Twitter from "./components/twitter/Twitter.svelte";
  import Footer from "./components/footer/Footer.svelte";
  import Top from "./components/top/Top.svelte";
  import Data from "./data/portfolio";
  let darkmode;
  let y;
  AOS.init();
</script>

<style>

</style>

<svelte:window bind:scrollY={y} />

<svelte:head>
  {#if darkmode}
    <link rel="stylesheet" href="/globaldarkmode.css" />
  {/if}
</svelte:head>

  <!-- Header -->
  <Header navbarData={Data.Navbar} bind:headerdm={darkmode} />

<main>

  <!-- About -->
  <About greetingData={Data.Greeting} />

  <!-- Skills -->
  <Skills skillsData={Data.Skills} />

  <!-- StackProgress -->
  {#if Data.StackProgress.viewStackProgress}
    <StackProgress stackprogressData={Data.StackProgress} />
  {/if}

  <!-- Education -->
  {#if Data.Education.viewEducation}
    <Education educationData={Data.Education} />
  {/if}

  <!-- WorkExperiences -->
  {#if Data.workExperiences.viewExperiences}
    <WorkExperiences workexperiencesData={Data.workExperiences} />
  {/if}

  <!-- Projects -->
  {#if Data.projectsData.viewprojectsSection}
    <Projects projectData={Data.projectsData} darkmodeprojects={darkmode} />
  {/if}

  <!-- Achievement -->
  {#if Data.Achievements.viewachievementSection}
    <Achievement
      achievementsData={Data.Achievements}
      darkmodeachievement={darkmode} />
  {/if}

  <!-- Blogs -->
  {#if Data.Blogs.viewblogSection}
    <Blogs blogsData={Data.Blogs} darkmodeblog={darkmode} />
  {/if}

  <!-- Talks -->
  {#if Data.Talks.viewtalkSection}
    <Talks talksData={Data.Talks} />
  {/if}

  <!-- Podcasts -->
  {#if Data.Podcasts.viewpodcastsSection}
    <Podcasts podcastsData={Data.Podcasts} />
  {/if}

  <!-- Contact -->
  <Contact contactData={Data.contactInfo} darkmodecontact={darkmode} />

  <!-- Twitter -->
  {#if Data.twitterDetails.viewtwitterSection}
    <Twitter twitterData={Data.twitterDetails} darkmodetwitter={darkmode} />
  {/if}

</main>

  <!-- Footer -->
  <Footer footerData={Data.Footer} darkmodefooter={darkmode} />

  {#if y > 20}
    <Top />
  {/if}
