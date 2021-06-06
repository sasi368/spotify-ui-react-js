import React from "react";
import "./Sidebar.css";
import "./SidebarOption.js";
import SidebarOption from "./SidebarOption.js";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlists) => {
        <SidebarOption title={playlists.name} />;
      })}
      {/* <SidebarOption title="Hip hop" />
      <SidebarOption title="Rock" />
      <SidebarOption title="Rnb" /> */}
    </div>
  );
}

export default Sidebar;
