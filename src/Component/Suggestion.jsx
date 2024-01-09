import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import { useAuth } from "../Contexts/AuthContext";
function Suggestion() {
  const { globalEmail } = useAuth();
  const Suggestion = () => {
    const location = useLocation();
    const { doctors } = location.state || {};
    console.log(doctors);
    // Render your UI based on the doctors data
  };
  return (
    <Header globalEmail={globalEmail}>
      <div className="note">
        <h1>This is suggestion page</h1>
      </div>
    </Header>
  );
}
export default Suggestion;
