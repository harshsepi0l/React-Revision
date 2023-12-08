import { useState } from "react";

export const ChangeProfile = () => {
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  const handleChange = () => {
    setNewUsername(username);
  };

  return (
    <div>
      <input onChange={(e) => setUsername(e.target.value)}></input>
      <button onClick={handleChange}> Submit </button>
      <h1> {newUsername}</h1>
    </div>
  );
};
