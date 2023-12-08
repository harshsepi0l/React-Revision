import { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

/*
Lifecycle of a component

Mounting
Upadting
Unmounting

https://api.agify.io/?name=Harsha : API fetching with useEffect
*/

export default function FetchAPI() {
  const [name, setName] = useState();
  const [predictedAge, setPredictedAge] = useState(null);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data);
    });
  };

  return (
    <div className="App">
      <input
        placeholder="Ex. Harsha..."
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={fetchData}> Predict Age</button>

      <h1> Name: {predictedAge?.name} </h1>
      <h1> Predicted Age: {predictedAge?.age} </h1>
      <h1> Count: {predictedAge?.count} </h1>
    </div>
  );
}
