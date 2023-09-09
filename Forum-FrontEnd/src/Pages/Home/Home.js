import React, { useContext, useEffect } from "react";
import { userContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import "./Home.css"

function Home({ logout }) {
  const [userData, setUserData] = useContext(userContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!userData.user) navigate("/login");
    // Questions();
  }, [userData.user, navigate]);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   navigate("/ask-question");
  // };
  return (
    <div>
      <h4>Welcome: {userData.user?.display_name}</h4>
      <button onClick={logout}>Log out</button>
    </div>
  );
}

export default Home;