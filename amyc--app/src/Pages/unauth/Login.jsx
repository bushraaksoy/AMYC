import LoginForm from "../../components/unauth/LoginForm";
import Navbar from "../../components/unauth/Navbar";
import LargeLogo from "../../components/unauth/LargeLogo";
import Footer from "../../components/unauth/Footer";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <LargeLogo />
        <LoginForm />
      </div>
      <Footer />
    </>
  );
};

export default Login;
