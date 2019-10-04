import React, { useState, useEffect } from "react";
import Player from "./Player";
import axios from "axios";
import usePlayers from "../../hooks/usePlayers";
import "./players.css";

const url = "http://localhost:5000/api/players";

function Players() {
  const [players, setPlayers] = usePlayers("players", []);
  const [playerKeys, setPlayerKeys] = useState([]);

  console.log(players)



  useEffect(() => {
    const getPlayers = async () => {
      try {
        const playersData = await axios.get(url);
        setPlayers(playersData.data);
      } catch (e) {
        //alert("couldnt get players from api");
      }
    };
    if(players.length === 0) getPlayers();
  }, []);

  return (
    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Country</td>
            <td>searches</td>
          </tr>
        </thead>
        <tbody>
          {players.map((prop, index) => (
            <Player key={index} {...prop} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Players;
