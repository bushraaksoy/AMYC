import SideBar from "../../components/Auth/SideBar";
import Header from "../../components/Auth/Header";
import "../../styles/MainContent.css";
import Title from "../../components/Auth/Title";
import Content from "../../components/Auth/Content";

const TotalExpenses = () => {
  return (
    <div className="main-content">
      <div className="left">
        <SideBar />
      </div>
      <div className="right">
        <Header />
        <Title title="Total Expenses" />
        <Content />
        <div>COPYRIGHT © 2022AMYC, All rights Reserved | SoftNet</div>
      </div>
    </div>
  );
};

export default TotalExpenses;
