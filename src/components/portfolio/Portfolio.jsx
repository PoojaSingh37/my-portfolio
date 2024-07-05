import React, { useState, useEffect } from "react";
import "./portfolio.css";
import ecommerce from "../../assets/ecommerce.jpg";
import Ow from "../../assets/ow.jpg";
import { motion } from "framer-motion";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";

const Portfolio = () => {
  const [animateTitle, setAnimateTitle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("portfolio");
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
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <motion.h2
        initial={{ y: -30 }}
        animate={{ y: animateTitle ? 0 : -30 }} // Only animate when in view
        transition={{ delay: 0.1 }}
      >
        About Portfolio
      </motion.h2>

      <motion.div
        initial={{ x: -300 }}
        animate={{ x: animateTitle ? 0 : -300 }} // Only animate when in view
        transition={{ delay: 0.3 }}
        className="container portfolio_container"
      >
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Ow} alt="ecommerce img" />
          </div>
          <h3>Company Website</h3>
          <div className="portfolio_item-cta">
            <p className="btn">
              Github <IoMdCloseCircle   fontSize={24} />
            </p>
            <button className="btn btn-primary">
              Live <IoMdCloseCircle  fontSize={24}  />
            </button>
          </div>
        </article>
       
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={ecommerce} alt="ecommerce img" />
          </div>
          <h3>Ecommerce Website</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/PoojaSingh37/project03.git">
              <p className="btn">Github 
              <IoMdCheckmarkCircle color="green" fontSize={24} /></p>
            </a>
            <button className="btn btn-primary">
              Live <IoMdCloseCircle fontSize={24} />
            </button>
          </div>
        </article>
      </motion.div>
    </section>
  );
};

export default Portfolio;
