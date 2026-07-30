import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Atom } from "react-loading-indicators";
import ApiFetch from "../hook/custom";
import axios from "axios";
import { MdEditSquare } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { additem } from "../cart/cartslice";
import Swal from "sweetalert2";
import { IoPersonAddSharp } from "react-icons/io5";

const Players = () => {
  let { data, error, loading, setData } = ApiFetch(
    "https://footyplus-api-1.onrender.com/players",
  );
  let [value, setValue] = useState("");

  let navigate = useNavigate();
  let dispatch = useDispatch();

  let favplayer = useSelector((player) => {
    return player.cart;
  });
  console.log(favplayer);

  let find = data.filter((team) =>
    team.name.toLowerCase().includes(value.toLocaleLowerCase()),
  );

  let handleDelete = (id) => {
    axios.delete(`https://footyplus-api-1.onrender.com/players/${id}`).then((res) => {
      let del = data.filter((dlt) => dlt.id !== id);
      setData(del);
       Swal.fire({
        icon: "error",
        title: "Player is deleted successfully",
        
        
      });
    });
  };

  let handlefav = (database) => {
    let checkList = favplayer.some((data) => data.id == database.id);

    if (checkList) {
      Swal.fire({
        icon: "error",
        title: "Player is already in Favorites",
        
        
      });
    } else {
      dispatch(additem(database));
      Swal.fire({
        title: "Player has been added to favorites",
        icon: "success",
        draggable: true,
      });
    }
  };
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
      <img className="bg1" src="https://casadepaconj.com/wp-content/uploads/2026/04/home-banner-scaled.webp" alt="" />
      <img className="bg1" src="https://casadepaconj.com/wp-content/uploads/2026/04/home-banner-scaled.webp" alt="" />
      <img className="bg1" src="https://casadepaconj.com/wp-content/uploads/2026/04/home-banner-scaled.webp" alt="" />
      <img className="bg1" src="https://casadepaconj.com/wp-content/uploads/2026/04/home-banner-scaled.webp" alt="" />
      <img className="bg1" src="https://casadepaconj.com/wp-content/uploads/2026/04/home-banner-scaled.webp" alt="" />
      <img className="bg1" src="https://casadepaconj.com/wp-content/uploads/2026/04/home-banner-scaled.webp" alt="" />
      <img className="bg1" src="https://casadepaconj.com/wp-content/uploads/2026/04/home-banner-scaled.webp" alt="" />
      <img className="bg1" src="https://casadepaconj.com/wp-content/uploads/2026/04/home-banner-scaled.webp" alt="" />
      <img className="bg1" src="https://casadepaconj.com/wp-content/uploads/2026/04/home-banner-scaled.webp" alt="" />
      <img className="bg1" src="https://casadepaconj.com/wp-content/uploads/2026/04/home-banner-scaled.webp" alt="" />
      <img className="bg1" src="https://casadepaconj.com/wp-content/uploads/2026/04/home-banner-scaled.webp" alt="" />
      <img className="bg1" src="https://casadepaconj.com/wp-content/uploads/2026/04/home-banner-scaled.webp" alt="" />
      <img className="bg1" src="https://casadepaconj.com/wp-content/uploads/2026/04/home-banner-scaled.webp" alt="" />
      <img className="bg1" src="https://casadepaconj.com/wp-content/uploads/2026/04/home-banner-scaled.webp" alt="" />
      <img className="bg1" src="https://casadepaconj.com/wp-content/uploads/2026/04/home-banner-scaled.webp" alt="" />
      <div className="mainsearch">
        <input
          type="text"
          placeholder="Search Teams......."
          style={{
            padding: "10px 200px 10px 20px",
            borderRadius: "10px",
            border: "3px solid black",
            boxShadow: "1px 0px 20px #007bff",
            outline: "none",
          }}
          onChange={(e) => setValue(e.target.value)}
        />
        <FaSearch style={{ color: "black", marginLeft: "-30px",marginTop:"15px" }} />
        <div><button className="addbtn"onClick={()=>navigate("/create")}><IoPersonAddSharp/> <br />Add new player</button></div>

       
      </div>
      <h1 className="mainText1">Find the Players Who Inspire You</h1>
      <section className="product2">
        {find.map((db) => (
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
              <Card.Title style={{ fontSize: "25px" }}>{db.name}</Card.Title>
              <Card.Text>Nationality : {db.country}</Card.Text>
              <Card.Text style={{ marginTop: "-10px" }}>
                Position : {db.position}
              </Card.Text>
              <button className="leagueBtn">
                <Link
                  to={`/playerDetails/${db.id}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Player Details ➜
                </Link>
              </button>

              <div className="player-btn">
                <button
                  className="one"
                  style={{
                    backgroundColor: "#464a55",
                    margin: "20px 10px 10px 10px",
                    color: "white",
                    fontSize: "15px",
                    border: "none",
                    borderRadius: "8px",
                  }}
                  onClick={() => navigate(`/update/${db.id}`)}
                >
                  <MdEditSquare /> <br /> Update
                </button>
                <button
                  className="two"
                  style={{
                    backgroundColor: "#ff0000",
                    margin: "20px 10px 10px 10px",
                    color: "white",
                    fontSize: "15px",
                    border: "none",
                    borderRadius: "8px",
                  }}
                  onClick={() => handleDelete(db.id)}
                >
                  <FaTrash />
                  <br />
                  Delete
                </button>
                <button
                className="three"
                  style={{
                    position: "absolute",
                    backgroundColor: "#000000",
                    marginTop: "-373px",
                    marginLeft: "-10px",
                    color: "white",
                    fontSize: "10px",
                    border: "none",
                    borderRadius: "5px",
                    zIndex: "10",
                  }}
                  onClick={() => handlefav(db)}
                >
                  <MdFavorite />
                  <br />
                  favorite
                </button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Players;
