import React from "react";
import logo from "../image/youtube_logo.png";

const YoutubeLogo = () => {
    return (
        <div className="d-flex col-md-2">
            <img src={logo} style={{ width: "40px", height: "50px", margin: "-8px 0 0 0" }} alt="My Website Logo" className="navbar-brand" />
            <h3 className="d-flex">
                YouTube <sup style={{ fontSize: "15px", fontWeight: "bold" }}>BD</sup>
            </h3>
        </div>
    );
};

export default YoutubeLogo;
