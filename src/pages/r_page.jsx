import React from "react";
import Register from "./register";
import "../styles/index.css";
import { Image } from "antd";

const Rpage = () => {
  return (
    <>
      <Image className="dlogo" src="images/d_logo.png" />
      <Image className="tlogo" src="images/logo.png" />
      <div
        className="main-div"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.4)),url(/images/back1.jpg)",
        }}
      >
        <div className="center-div">
          <Register />
        </div>
      </div>
    </>
  );
};

export default Rpage;
