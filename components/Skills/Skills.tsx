import React from 'react';
import skills from '../../constants/skills';
import SkillElement from './SkillElement';

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="flex-center flex min-h-[100vh] w-full bg-slate-300 dark:bg-darker"
    >
      <div className="flex w-full max-w-7xl flex-wrap justify-evenly sm:py-10 sm:px-20">
        <ul className="w-full  px-4 sm:w-1/2">
          {skills.map(skill => (
            <SkillElement key={skill.title} {...skill} />
          ))}
        </ul>
        <article className="w-full flex-1 px-4 text-gray-500 sm:min-w-[40%]">
          <em>“React”</em> is what I am most familiar with due to having used it
          extensively but I've realized multiple projects using various web
          technologies like the <em>MEAN</em>,<em> MERN</em> & <em>JAM </em>
          stacks.
          <br />
          <br />I worked with different APIs (<em>Rest and GraphQL</em>) while
          constantly learning the best practices and the newest, most productive
          technologies and workflows, I am also a huge <em>Typescript </em>
          enthusiast.
          <br />
          <br />I always strive to build fast, secure and robust apps by
          following <em>Clean Code</em> principles and implementing
          <em> CI/CD pipelines.</em>
          <br />
          <br />
          Web is not my only interest however , I also developed mobile apps
          using <em>React-Native</em> as well as some
          <em> GameDev</em> using Unity3D and the Godot Engine.
        </article>
      </div>
    </section>
  );
};
export default Skills;
