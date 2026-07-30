import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ApiFetch from "../../hook/custom";
import axios from "axios";
import Swal from "sweetalert2";

const Update = () => {
   
  let navigate=useNavigate()
  let { id } = useParams();

  let [updatedata,setUpdatedata]=useState("")

  
  useEffect(()=>{
     axios.get(`https://footyplus-api-1.onrender.com/players/${id}`)
     .then(res=>setUpdatedata(res.data))
   },[])

  

   let handleAll=(e)=>{
    e.preventDefault()

    axios.put(`https://footyplus-api-1.onrender.com/players/${id}`,updatedata)
     .then(() =>  Swal.fire({
             title: "Player updated successfully",
             icon: "success",
             draggable: true,
           })
         )

     navigate("/players")

   
  

   }
  
   
   

   let handleUpdate=(e)=>{
    setUpdatedata({
      ...updatedata,
      [e.target.name]:e.target.value
    })


   }
   console.log(updatedata);
   

 
  return (
    <div>
      <img className="bg" src="https://casadepaconj.com/wp-content/uploads/2026/04/home-banner-scaled.webp" alt="" />
      <div className="updateform1">
        <h3 style={{marginLeft:"15px"}}>Update player</h3>
        <div><label style={{marginLeft:"15px"}}> Name :</label><input name="name" style={{ margin: " 20px 5px" }}  placeholder="Name" value={updatedata.name}  type="text" onChange={handleUpdate}/></div>
        <div>
          Country :
          <input
        name="country"
          style={{ margin: " 20px 5px" }}
          value={updatedata.country}
          placeholder="Nationality"
          type="text"
          onChange={handleUpdate}
         
        /></div>
        <div><label htmlFor="">Position :</label><input name="position" style={{margin: " 20px 5px" }} placeholder="country" value={updatedata.position} type="text" onChange={handleUpdate}/></div>
        <button className="updatebutton" onClick={handleAll}>Update</button>
        
      </div>
    </div>
  );
};

export default Update;
