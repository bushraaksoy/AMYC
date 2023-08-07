import SideBar from "../../components/Auth/SideBar";
import Header from "../../components/Auth/Header";
import FileTracker from "../../components/Auth/FileTracker";
import Title from "../../components/Auth/Title";
import Content from "../../components/Auth/Content";

import "../../styles/MainContent.css";

const MasjidManagement = () => {
  return (
    <div className="main-content">
      <SideBar />
      <div className="right">
        <Header />
        {/* <FileTracker/> */}
        <Title title="Masjid Management" btnContext="Add Masjid" />
        <Content />
        <div>COPYRIGHT © 2022AMYC, All rights Reserved | SoftNet</div>
      </div>
    </div>
  );
};

export default MasjidManagement;
