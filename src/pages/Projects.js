// Importing the Mother of all Loads (React)
import React from "react";
// Import Link from Router DOM
import { Link } from "react-router-dom";
// importing Images
import elenaJoy from "../img/elena-joy.jpg";
import travel from "../img/travelly.jpg";
// Importing Icons
import twitter from "../icons/twitter 1.svg";
import instagram from "../icons/instagram 1.svg";
import youtube from "../icons/youtube-symbol 1.svg";

const Projects = () => {
  return (
    <div>
      <section className="projects">
        <div className="travelly">
          <h2>Travelly</h2>
          <Link to="https://aliabukahil.github.io/travel-WebSite/">
            <img src={travel} alt="travelly-project" />
          </Link>
        </div>
        <div className="elena">
          <h2>Elena Joy</h2>
          <Link to="https://aliabukahil.github.io/photographyWebsite-Elena-Joy/">
            <img src={elenaJoy} alt="elena-joy-project" />
          </Link>
        </div>
      </section>
      <section className="projects">
        <div className="travelly">
          <h2>Travelly</h2>
          <Link to="https://aliabukahil.github.io/travel-WebSite/">
            <img src={travel} alt="travelly-project" />
          </Link>
        </div>
        <div className="elena">
          <h2>Elena Joy</h2>
          <Link to="https://aliabukahil.github.io/photographyWebsite-Elena-Joy/">
            <img src={elenaJoy} alt="elena-joy-project" />
          </Link>
        </div>
      </section>
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

export default Projects;
