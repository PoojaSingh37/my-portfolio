import React, { useState, useEffect } from "react";
import "./about.css";
import { FaAward, FaFolderOpen } from "react-icons/fa";
import Me from "../../assets/my.jpg";
import { motion } from "framer-motion";
const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [animateTitle, setAnimateTitle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about");
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight;
        setAnimateTitle(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const image = new Image();
    image.src = Me;
    image.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <section id="about">
      <h5>Get TO Know</h5>
      <motion.h2
        initial={{ y: -30 }}
        animate={{ y: animateTitle ? 0 : -30 }} // Only animate when in view
        transition={{ delay: 0.1 }}
      >
        About Me
      </motion.h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            {imageLoaded ? (
              <img src={Me} alt="me_image" />
            ) : (
              <p>Loading image...</p>
            )}
          </div>
        </div>

        <motion.div
          initial={{ x: -300 }}
          animate={{ x: animateTitle ? 0 : -300 }} // Only animate when in view
          transition={{ delay: 0.3 }}
          className="about_content"
        >
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>2 year experience</small>
            </article>

            <article className="about_card">
              <FaFolderOpen className="about_icon" />
              <h5>Projects</h5>
              <small>5+ projects completed</small>
            </article>
          </div>

          <p>
            I studied computer science with a focus on information technology
            and acquired a strong foundation in programming concepts and
            languages, including HTML, CSS, and JavaScript. During my academic
            journey, I had the opportunity to explore React, a popular
            JavaScript library for building user interfaces. I further honed my
            skills through an internship in React JS. Building on my academic
            and internship experiences, I transitioned into the professional
            realm by working as a Junior React Developer at Softosys. During my
            one-year tenure, I had the chance to immerse myself in real-world
            projects, enhancing my expertise and gaining valuable practical
            insights. This experience has significantly contributed to my
            proficiency in React and web development. I am a quick learner with
            the ability to adapt swiftly to new technologies. As a team player,
            I actively seek opportunities to collaborate and thrive on
            constructive feedback to continuously improve my work. Eager to take
            on new challenges, I am now looking forward to leveraging my skills
            and experiences in web development for future career opportunities.
            I am confident that my blend of academic knowledge and hands-on
            experience makes me a valuable asset to any development team. I am
            excited about the prospect of contributing to meaningful projects
            and continuing to grow in my career.
          </p>
          <div className="button">
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
