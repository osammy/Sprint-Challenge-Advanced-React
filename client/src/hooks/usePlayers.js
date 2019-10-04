import React, { useState } from "react";
import useLocalStorage from './useLocalStorage';

function usePlayers(key, intialValue) {
//   const [storedData, setStoredData] = useState(() => {
//     const dataInStore = window.localStorage.getItem("key");
//     if (dataInStore) return dataInStore;
//     else return intialValue;
//   });

//   function setDataToStore(data) {
//     setStoredData(data);
//     window.localStorage.setItem(key, data);
//   }

  const [players, setPlayers] = useLocalStorage(key,intialValue)

  return [players, setPlayers];
}

export default usePlayers;