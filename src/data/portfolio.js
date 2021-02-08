/* Change this file to get your personal Portfolio */

// Your Navbar Data
const Navbar = [
  { id: 1, url: "#skills", label: "Skills", visible: true }, // Set it to true to see the section
  { id: 2, url: "#experience", label: "Work Experiences", visible: true }, // Set it to true to see the section
  { id: 3, url: "#education", label: "Education", visible: true }, // Set it to true to see the section
  { id: 4, url: "#projects", label: "Projects", visible: true }, // Set it to true to see the section
  { id: 5, url: "#achievement", label: "Certifications", visible: true }, // Set it to true to see the section
  { id: 6, url: "#blogs", label: "Blog", visible: true }, // Set it to true to see the section
  { id: 7, url: "#contact", label: "Contact", visible: true }, // Set it to true to see the section
];

// Your Summary And Greeting Section
const Greeting = {
  username: "John",
  title: "Hi all, I'm John",
  subTitle: "A passionate Software Developer 🚀 building Web and Mobile applications with JS, Svelte, Node and some other cool libraries and frameworks.",
  resumeLink: "#",
  image: "./images/manOnTable.svg",
};

// Your Social Media Link
const SocialMediaLinks = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  gmail: "youremail@gmail.com",
  gitlab: "https://gitlab.com/",
  facebook: "https://www.facebook.com/",
  medium: "https://medium.com/",
  stackoverflow: "https://stackoverflow.com/",
  instagram: "https://www.instagram.com/",
  twitter: "https://twitter.com/",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section
const Skills = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    {
      skillTitle: "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    },
    {
      skillTitle: "⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
    },
    {
      skillTitle: "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    },
  ],
  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */
  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const StackProgress = {
  viewStackProgress: true, // Set it to true to see stacks/tech section
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};

// Your education background
const Education = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Harvard University",
      logo: "./images/harvardLogo.png",
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        {
          bulletsName: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          bulletsName: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        }
      ]
    },
    {
      schoolName: "Stanford University",
      logo: "./images/stanfordLogo.png",
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        {
          bulletsName: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          bulletsName: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        }
      ]
    }
  ]
};

//Projects Section
const projectsData = {
  viewprojectsSection: true, //Set it to true to show projects section
  apiURL: "https://api.github.com/users/saadpasta/repos" //Replace ".../saadpasta/repos" with your GitHub account
};

// Your top 3 work experiences
const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: "./images/facebookLogo.png",
      companybackgroungcolor: "#017bf3",
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        {
          bulletsName: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          bulletsName: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        }
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: "./images/quoraLogo.png",
      companybackgroungcolor: "#b81101",
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        {
          bulletsName: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          bulletsName: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        }
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: "./images/airbnbLogo.png",
      companybackgroungcolor: "#ff4f58",
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        {
          bulletsName: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          bulletsName: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        }
      ]
    },
  ]
};

// Your Achievement Section Include Your Certification Talks and More
const Achievements = {
  viewachievementSection: true, //Set it to true to show achievement section
  title: "Achievements And Certifications 🏆 ",
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achivementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: "./images/codeInLogo.webp",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: "./images/googleAssistantLogo.webp",
      footerLink: [
        { name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }
      ]
    },
    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: "./images/pwaLogo.webp",
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section
const Blogs = {
  viewblogSection: true, //Set it to true to show blog section
  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  blogs: [
    {
      url: "https://svelte.dev/blog/whats-new-in-svelte-january-2021",
      title: "What's new in Svelte: January 2021",
      description: "A Svelte-packed showcase to kick-off the new year!"
    },
    {
      url: "https://svelte.dev/blog/whats-new-in-svelte-december-2020",
      title: "What's new in Svelte: December 2020",
      description: "Better tooling, export maps and improvements to slots and context"
    }
  ]
};

// Talk Section
const Talks = {
  viewtalkSection: true, //Set it to true to show talk section
  title: "TALKS",
  subtitle: "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅",

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcasts Section
const Podcasts = {
  viewpodcastsSection: true, //Set it to true to show podcasts section
  title: "Podcast 🎙️",
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcasts: [
    {
      podcast_url: "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
    },
  ]
};

//Contact Section
const contactInfo = {
  title: "Contact Me ☎️",
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  phone_number: "+92-3243454077",
  email_address: "john.doe@gmail.com",
  image: "./images/email.svg",
};

//Twitter Section
const twitterDetails = {
  viewtwitterSection: true, //Set it to true to show twitter section
  userName: "Twitter" //Replace "twitter" with your twitter username without @
};

//Footer Section
const Footer = {
  firstname: "John", //Replace with your firstname
  name: "Doe", //Replace with your name
};

const Mock_Data = {
  // About_Data,
  Navbar,
  Greeting,
  SocialMediaLinks,
  Skills,
  StackProgress,
  Education,
  projectsData,
  workExperiences,
  Achievements,
  Blogs,
  Talks,
  Podcasts,
  contactInfo,
  twitterDetails,
  Footer
};
export default Mock_Data;
