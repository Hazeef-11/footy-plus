import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ApiFetch from "../hook/custom";
import { useNavigate } from "react-router-dom";
import { Atom } from "react-loading-indicators";

const Teams = () => {
  let navigate = useNavigate();

  let { data, error, loading, setData } = ApiFetch(
    "https://footyplus-api-1.onrender.com/leagues",
  );
  if (loading) {
    return (
      <div>
        <img className="bg" src="https://casadepaconj.com/wp-content/uploads/2026/04/home-banner-scaled.webp" alt="" />
        <div className="loading">
          <Atom color="#ffffff" size="large" text="" textColor="" />
          <h3 style={{color:"white"}}>Loading.....</h3>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <img className="bg" src="https://casadepaconj.com/wp-content/uploads/2026/04/home-banner-scaled.webp" alt="" />
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
      <img className="bg" src="https://casadepaconj.com/wp-content/uploads/2026/04/home-banner-scaled.webp" alt="" />

      <h1 className="mainText">Discover Your Favouirte Football Teams</h1>
      <section className="product">
        {data.map((db) => (
          <Card
            className="cardOverlay"
            key={db.id}
            style={{ width: "250px", color: "white", padding: "5px" }}
          >
            <Card.Img className="leaguelogo" variant="top" src={db.logo} />
            <Card.Body className="mild">
              <Card.Title style={{ fontSize: "25px" }}>{db.name}</Card.Title>
              <Card.Text>{db.country}</Card.Text>
              <button
                className="leagueBtn"
                onClick={() => {
                  if (db.name === "Premier League") navigate("/pl");
                  else if (db.name === "La Liga") navigate("/laliga");
                  else if (db.name === "Serie A") navigate("/seriea");
                  else if (db.name === "Bundesliga") navigate("/bundlesliga");
                  else if (db.name === "Ligue 1") navigate("/ligue1");
                  else navigate("/teams");
                }}
              >
                Explore League ➜
              </button>
            </Card.Body>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Teams;
