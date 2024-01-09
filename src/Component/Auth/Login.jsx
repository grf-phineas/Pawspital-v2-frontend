import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import AuthLayout from "./AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [role, setRole] = useState("user"); // 新增状态来追踪角色
  const navigate = useNavigate();
  const { setGlobalEmail } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(role);
    const submitUrl = role === "doctor" ? "/doctor_login" : "/login";
    try {
      const response = await axios.post(submitUrl, {
        email,
        password,
        remember,
      });
      // handle successful login
      if (response.data.isAuthenticated) {
        // Use handleLogin here
        setGlobalEmail(email);
        // console.log({ isAuthenticated });
        // handleLogin updates the globalEmail state in context
        if (role === "user") {
          await axios.get("/main"); // Redirect to /main route
          navigate("/main"); // This navigates to MainPage in React
        }
      }
    } catch (error) {
      if (error.response) {
        // 设置后端返回的错误消息
        setErrorMessage(error.response.data.error || "An error occurred");
      }
    }
  };

  const handleRoleChange = (role) => {
    setRole(role);
    // Additional logic for role change
  };

  return (
    <AuthLayout onRoleChange={handleRoleChange} selectedRole={role}>
      <div>
        {errorMessage && (
          <div className="notification is-danger">{errorMessage}</div>
        )}
        <form id="myForm" onSubmit={handleSubmit}>
          <div className="inform">
            <label className="email">
              <input
                type="text"
                id="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label className="password flex">
              <input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          <div className="login_wrap">
            <ul className="flex jc-sb">
              <li className="join">
                <span>No account?</span>
                {/* 使用 React Router 的 Link 组件或 useNavigate 钩子进行页面跳转 */}
                <Link to="/signup">Sign up</Link>
              </li>
              <li className="login">
                <button type="submit">Login</button>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}

export default Login;
