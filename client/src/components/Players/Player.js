import React from "react";


function Player({ name, country, searches, id }) {

  return (
    <tr>
      <td >{id}</td>
      <td>{name}</td>
      <td>{country}</td>
      <td>{searches}</td>
    </tr>
  );
}

export default Player;
