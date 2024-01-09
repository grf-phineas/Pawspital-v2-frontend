import React, { useState, useEffect } from "react";
import Header from "./Header"; // Adjust path as needed
import Footer from "./Footer";
import axios from "axios";
import "../Styles/styles_chatbot.css";
import { useAuth } from "../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function MainPage() {
  // State and functions to handle chat logic
  const { globalEmail } = useAuth();
  const [messages, setMessages] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/main");
        console.log("/main is called");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only when the component mounts

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newMessage = {
      text: currentText,
      department: null,
      time: new Date().toLocaleTimeString(),
      sender: "user",
    };
    setMessages([...messages, newMessage]);
    setCurrentText("");

    try {
      const response = await axios.post("/get", { msg: currentText });
      console.log(response.data);
      const botMessage = {
        text: response.data.reply,
        department: response.data.department,
        time: new Date().toLocaleTimeString(),
        sender: "bot",
      };
      setMessages([...messages, newMessage, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleDepartmentClick = async (department) => {
    try {
      const response = await axios.post("/suggestion", { department });
      let doctors = response.data.doctors;
      // Handle response
      navigate("/suggestion", { state: { doctors } });
      console.log(response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div>
      <Header globalEmail={globalEmail}>
        <h1 className="pt-5 px-5">Our AI Assistant</h1>
        <hr style={{ width: "50%", border: "1px solid blue" }} />
        <p className="pt-1 px-5 pb-2" style={{ fontSize: "20px" }}>
          Here is the AI assistant that guides you to solve your problem.
        </p>
        {/* Chat container and related components */}
        <div>
          <div className="container-fluid h-100">
            <div className="row justify-content-center h-100">
              <div className="col-md-12 col-lg-10 chat">
                <div className="card">
                  <div className="card-header msg_head">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="https://i.ibb.co/fSNP7Rz/icons8-chatgpt-512.png"
                          className="rounded-circle user_img"
                        />
                        <span className="online_icon"></span>
                      </div>
                      <div className="user_info">
                        <span>ChatBot</span>
                        <p>Ask me anything!</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-body msg_card_body">
                    {messages.map((msg, index) => (
                      <div
                        key={index}
                        className={`d-flex ${
                          msg.sender === "user"
                            ? "justify-content-end"
                            : "justify-content-start"
                        } mb-4`}
                      >
                        {msg.sender === "user" && (
                          <div className="msg_container_send">
                            {msg.text}
                            <span className="msg_time_send">{msg.time}</span>
                          </div>
                        )}
                        {msg.sender === "user" ? (
                          <div className="img_cont_msg">
                            <img
                              src="https://i.ibb.co/d5b84Xw/Untitled-design.png"
                              className="rounded-circle user_img_msg"
                            />
                          </div>
                        ) : (
                          <div>
                            <div className="img_cont_msg">
                              <img
                                src="https://i.ibb.co/fSNP7Rz/icons8-chatgpt-512.png"
                                className="rounded-circle user_img_msg"
                              />
                            </div>
                            <div className="msg_container">
                              {msg.text}
                              {msg.department && (
                                <a
                                  href="#"
                                  onClick={() =>
                                    handleDepartmentClick(msg.department)
                                  }
                                >
                                  {msg.department}
                                </a>
                              )}
                              <span className="msg_time">{msg.time}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="card-footer">
                    <form
                      id="messageArea"
                      className="input-group"
                      onSubmit={handleSubmit}
                    >
                      <input
                        type="text"
                        id="text"
                        name="msg"
                        placeholder="Type your message..."
                        autocomplete="off"
                        className="form-control type_msg"
                        value={currentText}
                        onChange={(e) => setCurrentText(e.target.value)}
                        required
                      />
                      <div className="input-group-append">
                        <button
                          type="submit"
                          id="send"
                          className="input-group-text send_btn"
                        >
                          <i className="fas fa-location-arrow"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Header>
      <Footer></Footer>
    </div>
  );
}

export default MainPage;
