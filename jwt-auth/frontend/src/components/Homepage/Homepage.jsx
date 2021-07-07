import React from "react";
import "./Homepage.css";

function Homepage({ setLoginUser }) {
  return (
    <div className="homepage">
      <h1>Hello Home Page</h1>
      <button
        className="button"
        onClick={() => {
          setLoginUser({});
        }}
      >
        {" "}
        Logout
      </button>
    </div>
  );
}

export default Homepage;
