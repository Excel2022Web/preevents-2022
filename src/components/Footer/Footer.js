import React from "react";
import "./Footer.css";

import { FaFacebookF, FaLinkedinIn} from 'react-icons/fa';
import { FiInstagram} from "react-icons/fi";

const Footer = () => {
  return <div className="footer">
     <div className="footer_icons">
          <FaFacebookF className="socialmedia_icon" />
          <FiInstagram className="socialmedia_icon" />
          <FaLinkedinIn className="socialmedia_icon" />
     </div>
     <div className="footer_desc">
      <p> Made with  
                <span>
                    ❤
                </span>
                 Excel 2022 </p>
     </div>
  </div>;
};

export default Footer;
