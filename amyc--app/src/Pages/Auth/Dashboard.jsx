import SideBar from "../../components/Auth/SideBar";
import Header from "../../components/Auth/Header";
import Statistics from "../../components/Auth/Statistics";
import Expenses from "../../components/Auth/Expenses";
import RevenueReport from "../../components/Auth/RevenueReport";
import Footer from "../../components/unauth/Footer";
import "../../styles/MainContent.css";

const Dashboard = () => {
  return (
    <>
      <div className="dash-content">
        <Statistics />
        <div className="expenses-sect">
          <Expenses />
          <RevenueReport />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
