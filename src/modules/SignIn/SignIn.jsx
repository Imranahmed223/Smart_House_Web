import React, { useEffect } from "react";
import "./SignIn.scss";
import Navbar from "../../components/Navbar/Navbar";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { Login, clearErrors, clearMessages } from "../../store/actions/index";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
// For Form validation
import { Formik, Form } from "formik";
import * as Yup from "yup";
const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, errors, loading } = useSelector(
    (state) => state.authReducer
  );

  useEffect(() => {
    if (errors.length > 0) {
      toast.error(errors);
      dispatch(clearErrors());
    }
    if (message != "") {
      toast.success(message);
      dispatch(clearMessages());
      setTimeout(() => navigate("/dashboard"), 2000);
    }
  }, [errors, message]);
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum."),
  });

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            fontSize: "14px",
            backgroundColor: "#3c5097",
            color: "white",
          },
        }}
      />
      <div className="signin">
        <div className="signin-container">
          <div className="signin-container-left">
            <div className="signin-container-left-content">
              <h1 className="signin-container-left-content-heading">
                Providing Information Technology and Audio Visual solutions
              </h1>
            </div>
          </div>
          <div className="signin-container-right">
            <div className="signin-container-right-navbar">
              <Navbar sign="In" value="true"/>
            </div>
            <div className="signin-container-right-form">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={validate}
                onSubmit={(values) => {
                  dispatch(Login(values));
                }}
              >
                {(formik) => (
                  <div>
                    <Form className="signin-container-right-form-signin">
                      <FormInput
                        label="Email"
                        name="email"
                        type="email"
                        place="Enter your email"
                      />
                      <FormInput
                        place="Enter your password"
                        label="Password"
                        name="password"
                        type="password"
                      />
                      <div className="signin-container-right-form-signin-checkbox">
                        <input type="checkbox" />
                        <p>Remember me</p>
                      </div>
                      <div className="signin-container-right-form-signin-btn">
                        <center>
                          <Button text="Sign In" />
                        </center>
                      </div>
                    </Form>
                  </div>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
