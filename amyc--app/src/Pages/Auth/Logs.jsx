import SideBar from "../../components/Auth/SideBar";
import Header from "../../components/Auth/Header";
import "../../styles/MainContent.css";
import Title from "../../components/Auth/Title";
import Content from "../../components/Auth/Content";
import useFetch from "../../Hooks/useFetch";

const Logs = () => {
  return (
    <>
      <Title title="System Logs" />
      <Content />
    </>
  );
};

export default Logs;
