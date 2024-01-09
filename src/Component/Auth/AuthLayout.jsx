import React from "react";
import "../../Styles/content.css"; // 确保 CSS 文件被正确引入
import "../../Styles/font.css";

function AuthLayout({ children, onRoleChange, selectedRole }) {
  const handleRoleClick = (role) => {
    // 调用从父组件传递的函数来更新角色
    onRoleChange(role);
  };
  return (
    <div className="container">
      <div class="cont_group">
        <div class="content">
          <h1>Choose Account Type</h1>
          <div class="block01">
            <ul>
              <li className={selectedRole === "doctor" ? "selected" : ""}>
                <a
                  href="#none"
                  id="Doctor"
                  onClick={() => handleRoleClick("doctor")}
                >
                  <div class="img">
                    <img src="/img/img_doctor.png" />
                  </div>
                  <span>Doctor</span>
                </a>
                <div class="txt doctor">
                  <p>Hello Doctor!</p>
                  <p>Plase fill out the form below to get started</p>
                </div>
                <div class="txt title">
                  <p>Hello there!</p>
                  <p>Please choose between docotor and patient</p>
                </div>
              </li>
              <li className={selectedRole === "user" ? "selected" : ""}>
                <a
                  href="#none"
                  id="user"
                  onClick={() => handleRoleClick("user")}
                >
                  <div class="img">
                    <img src="/img/img_user.png" />
                  </div>
                  <span>Patient</span>
                </a>
                <div class="txt user">
                  <p>Hello Patient!</p>
                  <p>Plase fill out the form below to get started</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="block02">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
