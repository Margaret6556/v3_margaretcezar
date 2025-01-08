import React from "react";

import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="d-flex">
        <h1>Hi, I'm Margaret Cezar</h1>
        <p>
          Welcome to my portfolio! I am a passionate developer currently gaining
          expertise in
          <span className="success">
            {" "}
            web development, data science, and machine learning.
          </span>
          I thrive on solving problems and building innovative digital
          solutions. With a strong foundation in
          <span className="success"> front-end and back-end development,</span>I
          specialize in creating user-friendly, clean, and efficient interfaces
          using technologies like HTML, CSS, JavaScript, React, and the latest
          frameworks. As a tech startup founder, I've led cross-functional teams
          to transform ideas into
          <span className="highlight">
            {" "}
            cutting-edge pixel-perfect, impactful products.
          </span>
          My diverse experience spans Marketing, Product & Engineering,
          Accounting, and Legal domains. A proactive and highly organized
          generalist, I excel at improving processes, collaborating with
          A-teams, and tackling challenging problems. My vision is to create
          <span className="accent">
            {" "}
            meaningful startups that make a positive impact.
          </span>
          I combine empathy, curiosity, and a relentless drive to deliver value
          and quality through technology. Beyond coding, I'm a lifelong learner,
          creative thinker, and strategist who loves crafting modern designs and
          exploring new business ideas. My superpower? Understanding people and
          fostering meaningful connections.
        </p>
      </div>
    </div>
  );
}
