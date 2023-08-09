import "../../styles/SideBar.css";
import Logo from "../Logo";
import ListItem from "./ListItem";
import home from "../../assets/home.svg";
import file from "../../assets/file.svg";
import dollar from "../../assets/dollar.svg";
import twoUsers from "../../assets/two-users.svg";
import userPlus from "../../assets/user-plus.svg";
import key from "../../assets/key.svg";
import menuDot from "../../assets/menuDot.svg";
import { useState } from "react";

const SideBar = () => {
  const [showing, setShowing] = useState(true);

  const styles = {
    display: showing ? "block" : "none",
  };

  const containerStyle = {
    width: showing ? "360px" : "34px",
    padding: showing ? "1.35rem .1rem 1.35rem 20px" : "1.35rem .1rem",
  };

  const toggleShow = () => {
    setShowing(showing ? false : true);
  };

  return (
    <div style={containerStyle} className="sidebar-container">
      <div style={styles} className="side-bar">
        <Logo />
        <div className="list-items">
          <ListItem
            icon={<img width="22px" src={home} placeholder="icon" />}
            text={"Dashboard"}
            page="/dashboard"
          />
          <ListItem
            icon={<img width="22px" src={userPlus} placeholder="icon" />}
            text={"School Registration"}
            page="/school-registration"
          />
          <ListItem
            icon={<img width="22px" src={twoUsers} placeholder="icon" />}
            text={"User Management"}
            page="/user-management"
          />
          <ListItem
            icon={<img width="22px" src={dollar} placeholder="icon" />}
            text={"Masjid Management"}
            page="/masjid-management"
          />
          {/* <ListItem
          icon={<img width="22px" src={file} placeholder="icon" />}
          text={"Reports"}
        /> -- this should be a dropdown here for the three below */}
          <ListItem
            icon={<img width="22px" src={file} placeholder="icon" />}
            text={"Total Contributions"}
            page="/total-contributions"
          />
          <ListItem
            icon={<img width="22px" src={file} placeholder="icon" />}
            text={"Total Expenses"}
            page="/total-expenses"
          />
          <ListItem
            icon={<img width="22px" src={file} placeholder="icon" />}
            text={"Total Users"}
            page="/total-users"
          />
          <ListItem
            icon={<img width="22px" src={key} placeholder="icon" />}
            text={"Logs"}
            page="/logs"
          />
        </div>
      </div>
      <img onClick={() => toggleShow()} className="menu" src={menuDot} />
    </div>
  );
};

export default SideBar;
