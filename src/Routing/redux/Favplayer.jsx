import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeitem } from "../../cart/cartslice";
import Swal from "sweetalert2";

const Favplayer = () => {
  let dispatch = useDispatch();

  let favplayer = useSelector((player) => {
    return player.cart;
  });
  console.log(favplayer);

  let handleDelete = (id) => {
    dispatch(removeitem(id));

    Swal.fire({
      icon: "error",
      title: "Player has been deleted from favourites",
    });
  };

  return (
    <div>
      <img
        className="bg"
        src="https://casadepaconj.com/wp-content/uploads/2026/04/home-banner-scaled.webp"
        alt=""
      />
      <img
        className="bg"
        src="https://casadepaconj.com/wp-content/uploads/2026/04/home-banner-scaled.webp"
        alt=""
      />

      {favplayer.length > 0 ? (
        <>
          <h1 className="mainText1">Collection of Your Favourite Players </h1>

          <section className="product3">
            {favplayer.map((db) => (
              <Card
                className="cardOverlay"
                key={db.id}
                style={{ color: "white", padding: "5px" }}
              >
                <Card.Img
                  className="leaguelogo1"
                  variant="top"
                  src={db.photo}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/300x300?text=Player";
                  }}
                />
                <Card.Body className="mild">
                  <Card.Title style={{ fontSize: "25px" }}>
                    {db.name}
                  </Card.Title>
                  <Card.Text>Nationality: {db.country}</Card.Text>
                  <Card.Text style={{ marginTop: "-10px" }}>
                    Position: {db.position}
                  </Card.Text>
                  <button className="leagueBtn">
                    <Link
                      to={`/playerDetails/${db.id}`}
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Player Details ➜
                    </Link>
                  </button>

                  <div>
                    <button
                      className="favplayerbutton"
                      onClick={() => handleDelete(db)}
                    >
                      <FaTrash />
                      <br />
                      Delete
                    </button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </section>
        </>
      ) : (
        <div>
          <h1 className="mainText1">Add Your Favourite Players</h1>
        </div>
      )}
    </div>
  );
};

export default Favplayer;
