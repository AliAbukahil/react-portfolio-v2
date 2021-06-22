// Importing the Mother of all Loads (React)
import React from "react";
// Import Link from Router DOM
import { Link } from "react-router-dom";
// Importing Icons
import twitter from "../icons/twitter 1.svg";
import instagram from "../icons/instagram 1.svg";
import youtube from "../icons/youtube-symbol 1.svg";
// Importing formSpree for form
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xyyljoaj");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div>
      <section className="form-section">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />

          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" cols="30" rows="10" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
        {/* End of Form */}
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

export default Contact;
