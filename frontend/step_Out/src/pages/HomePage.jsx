import React, { useContext } from "react";
import { AuthContext } from "../Context/authContext";
import TrainSearch from "./TrainSearch";

const HomePage = () => {
  const { token } = useContext(AuthContext);

  console.log(token);

  return (
    <div>
      <TrainSearch />
    </div>
  );
};

export default HomePage;
