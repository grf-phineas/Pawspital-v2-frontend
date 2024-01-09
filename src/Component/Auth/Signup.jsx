import React, { useState, useEffect } from "react";
import AuthLayout from "./AuthLayout";
import { Link } from "react-router-dom";
import axios from "axios";
function SignUpForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 处理提交逻辑
    try {
      // 调用后端接口
      const response = await axios.post("/signup", {
        email,
        name,
        password,
        role,
      });
      // 成功后的操作，如跳转或提示
    } catch (error) {
      // 错误处理
      if (error.response) {
        setMessage(error.response.data.error || "An error occurred");
      }
    }
  };

  const handleRoleChange = (newRole) => {
    setRole(newRole);
    // 根据角色切换额外逻辑
  };

  useEffect(() => {
    const handleFocus = (event) => {
      const label = event.target.parentNode;
      label.classList.add("focussed");
    };

    const handleBlur = (event) => {
      const label = event.target.parentNode;
      label.classList.remove("focussed");
    };

    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      input.addEventListener("focus", handleFocus);
      input.addEventListener("blur", handleBlur);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", handleFocus);
        input.removeEventListener("blur", handleBlur);
      });
    };
  }, []);

  return (
    <AuthLayout onRoleChange={setRole}>
      <div>
        {message && <div className="notification is-danger">{message}</div>}
        <form onSubmit={handleSubmit}>
          <div className="inform">
            <label className="email">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="name flex">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="password flex">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <input type="hidden" value={role} />
          </div>
          <div className="login_wrap">
            <ul className="flex jc-sb">
              <li className="join">
                <span>Have an account?</span>
                <Link to="/login">Login</Link>
              </li>
              <li className="login">
                <button type="submit">Sign Up</button>
              </li>
            </ul>
          </div>
        </form>
        <button onClick={() => handleRoleChange("client")}>Client</button>
        <button onClick={() => handleRoleChange("doctor")}>Doctor</button>
      </div>
    </AuthLayout>
  );
}

export default SignUpForm;
