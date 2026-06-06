import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Routing/Navigation";
import { BrowserRouter as Router, Routes, Route, ServerRouter } from "react-router-dom";
import Home from "./Routing/Home";
import Teams from "./Routing/Teams";
import Players from "./Routing/Players";
import Matches from "./Routing/Matches";
import Pl from "./Routing/league/pl";
import Laliga from "./Routing/league/Laliga";
import Seriea from "./Routing/league/Seriea";
import Bundlesliga from "./Routing/league/Bundlesliga";
import Ligue1 from "./Routing/league/Ligue1";
import Plteams from "./Routing/league/Plteams";
import LaligaTeams from "./Routing/league/LaligaTeams";
import SerieaTeam from "./Routing/league/SerieaTeam";
import BundesligaTeam from "./Routing/league/BundesligaTeam";
import Ligue1Team from "./Routing/league/Ligue1Team";
import Notfound from "./Routing/Notfound";
import PlayerDetails from "./Routing/playerDetails";
import Update from "./Routing/CRUD/Update";
import Favplayer from "./Routing/redux/Favplayer";
import Create from "./Routing/CRUD/Create";

if(!localStorage.getItem("cart")){

  localStorage.setItem("cart",JSON.stringify([]))
}




function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/players" element={<Players />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/pl" element={<Pl />} />
          <Route path="/laliga" element={<Laliga />} />
          <Route path="/seriea" element={<Seriea />} />
          <Route path="/bundlesliga" element={<Bundlesliga />} />
          <Route path="/ligue1" element={<Ligue1 />} />
          <Route path="/plteams/:id" element={<Plteams />} />
          <Route path="/laligateams/:id" element={<LaligaTeams />} />
          <Route path="/seriateams/:id" element={<SerieaTeam />} />
          <Route path="/bundesligateams/:id" element={<BundesligaTeam/>} />
          <Route path="/ligue1teams/:id" element={<Ligue1Team/>} />
          <Route path="/playerDetails/:id" element={<PlayerDetails/>} />
          <Route path="/update/:id" element={<Update/>} />
          <Route path="/create" element={<Create/>} />
          <Route path="/favoriteplayer" element={<Favplayer/>} />
          
          <Route path="*" element={<Notfound/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
