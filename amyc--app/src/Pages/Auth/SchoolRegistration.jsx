import SideBar from "../../components/Auth/SideBar";
import Header from "../../components/Auth/Header";
import FileTracker from "../../components/Auth/FileTracker";
import Title from "../../components/Auth/Title";
import Content from "../../components/Auth/Content";
import "../../styles/MainContent.css";

const SchoolRegistration = () => {
  return (
    <>
      <Title title="School Management" btnContext="Add School" />
      <Content />
    </>
  );
};

export default SchoolRegistration;
