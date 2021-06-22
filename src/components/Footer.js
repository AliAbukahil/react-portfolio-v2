import React from "react";

// Importing Icons
import twitter from "../icons/twitter 1.svg";
import instagram from "../icons/instagram 1.svg";
import youtube from "../icons/youtube-symbol 1.svg";
// Importing links
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <h4>Dev Ali &copy; 2021</h4>
        <ul>
          <li>
            <Link to="#">
              <img src={twitter} alt="twitter" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src={instagram} alt="instagram" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src={youtube} alt="youtube-social" />
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
