import { useContext } from "react";
import { AppContext } from "../App";

export const Home = () => {
  const { username } = useContext(AppContext);
  return <div> THIS IS THE HOMEPAGE and user is: {username} </div>;
};
