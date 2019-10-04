import React, { useState, useEffect } from "react";

function useLocalStorage(key, intialValue) {
  const [storedData, setStoredData] = useState(() => {
    const dataInStore = JSON.parse(window.localStorage.getItem(key));
    if (dataInStore) return dataInStore;
    else return intialValue;
  });



  function setDataToStore(data) {
    setStoredData(data);
    window.localStorage.setItem(key, JSON.stringify(data));
  }

  return [storedData, setDataToStore];
}
export default useLocalStorage;