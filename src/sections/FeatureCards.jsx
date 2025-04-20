import React from 'react';
import { abilities } from '../constants/index';
import TitleHeader from '../components/TitleHeader';

const FeatureCards = () => (
  <section className="w-full padding-x-lg">
    <div className="mb-10"/>
    {/* About Me Section */}
    <div className="mb-12 grid md:grid-cols-2 gap-8 items-center">
      {/* Text Section */}
      <div>
        <TitleHeader title="About Me" />
        <p className="text-white-50 text-lg mt-4">
          Hi! I’m a Fullstack Developer with a background in Systems Engineering. I specialize in building dynamic and functional websites, handling both frontend and backend development.
        </p>
        <p className="text-white-50 text-lg mt-4">
          I work with technologies like JavaScript, React, PHP, Laravel, Node.js, SQL, HTML, CSS, and frameworks like Bootstrap and Tailwind. I’m passionate about writing clean code, exploring new tools, and solving technical challenges.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src="./images/profile.jpeg"
          alt="Santiago - Fullstack Developer"
          className="rounded-full shadow-lg w-40 h-40 md:w-60 md:h-60 object-cover"
        />
      </div>
    </div>

    {/* Feature Cards Section */}
    <div className="mx-auto grid-3-cols">
      {abilities.map(({ imgPath, title, desc }) => (
        <div key={title} className="card-border rounded-xl p-8 flex flex-col gap-4">
          <div className="size-14 flex items-center justify-center rounded-full">
            <img src={imgPath} alt={title} />
          </div>
          <h3 className="text-white text-2xl font-semibold mt-2">
            {title}
          </h3>
          <p className="text-white-50 text-lg">
            {desc}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default FeatureCards;