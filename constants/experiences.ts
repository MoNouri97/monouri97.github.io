import { TimelineEntryProps } from '../components/Experience/TimelineEntry';

export default [
  {
    title: 'Joined Dejamobile',
    desc: `
    Dejamobile is a fintech and software publisher specializing in mobile payment services. 
    As a member of the backend team I helped in developing and managing SoftPOS tap to pay solution.
    Performed code reviews  code quality control to ensure optimal production results and built a distributed event streaming system using Kafka.
    - Development of the web portal used by merchants & admins using Reactjs and was responsible for introducing TS support to the codebase .
    - applied the micro-services architecture and used docker, Kubernetes and GitlabCI to build and deliver features.
    - monitoring & tracing APIs using Jaeger .
    - ensured optimal code quality using unit tests, SonarQube and code reviews.
    `,
    details: `Reactjs;Mui;TS; Golang; Gin; Gorm;TDD; MySQL; Kafka; Kubernetes; Helm`,
    date: 'Nov 2021',
  },
  {
    title: 'Joined EvoLux',
    desc: `EVOLUX - US is an aviation technology company with a portfolio of digital technology solutions that modernizes distribution of, and access to, aircraft availability for a variety of on-demand, private aviation end-users.
    Managing and maintaining a large Reactjs code base.
    EvoLux Web App: Private Aviation Marketplace/Booking System`,
    details: `Reactjs;Google Address API; Google Maps API;Typescript;React-query`,
    date: 'Jul 2021',
  },
  {
    title: 'Graduation',
    desc: `Got my Software Engineering degree after 5 years of university`,
    details: `Stress;Coffee;🎓`,
    date: 'Jul 2021',
  },
  {
    title: 'Graduation Project',
    desc: ` 
    A 5 months internship at TeamDev - Sousse.
    "Merchandising Team App": Admin Dashboard, Mobile app`,
    details: `Typescript ;Java;Spring Boot;Spring Security and Spring Data ;React Native;PostgreSQL;Reactjs;React-query`,
    date: 'Feb 2021',
  },
  {
    title: 'Charity Shop Exchange - internship',
    desc: `Full-Stack Developer intern at Charity Shop Exchange - London UK.
    worked on Movie Explorer a project to Browse , filter and search for movies`,
    details:
      'Typescript ;Sanity CMS; tmdb API;Next.js; ReactJs ;Node ; Express;TDD; Jest; React Testing Library;React-query',
    date: 'Jul 2020',
  },
  {
    title: 'Aurax : JS Developer - internship',
    desc: `First professional experience as an intern at a startup, learned a lot of things including TDD, setting up CI/CD pipelines
    and a lot more`,
    details:
      'Javascript;Nodejs;MongoDB;Express;ReactJs;Mongoose;mocha & chai; JWT;GitlabCI',
    date: 'Jul 2019',
  },
] as TimelineEntryProps[];
