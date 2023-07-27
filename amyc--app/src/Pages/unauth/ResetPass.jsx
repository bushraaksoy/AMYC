import ForgotPassword from "../../components/unauth/ForgotPassord";
import Navbar from "../../components/unauth/Navbar";
import LargeLogo from "../../components/unauth/LargeLogo";
import Footer from "../../components/unauth/Footer";

const ResetPass = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <LargeLogo />
        <ForgotPassword />
      </div>
      <Footer />
    </>
  );
};

export default ResetPass;
