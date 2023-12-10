import { useState } from "react";
import Axios from "axios";

export const GuessWord = () => {
  const [word, setWord] = useState("");
  const [synonyms, setSynonyms] = useState([]);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    Axios.get(`https://api.datamuse.com/words?rel_syn=${word}`)
      .then((response) => {
        setSynonyms(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="word-input"> Your Word Here: </label>
        <input
          id="word-input"
          placeholder="Fast..."
          onChange={(event) => setWord(event.target.value)}
        />
        <button> Submit </button>
      </form>
      <ul>
        {synonyms.map((syn) => {
          return <li key={syn.word}> {syn.word} </li>;
        })}
      </ul>
    </div>
  );
};
