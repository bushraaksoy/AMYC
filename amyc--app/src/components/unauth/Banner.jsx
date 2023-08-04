import banner from "../../images/quran1.jpg";
import "../../styles/Banner.css";

const Banner = () => {
  const goToDashboard = () => {
    window.location.pathname = "/dashboard";
  };

  return (
    <div className="banner">
      <h1>Welcome to Ansaar Muslim Youth Center Project</h1>
    </div>
  );
};

export default Banner;
