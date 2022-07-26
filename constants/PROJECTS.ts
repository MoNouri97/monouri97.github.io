import { ProjectData } from '../components/Projects/Project';

const PROJECTS: ProjectData[] = [
  {
    title: 'Pharmatek: pharmaceutical manager',
    description: `pharmaceutical Drug and medicine manager, using the MERN stack.
		The backend is a REST API using Node & ExpressJS and Secured with JWTs, Powered by MongoDB database and the mongoose ORM.
		The API consited of multiple endpoints to manipulate diverse objects (drugs, doctors, pharmacies, patients, ...).
		And last but not least the frontend was a dashboard coded in React`,
    tags: 'ReactJs;Nodejs;Express;MongoDB;Mongoose;JWT;Mocha & Chai;TDD;GitlabCI',
    links: [
      {
        path: 'https://gitlab.com/mohamed.nouri.1997/pharmatek/-/tree/develop',
        name: 'CODE',
      },
    ],
  },
  {
    title: 'Movie Explorer',
    description: `This project was developed during my second internship that was done remotely at an British startup, the goal was to use the features of the Nextjs framework to create a platform to be used to browse through the latest movies. To that end we harvested the power of the free and open TMDB (the movie database) API and created a system that can retrieve, filter save and recommend movies with the help of curated movie lists that were loaded from the Sanity headless CMS.
		During this project I was responsible for all the code as well as the testing, deployment and maintenance. the project was first deployed to vercel and later moved to netlify`,
    tags: 'ReactJs;Nodejs;Nextjs;TMDB;API;Typescript;Formik;SanityCMS;vercel;netlify;TDD;React-testing-library;Github actions CI/CD',
    links: [
      {
        path: 'https://github.com/MoNouri97/nextjs-movies',
        name: 'CODE',
      },
      {
        path: 'https://nextjs-movies-explorer.netlify.app',
        name: 'DEMO',
      },
    ],
  },
  {
    title: 'Jump & Shoot: 2D Platfromer Game',
    description: `I developed this game mainly for the purpose of getting to know the Godot game engine. Godot is a free & open source game engine and to finish this project I had to learn a lot of new concepts and GDScript the language used by Godot.`,
    tags: 'GameDev;Godot;GDScript',
    links: [
      {
        path: 'https://github.com/MoNouri97/JumtAndShoot',
        name: 'CODE',
      },
      {
        path: 'https://monouri.itch.io/jumpandshoot',
        name: 'DEMO',
      },
    ],
  },
  {
    title: 'ISSAT Times : Schedule App',
    description: `Students app for ISSATso university students to check their lectures and courses, coded using TS and ReactNative,
    due to missing API to interact with the time/schedule system the data is gathered using webscraping technique in the background when choosing your study group`,
    tags: 'ReactNative;React-query;Formik;Typescript;Google Maps',
    links: [
      {
        path: 'https://github.com/MoNouri97/IssatTimes',
        name: 'CODE',
      },
      {
        path: 'https://expo.io/@monouri/projects/IssatTimes',
        name: 'DEMO',
      },
    ],
  },
  {
    title: 'NotReddit: A reddit clone using GraphQL',
    description: `this project was split into two parts a backend using Node,Express and TypeORM And a frontend using NextJs and the Urql Client. the entire project was coded in typescript and was my intro to GraphQL , the end product was a solid foundation that could've been expanded into a fully functional socail media platform (but we have enough of those already)`,
    tags: 'GraphQL;NextJs;Typescript;Node;TypeORM;URQLClient;caching;Redis;docker;docker-compose',
    links: [
      {
        path: 'https://github.com/MoNouri97/node-graphQL-server',
        name: 'CODE Backend',
      },
      {
        path: 'https://github.com/MoNouri97/react-nextjs-graphQL',
        name: 'CODE Frontend',
      },
    ],
  },
  {
    title: 'Merchandising: App & Dashboard',
    description: `The app was coded in typescript using React Native and featured a lot of intersting components such as a map & a geolocation fencing system using Google Maps api, a dynamic form that can be used to generate reports which presented a lot of challenges and contained multiple types of inputs (text, numbers, images & files, toggles and check lists).`,
    tags: 'ReactNative;React-query;Formik;Typescript;Google Maps',
    links: [
      {
        path: 'https://github.com/MoNouri97/merch-team-app',
        name: 'CODE Mobile app',
      },
      {
        path: 'https://github.com/MoNouri97/merchandising-team-backend',
        name: 'CODE Backend',
      },
    ],
  },
];
export default PROJECTS;