import React from "react";
import "./Sidebar.css";
import "./SidebarOption.js";
import SidebarOption from "./SidebarOption.js";

function Player() {
  return (
    <div className="sidebar">
      <div className="sidebar_body">
        <img
          className="sidebar__logo"
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt=""
        />
        <SidebarOption title="Home" />
        <SidebarOption title="Search" />
        <SidebarOption title="Your Library" />
      </div>
    </div>
  );
}

export default Player;
