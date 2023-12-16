import { useContext } from "react";
import { AppContext } from "../App";

export const Home = () => {
  const { username } = useContext(AppContext);
  return (
    <>
      {" "}
      THIS IS THE HOMEPAGE and user is:{" "}
      <span
        color="red
      "
      >
        {" "}
        {username}{" "}
      </span>
    </>
  );
};
