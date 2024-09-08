import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import "../styles/Loginpage.css";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Form submission handler
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post("/users/login", values);
      setLoading(false);
      message.success("Login successful");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, password: "" })
      );
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("Something went wrong");
    }
  };

  // Prevent logged-in users from accessing the login page
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <div className="login-page">
        {loading && <Spinner />}
        <div className="row container">
          <h1>MoneyMap</h1>

          <div className="col-md-4 login-form">
            <Form layout="vertical" onFinish={submitHandler}>
              <h1>Login Form</h1>

              <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email address' }]}>
                <Input type="email" />
              </Form.Item>
              <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter your password' }]}>
                <Input type="password" />
              </Form.Item>
              <div className="d-flex justify-content-between">
                <Link to="/register">
                  Not a user? Click here to register!
                </Link>
                <button className="btn" type="submit">Login</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
