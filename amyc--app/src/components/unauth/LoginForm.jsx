import "../../styles/LoginForm.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { LoginContext } from "../../Context/LoginContext";
import { toast } from "react-toastify";
import useFetch from "../../Hooks/useFetch";
import useToast from "../../Hooks/useToast";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {
    data: users,
    pending,
    error,
  } = useFetch("http://localhost:3001/users");
  const { setIsAuth } = useContext(LoginContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" && password === "") {
      useToast("Username and Password are required", "error");
    } else if (username === "") {
      useToast("Username is Required!", "error");
    } else if (password === "") {
      useToast("Password is Required!", "error");
    }

    const authUser = users.find(
      (user) => user.email === username && user.password === password
    );
    if (authUser) {
      setIsAuth(true);
      useToast("Logged in Successfully", "success");
      navigate("/dashboard");
    } else if (username !== "" && password !== "") {
      toast.error("Invalid Username or Password!", {
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const submitBtn = useRef();

  const handleKeydown = (e) => {
    if (e.keyCode == 13) {
      submitBtn.current.click();
    }
  };

  return (
    <div className="login">
      <div className="form-title">
        <h1>Welcome to AMYC 👋</h1>
        <div>
          Don't have an account, <a className="sign-up-link">Sign up</a>
        </div>
      </div>

      <form className="form" action="/login" method="post">
        <label htmlFor="username">
          Email:
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="username"
            name="username"
            value={username}
            placeholder="Enter your username"
            required
            onKeyDown={handleKeydown}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            onKeyDown={handleKeydown}
          />
        </label>

        <button
          ref={submitBtn}
          onKeyDown={handleKeydown}
          onClick={handleSubmit}
          type="button"
        >
          Login
        </button>
      </form>

      <Link to="/forgot-password" className="last forgot-password">
        Forgot Password?
      </Link>
      <>{pending && <p>Loading...</p>}</>
      <>{error && <p>error</p>}</>
    </div>
  );
};

export default LoginForm;
