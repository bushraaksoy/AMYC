import "../../styles/Header.css";
import profile from "../../images/profile.png";
import moon from "../../assets/moon.svg";
import search from "../../assets/search.svg";
import star from "../../assets/star.svg";
import ProfileDropdown from "./ProfileDropdown";
import menuDot from "../../assets/menuDot.svg";
import { useRef } from "react";
import SideBar from "./SideBar";

const Header = () => {
  const dropdown = useRef(null);
  const sideBar = useRef(null);

  return (
    <div className="header">
      <img
        onClick={() => sideBar.current.show()}
        className="menu"
        src={menuDot}
      />
      <div className="title">
        AMYC SYSTEM ALL <img className="svg-star" src={star} />{" "}
      </div>
      <div className="profile-sect">
        <img src={moon} />
        <img src={search} />
        <img
          onMouseOver={() => {
            dropdown.current.show();
          }}
          onMouseLeave={() => {
            dropdown.current.hide();
          }}
          id="profile-pic"
          src={profile}
        />

        {/* <SideBar ref={sideBar} /> */}
        <ProfileDropdown ref={dropdown} />
      </div>
    </div>
  );
};

export default Header;
