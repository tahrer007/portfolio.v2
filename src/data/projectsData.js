const projectsData = [
  {
    id: 0,
    title: "Spot-it",
    description:
      "This project is a system to help the citizens of Haifa city to track and update each other on the appearance of wild pigs in their city streets in the last 48 hours.",
    links: {
      code: "https://github.com/tahrer007/spot-it-web",
      website: "https://spot-it-2022.herokuapp.com/",
    },
    technologies: [1, 3, 5,9, 10,8],
    screenshots: [
      "https://i.ibb.co/4fq5FvS/spot-it-1.png",
      "https://i.ibb.co/QpjYGBz/spot-it-2.png",
      "https://i.ibb.co/Jk9CX0q/spot-it-3.png",
      "https://i.ibb.co/xhPRczN/spot-it-4.png",
      "https://i.ibb.co/dJq8dF9/spot-it-5.png",
    ],
  },
  {
    id: 1,
    title: "AVENGERS MATCH",
    description:
      "Front-end Project. AVENGERS MATCH is a flashcard memory game.it has four levels, easy, intermediate, hard, and Ninja. each player can create his own avatar and break his highest score.",
    links: {
      code: "https://github.com/tahrer007/mid-project",
      website: "https://tahrer-mid-project.netlify.app/",
    },
    technologies: [1,3,5],
    screenshots: [
      "https://raw.githubusercontent.com/tahrer007/mid-project/main/src/assets/images/readme/start.png",
      "https://raw.githubusercontent.com/tahrer007/mid-project/main/src/assets/images/readme/levels.png",
      "https://raw.githubusercontent.com/tahrer007/mid-project/main/src/assets/images/readme/ninja.png",
      "https://raw.githubusercontent.com/tahrer007/mid-project/main/src/assets/images/readme/lastScore.png",
      "https://raw.githubusercontent.com/tahrer007/mid-project/main/src/assets/images/readme/avatar.png",
      "https://raw.githubusercontent.com/tahrer007/mid-project/main/src/assets/images/readme/topScores.png",
    ],
  },
  {
    id: 2,
    title: "Minecraft-2d",
    description:
    "In this game, you can choose the appropriate tool such as a shovel for the ground, a pickaxe for rocks, and an ax for the trees. You can also put the last item you removed in any empty place.also, I used sound effects for each tool, building and using wrong tool.",
        links: {
      code: "https://github.com/tahrer007/spot-it-web",
      website: "https://github.com/tahrer007/apple",
    },
    technologies: [0, 1, 3],
    screenshots: [
      "https://raw.githubusercontent.com/tahrer007/minecraft-2d/main/assets/images/screnshots/1.png",
      "https://raw.githubusercontent.com/tahrer007/minecraft-2d/main/assets/images/screnshots/2.png",
      "https://raw.githubusercontent.com/tahrer007/minecraft-2d/main/assets/images/screnshots/3.png",
      "https://raw.githubusercontent.com/tahrer007/minecraft-2d/main/assets/images/screnshots/4.png",
    ],
  },
  {
    id: 4,
    title: "Apple Clone",
    description:
    "In This project, I cloned the apple website. Apple clone is one of my first projects. I used my basic skills in CSS and HTML to clone the pages and animations.",
        links: {
      code: "https://github.com/tahrer007/apple",
      website: "https://apple-clone-2021.netlify.app/",
    },
    technologies: [0, 1, 3],
    screenshots: [
      "https://raw.githubusercontent.com/tahrer007/apple/main/image/screenshots/5.png",
      "https://raw.githubusercontent.com/tahrer007/apple/main/image/screenshots/2.png",
      "https://raw.githubusercontent.com/tahrer007/apple/main/image/screenshots/3.png",
      "https://raw.githubusercontent.com/tahrer007/apple/main/image/screenshots/4.png",
    
    ],
  },
];

const technologiesIcons = [
  {
    id: 0,
    alt: "html5",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
  },

  {
    id: 1,
    alt: "css3",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
  },

  {
    id: 2,
    alt: "sass",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
  },
  {
    id: 3,
    alt: "javascript",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },

  {
    id: 4,
    alt: "chartjs",
    src: "https://www.chartjs.org/media/logo-title.svg",
  },
  {
    id: 5,
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    alt: "react",
  },
  {
    id: 6,
    src: "https://reactnative.dev/img/header_logo.svg",
    alt: "reactnative",
  },

  {
    id: 7,
    alt: "express",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
  },

  {
    id: 8,
    alt: "heroku",
    src: "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg",
  },
  {
    id: 9,
    alt: "nodejs",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  },

  {
    id: 10,
    alt: "mongodb",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
  },
];

const resumeLink =
  "https://drive.google.com/file/d/1vx50mpesNH79lXnLoKQRtM_ZN8C7GChv/view";

export { technologiesIcons, projectsData };
