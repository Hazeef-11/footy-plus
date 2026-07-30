import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiFetch from "../../hook/custom";

const Ligue1Team = () => {
  let { id } = useParams();

  let { data, error, loading, setData } = ApiFetch(
    `https://footyplus-api-1.onrender.com/ligue1Teams/${id}`,
  );

  return (
    <div>
      <img
        className="bg"
        src="https://casadepaconj.com/wp-content/uploads/2026/04/home-banner-scaled.webp"
        alt=""
      />
      <img
        className="bg"
        style={{ height: "130vh", width: "100vw" }}
        src="https://casadepaconj.com/wp-content/uploads/2026/04/home-banner-scaled.webp"
        alt=""
      />

      <div className="team-card">
        <div className="team-header">
          <div className="logo-section">
            <img src={data.logo} alt={data.name} className="team-logo" />
            <div className="team-title">
              <h1>{data.name}</h1>
              <h3 className="nickname">{data.nickname}</h3>
            </div>
          </div>
        </div>

        <div className="club-details">
          <p>
            <strong>Founded:</strong> {data.founded}
          </p>
          <p>
            <strong>Stadium:</strong> {data.stadium}
          </p>
          <p>
            <strong>Location:</strong> {data.location}
          </p>
          <p>
            <strong>Country:</strong> {data.country}
          </p>
          <p>
            <strong>League:</strong> {data.league}
          </p>
        </div>

        {/* Honours Section */}
        <div className="honours">
          <h2>🏆 Honours</h2>
          <div className="honours-grid">
            <div className="honour-item">
              <h5>Ligue 1 - Titles</h5>
              <h3>{data.ligue1}</h3>
            </div>
            <div className="honour-item">
              <h5>Trophée des Champions</h5>
              <h3>{data.tropheeDesChampions}</h3>
            </div>
            <div className="honour-item">
              <h5>Coupe de France</h5>
              <h3>{data.coupeDeFrame}</h3>
            </div>
            <div className="honour-item">
              <h5>Champions League Titles</h5>
              <h3>{data.ucl}</h3>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="about">
          <h2>📘 About the Club</h2>
          <p>{data.about}</p>
        </div>

        {/* Club Info Section */}
        <div className="club-info">
          <h2>🏟️ Club Info</h2>
          <div className="info-grid">
            <p>
              <strong>Nickname:</strong> {data.nickname}
            </p>
            <p>
              <strong>Manager:</strong> {data.manager}
            </p>
            <p>
              <strong>Stadium Capacity:</strong> {data.capacity}
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a href={data.website}>{data.website}</a>
            </p>
            <p>
              <strong>Est. Year:</strong> {data.founded}
            </p>
            <p>
              <strong>Jersey Colors:</strong>{" "}
              {Array.isArray(data.colors)
                ? data.colors.join(", ")
                : data.colors}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ligue1Team;
