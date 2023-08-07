import SideBar from "../../components/Auth/SideBar";
import Header from "../../components/Auth/Header";
import "../../styles/MainContent.css";
import Content from "../../components/Auth/Content";
import Title from "../../components/Auth/Title";

const TotalUsers = () => {
  return (
    <div className="main-content">
      <SideBar />
      <div className="right">
        <Header />
        <Title title="Total Users" />
        <Content />
        <div>COPYRIGHT © 2022AMYC, All rights Reserved | SoftNet</div>
      </div>
    </div>
  );
};

export default TotalUsers;
