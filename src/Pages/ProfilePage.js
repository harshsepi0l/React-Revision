import { ChangeProfile } from "../components/ChangeProfile/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

export const ProfilePage = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      {" "}
      Profile Page! the user is: {username}
      <ChangeProfile />
    </div>
  );
};
