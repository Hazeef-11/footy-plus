import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Create = () => {
    let navigate=useNavigate()
  let [player, setPlayer] = useState({
    id: "",
    name: "",
    country: "",
    position: "",
    photo: "",
  });

  let handleUpdate = (e) => {
    setPlayer({
      ...player,
      [e.target.name]: e.target.value,
    });
  };

  let handleCreate = () => {
    axios.post("https://footyplus-api-1.onrender.com/players", player).then((data) =>
      Swal.fire({
        title: "New player is added successfully",
        icon: "success",
        draggable: true,
      })
    )
      setPlayer({
        id: "",
        name: "",
        country: "",
        position: "",
        photo: "",
      })

      navigate("/players")
    
  }
  return (
    <div>
      <img className="bg" src="https://casadepaconj.com/wp-content/uploads/2026/04/home-banner-scaled.webp" alt="" />
      <div className="updateform">
        <h3 style={{ marginLeft: "15px" }}>Create New Player</h3>
        <div>
          <label style={{ marginLeft: "15px" }}> Name :</label>
          <input
            name="name"
            style={{ margin: " 20px 5px" }}
            type="text"
            value={player.name}
            onChange={handleUpdate}
          />
        </div>
        <div>
          Country :
          <input
            name="country"
            style={{ margin: " 20px 5px" }}
            value={player.country}
            type="text"
            onChange={handleUpdate}
          />
        </div>
        <div>
          <label htmlFor="">Position :</label>
          <input
            name="position"
            style={{ margin: " 20px 5px" }}
            value={player.position}
            onChange={handleUpdate}
            type="text"
          />
        </div>
        <div>
          <label style={{ marginLeft: "-15px" }} htmlFor="">
            Photo Url :
          </label>
          <input
            name="photo"
            style={{ margin: " 20px 5px " }}
            value={player.photo}
            onChange={handleUpdate}
            type="text"
          />
        </div>
        <button className="updatebutton" onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
};

export default Create;
