import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ApiFetch from "../../hook/custom";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Atom } from "react-loading-indicators";

const Ligue1 = () => {
  let { data, error, loading, setData } = ApiFetch(
    "https://footyplus-api-1.onrender.com/ligue1",
  );
  let [value, setValue] = useState("");

  let find = data.filter((team) =>
    team.name.toLowerCase().includes(value.toLocaleLowerCase()),
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
            marginTop: -700,
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
      <img
        className="bg1"
        src="https://casadepaconj.com/wp-content/uploads/2026/04/home-banner-scaled.webp"
        alt=""
      />
      <img
        className="bg1"
        src="https://casadepaconj.com/wp-content/uploads/2026/04/home-banner-scaled.webp"
        alt=""
      />
      <div className="mainsearch">
        <input
          type="text"
          placeholder="Search Teams......."
          style={{
            padding: "10px 200px 10px 20px",
            borderRadius: "10px",
            border: "3px solid black",
            boxShadow: "1px 0px 10px #00c6ff",
            outline: "none",
          }}
          onChange={(e) => setValue(e.target.value)}
        />
        <FaSearch
          style={{ color: "black", marginLeft: "-30px", marginTop: "15px" }}
        />
      </div>
      <h1 className="mainText1">Discover Your Favouirt Football Teams</h1>
      <section className="product1">
        {find.map((db) => (
          <Card
            className="cardOverlay"
            key={db.id}
            style={{ color: "white", padding: "5px" }}
          >
            <Card.Img className="leaguelogo1" variant="top" src={db.logo} />
            <Card.Body className="mild">
              <Card.Title style={{ fontSize: "25px" }}>{db.name}</Card.Title>
              <Card.Text>Since : {db.founded}</Card.Text>
              <button className="leagueBtn">
                <Link
                  to={`/ligue1teams/${db.id}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Team Details ➜
                </Link>
              </button>
            </Card.Body>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Ligue1;
