import React from "react";
import ApiFetch from "../hook/custom";
import { useParams } from "react-router-dom";
import { Atom } from "react-loading-indicators";

const PlayerDetails = () => {
  let{id}=useParams()
  let {data, error, loading } = ApiFetch(`https://footyplus-api-1.onrender.com/playerDetails/${id}`);

 if (loading) {
       return (
         <div>
           <img className="bg" src="/people-soccer-stadium.jpg" alt="" />
           <div className="loading">
             <Atom color="#ffffff" size="large" text="" textColor="" />
           </div>
         </div>
       );
     }
   
     if (error) {
       return (
         <div>
           <img className="bg" src="people-soccer-stadium.jpg" alt="" />
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
    <>
     <img className="bg" src="/people-soccer-stadium.jpg" alt="" />
     <img className="bg" src="/people-soccer-stadium.jpg" alt="" />
      
        
          <div className="player-card">
            <img className="player-photo" src={data.photo} alt={data.name} />
            <h1>{data.name}</h1>
            <h3><span>#</span>{data.number} {data.position}</h3>
            <p><span>Country:</span> {data.nationality} </p>
            <p><span>Age:</span>  {data.age}</p>
            <p><span>Height: </span>{data.height} </p>
            <p><span>Weight:</span>  {data.weight}</p>
            <p><span>Current Team: </span> {data.team}</p>
            <p> <span>Birthday:</span>  {data.birthday}</p>

            <div className="stats-summary">
              <div><strong>Appearances</strong><br />{data.appearances}</div>
              <div><strong>Goals</strong><br />{data.goals}</div>
              <div><strong>Assists</strong><br />{data.assists}</div>
              <div><strong>Yellow / Red Cards</strong><br />{data.cards}</div>
            </div>

            <h2 className="table-title">Season Stats</h2>
            <table className="season-table">
              <thead>
                <tr>
                  <th>Season</th>
                  <th>Team</th>
                  <th>Goals</th>
                  <th>Assists</th>
                  <th>Yellow Cards</th>
                  <th>Red Cards</th>
                </tr>
              </thead>
              <tbody>
                {data.seasons.map((s, i) => (
                  <tr key={i}>
                    <td>{s.year}</td>
                    <td>{s.team}</td>
                    <td>{s.goals}</td>
                    <td>{s.assists}</td>
                    <td>{s.yellow}</td>
                    <td>{s.red}</td>
                  </tr>
                ))}
              </tbody>
            </table>
              <div className="extra-info">
          <div className="clubs">
            <h3>🏟️ Clubs Played</h3>
            <ul>
              {data.clubsPlayed.map((club, i) => (
                <li key={i}>{club}</li>
              ))}
            </ul>
          </div>

          
        </div>

            <p className="bio">{data.bio}</p>
          </div>
        
      
    </>
  );
};

export default PlayerDetails;
