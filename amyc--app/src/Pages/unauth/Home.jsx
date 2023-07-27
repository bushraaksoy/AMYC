import Navbar from "../../components/unauth/Navbar";
import Banner from "../../components/unauth/Banner";
import Footer from "../../components/unauth/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <Banner />
      </div>
      <Footer />
    </>
  );
};

export default Home;
