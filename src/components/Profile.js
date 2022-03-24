import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <div>
      <h3>Welcome {auth.user}</h3>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
