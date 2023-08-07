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
    transform: showing ? "translateX(0px)" : "translateX(-250px)",
  };

  const toggleShow = () => {
    setShowing(showing ? false : true);
  };

  return (
    <div style={styles} className="side-bar">
      <div className="logo-menu">
        <Logo />
        <img onClick={() => toggleShow()} className="menu" src={menuDot} />
      </div>
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
  );
};

export default SideBar;
