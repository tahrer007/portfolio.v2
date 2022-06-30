const projectsData = [
  {
    id: 0,
    title: "Spot-it",
    description:
      "This project is a system to help the citizens of Haifa city to track and update each other on the appearance of wild pigs in their city streets in the last 48 hours.",
    links: {
      code: "https://github.com/tahrer007/spot-it-web-client",
      website: "https://spot-it-web-2022.netlify.app/",
    },
    technologies: [1, 3, 5, 9, 10, 8],
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
    technologies: [1, 3, 5],
    screenshots: [
      "https://i.ibb.co/4dJ8PGd/start.png",
      "https://i.ibb.co/2Pncp88/levels.png",
      "https://i.ibb.co/yRTnWNy/last-Score.png",
      "https://i.ibb.co/h70TppQ/top-Scores.png",
      "https://i.ibb.co/zfGmdxz/ninja.png",
      "https://i.ibb.co/h70TppQ/top-Scores.png",
      "https://i.ibb.co/Mn590hj/avatar.png",
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
      "https://i.ibb.co/nBPhkvk/1.png",
      "https://i.ibb.co/kGdCJPD/2.png",
      "https://i.ibb.co/n3SXKkP/3.png",
      "https://i.ibb.co/Jv3X1mN/4.png",
    ],
  },
  {
    id: 3,
    title: "Dice Game",
    description:
      "This game is React app. two players play with a dice each player can roll the dice or change turns until reaching the target. This is my first react app.",
    links: {
      code: "https://github.com/tahrer007/dice-game-2021",
      website: "https://app.netlify.com/sites/tahrer-dice-game/overview",
    },
    technologies: [1, 3, 5],
    screenshots: [
      "https://i.ibb.co/HN5zBMc/2.png",
      "https://i.ibb.co/bWwSNrq/1.png",
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
    technologies: [0, 1],
    screenshots: [
      "https://i.ibb.co/TttkjJ6/1.png",
      "https://i.ibb.co/Rvn1RBs/2.png",
      "https://i.ibb.co/sWHL6FY/4.png",
      "https://i.ibb.co/6wM2Pgm/3.png",
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
