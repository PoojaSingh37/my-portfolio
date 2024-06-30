import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me1.png";
import HeaderSocials from "./HeaderSocials";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <header id="header">
      <div className="container header_container">
        <motion.h5
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.75 }}
        >
          Hello I'm
        </motion.h5>
        <motion.h1
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Pooja Singh
        </motion.h1>
        <motion.h5
          className="text-light"
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.75 }}
        >
          Front-End Developer
        </motion.h5>
        <CTA />

        <HeaderSocials />
        <div className="me">
          <img src={ME}  alt="me" />
        </div>
        <motion.a
          initial={{ y: -500 }}
          animate={{ y: 0 ,rotate:90}}
          transition={{ duration: 0.75 }}
          href="#contact"
          className="scroll_down"
        >
          Scroll Down
        </motion.a>
      </div>
    </header>
  );
};

export default Header;
