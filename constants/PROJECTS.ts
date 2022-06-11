export default [
  {
    title: 'Pharmatek: pharmaceutical Drug and medicine manager',
    description: `pharmaceutical Drug and medicine manager, using the MERN stack.
		The backend is a REST API using Node & ExpressJS and Secured with JWTs, Powered by MongoDB database and the mongoose ORM.
		The API consited of multiple endpoints to manipulate diverse objects (drugs, doctors, pharmacies, patients, ...).
		While the frontend was a dashboard coded in React`,
    tags: 'ReactJs;Nodejs;Express;MongoDB;Mongoose;JWT;Mocha & Chai;TDD;GitlabCI',
  },
  {
    title: 'Movie Explorer',
    description: `This project was developed during my second internship that was done remotely at an British startup, the goal was to use the features of the Nextjs framework to create a platform to be used to browse through the latest movies. To that end we harvested the power of the free and open TMDB (the movie database) API and created a system that can retrieve, filter save and recommend movies with the help of curated movie lists that were loaded from the Sanity headless CMS.
		During this project I was responsible for all the code as well as the testing, deployment and maintenance. the project was first deployed to vercel and later moved to netlify`,
    tags: 'ReactJs;Nodejs;Nextjs;TMDB;API;typescript;Formik;SanityCMS;vercel;netlify;TDD;React-testing-library;Github actions CI/CD',
  },
  {
    title: 'Jump & Shoot: 2D Platfromer Game',
    description: `I developed this game mainly for the purpose of getting to know the Godot game engine. Godot is a free & open source game engine and to finish this project I had to learn a lot of new concepts and GDScript the language used by Godot.`,
    tags: 'GameDev;Godot;GDScript;',
  },
  {
    title: 'NotReddit: A reddit clone using GraphQL',
    description: `this project was split into two parts a backend using Node,Express and TypeORM And a frontend using NextJs and the Urql Client. the entire project was coded in typescript and was my intro to GraphQL , the end product was a solid foundation that could've been expanded into a fully functional socail media platform (but we have enough of those already)`,
    tags: 'GraphQL;NextJs;Typescript;Node;TypeORM;URQLClient;caching;Redis;docker;docker-compose',
  },
  {
    title: 'Merchandising: App & Dashboard',
    description: `The app was coded in typescript using React Native and featured a lot of intersting components such as a map & geolocation fencing system using Google Maps api and dynamic form that can be used to generate a report which presented a lot of challenges and contained multiple types of inputs (text, numbers, images & files, toggles and check lists).`,
    tags: 'ReactNative;React-query;Formik;typescript;Google Maps;',
  },
] as {
  title: string;
  description: string;
  tags: string;
}[];
