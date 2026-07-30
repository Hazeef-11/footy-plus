import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Atom } from "react-loading-indicators";
import ApiFetch from "../hook/custom";

const Home = () => {
  let navigate = useNavigate();
  let { data, error, loading, setData } = ApiFetch(
    "https://footyplus-api-1.onrender.com/leagues",
  );
  if (loading) {
    return (
      <div>
        <img
          className="bg"
          src="https://casadepaconj.com/wp-content/uploads/2026/04/home-banner-scaled.webp"
          alt=""
        />
        <div className="loading">
          <Atom color="#ffffff" size="large" text="" textColor="" />
          <h3 style={{ color: "white" }}>Loading.....</h3>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <img
          className="bg"
          src="https://casadepaconj.com/wp-content/uploads/2026/04/home-banner-scaled.webp"
          alt=""
        />
        <h1
          style={{
            position: "absolute",
            zIndex: 5,
            marginTop: -575,
            marginLeft: 550,
            color: "white",
          }}
        >
          🌐 Oops! {error}
        </h1>
      </div>
    );
  }

  return (
    <div>
      <img
        className="bg"
        src="https://casadepaconj.com/wp-content/uploads/2026/04/home-banner-scaled.webp"
        alt=""
      />

      <div className="hometext">
        <div className="main-text">
          <TypeAnimation
            sequence={["Welcome to FootyPlus  ", 2000]}
            wrapper="span"
            speed={50}
            repeat={3}
            style={{
              fontSize: "2rem",
              color: "white",
              fontWeight: "bold",
            }}
          />
          <h6>
            Track matches, explore player statistics, follow your favourite clubs, and experience football like never before. 
          </h6>
        </div>
        <section className="fan-zone">
          <h2>Join the FootyPlus Community</h2>
          <p>
            Explore football with detailed team and player statistics, discover your favourite clubs, and stay connected to every moment of the beautiful game.
          </p>
          <button className="join-btn" onClick={() => navigate("/teams")}>
            Get Started ➜
          </button>
        </section>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <h3>FootyPlus</h3>
          <p>
            Powered by passion for football — track, connect, and celebrate the
            game you love.
          </p>
        </div>
        <div className="footer-bottom">
          <p>© 2026 FootyPlus. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
