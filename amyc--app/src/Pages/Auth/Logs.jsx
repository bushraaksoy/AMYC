import SideBar from "../../components/Auth/SideBar";
import Header from "../../components/Auth/Header";
import "../../styles/MainContent.css";
import Title from "../../components/Auth/Title";
import Content from "../../components/Auth/Content";
import useFetch from "../../Hooks/useFetch";

const Logs = () => {
  return (
    <div className="main-content">
      <SideBar />
      <div className="right">
        <Header />
        {/* <FileTracker/> */}
        <Title title="System Logs" />
        <Content />
        <div>COPYRIGHT © 2022AMYC, All rights Reserved | SoftNet</div>
      </div>
    </div>
  );
};

export default Logs;
