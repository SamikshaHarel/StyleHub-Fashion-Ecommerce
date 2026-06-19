import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import "../styles/Auth.css";

const AuthPage = () => {
  const [mode, setMode] = useState("login"); 
  // login | signup | otp | forgot

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const sendOtp = async () => {
  await fetch("http://localhost:8080/api/auth/send-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email })
  });

  setMode("otp");
};

const verifyOtp = async () => {
  const res = await fetch("http://localhost:8080/api/auth/verify-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, otp })
  });

  const data = await res.json();

  if (data.message.includes("success")) {
    alert("Account created!");
    setMode("login");
  } else {
    alert("Wrong OTP");
  }
};

  // LOGIN
  const handleLogin = async () => {

  try {

    const data = await loginUser(username, password);

    console.log(data);

    if (data.token) {

      localStorage.setItem("token", data.token);

      alert("Login Successful!");

      navigate("/");

    } else {

      alert(data.message);

    }

  } catch (error) {

    console.log(error);

    alert("Cannot connect to server");

  }

};
  

  return (
    <div className="auth-container">

      <div className="auth-box">

        <h1>StyleHub AI</h1>

        {/* LOGIN FORM */}
        {mode === "login" && (
          <>
            <h2>Login</h2>

            <input
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>Login</button>

            <p onClick={() => setMode("signup")}>Create account</p>
            <p onClick={() => setMode("forgot")}>Forgot Password?</p>
          </>
        )}

        {/* SIGNUP FORM */}
        {mode === "signup" && (
          <>
            <h2>Sign Up</h2>

            <input
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <select onChange={(e) => setCategory(e.target.value)}>
              <option>Select Fashion Industry</option>
              <option>Bollywood</option>
              <option>Hollywood</option>
              <option>K-POP</option>
              <option>Luxury Fashion</option>
            </select>

            <button onClick={sendOtp}>Send OTP</button>

            <p onClick={() => setMode("login")}>Back to Login</p>
          </>
        )}

        {/* OTP VERIFY FORM */}
        {mode === "otp" && (
          <>
            <h2>OTP Verification</h2>

            <p>Enter OTP sent to your email</p>

            <input
              placeholder="Enter OTP (use 1234)"
              onChange={(e) => setOtp(e.target.value)}
            />

            <button onClick={verifyOtp}>Verify & Create Account</button>
          </>
        )}

        {/* FORGOT PASSWORD */}
        {mode === "forgot" && (
          <>
            <h2>Forgot Password</h2>

            <input
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <button onClick={() => alert("Reset link sent (demo)")}>
              Send Reset Link
            </button>

            <p onClick={() => setMode("login")}>Back to Login</p>
          </>
        )}

      </div>
    </div>
  );
};

export default AuthPage;