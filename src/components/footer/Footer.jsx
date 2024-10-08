/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {BsFacebook} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo' >Pooja Singh</a>
      <ul className='permalinks' >
        <li><a href="#" >Home</a></li>
        <li><a href="#about" >About</a></li>
        <li><a href="#experience" >Experience</a></li>
        <li><a href="#portfolio" >Portfolio</a></li>
        <li><a href="#contact" >Contact</a></li>
      </ul>

      <div className='footer_socials' >
        <a href="https://www.facebook.com/profile.php?id=100008750351086//"><BsFacebook /></a>
        <a href="https://www.instagram.com/singhpooja37/"><BsInstagram /></a>
      </div>
      <div className='footer_copyright' >
        <small>&copy; Pooja.All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer