import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
//I just reinstall the command npm install react-icons and then it works.
const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <FaFacebook className="icon" />
        <FaTwitter className="icon" />
        <FaInstagram className="icon" />
      </div>
    </footer>
  );
};

export default Footer;
