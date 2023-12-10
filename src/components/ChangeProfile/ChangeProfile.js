import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../App";

export const ChangeProfile = () => {
  const [newUsername, setNewUsername] = useState("");

  const { setUsername } = useContext(AppContext);

  return (
    <div>
      <input onChange={(e) => setNewUsername(e.target.value)}></input>
      <button onClick={() => setUsername(newUsername)}> Submit </button>
    </div>
  );
};
