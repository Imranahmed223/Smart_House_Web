import React,{useState,useEffect} from "react";
import "./SignUp.scss";

import Navbar from "../../components/Navbar/Navbar";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import {Register,clearErrors,clearMessages} from "../../store/actions/index"
// For Form validation
import { Formik, Form } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [profilePicture,setProfilePicture] = useState('')
  const [checkBox,setCheckBox] = useState(false)

  
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
      setTimeout(() => navigate("/signin"), 2000);
    }
  }, [errors, message]);

  
  const validate = Yup.object({
    name: Yup.string()
      .min(3, "Name must be 3 character")
      .max(25, "Must be 25 characters or less")
      .required("Name is Required"),
    company: Yup.string()
      .min(1, "Must be at least 6 charaters")
      .max(100, "Must be 100 character or less.")
      .required("Company name is Required"),
    position: Yup.string()
      .min(1, "Must be at least 6 charaters")
      .max(100, "Must be 100 character or less.")
      .required("Position is Required"),
    userName: Yup.string()
      .min(1, "Must be at least 6 charaters")
      .max(100, "Must be 100 character or less.")
      .required("Username is Required"),
    phone: Yup.number()
      // .min(1, "Must be at least 6 charaters")
      // .max(100, "Must be 100 character or less.")
      .required("phone is Required"),
    buildingReference: Yup.string()
      .min(1, "Must be at least 6 charaters")
      .max(100, "Must be 100 character or less.")
      .required("buildingReference is Required"),
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
            backgroundColor:"#3c5097",
            color:"white",
          },
        }}
      />
      <div className="signup">
        <div className="signup-container">
          <div className="signup-container-left">
            <div className="signup-container-left-content">
              <h1 className="signup-container-left-content-heading">
                Providing Information Technology and Audio Visual solutions
              </h1>
            </div>
          </div>
          <div className="signup-container-right">
            <div className="signup-container-right-navbar">
              <Navbar sign="Up" />
            </div>
            <div className="signup-container-right-form">
              <Formik
                initialValues={{
                  name: "",
                  company: "",
                  position: "",
                  userName: "",
                  phone: "",
                  buildingReference: "",
                  email: "",
                  password: "",
                }}
                validationSchema={validate}
                onSubmit={(values) => {
                  // values['profilePicture'] =profilePicture
                  const {name,company,position,userName,phone,buildingReference,email,password} = values

                  const form = new FormData()
                  form.append('name',name)
                  form.append('company',company)
                  form.append('position',position)
                  form.append('userName',userName)
                  form.append('phone',phone)
                  form.append('buildingReference',buildingReference)
                  form.append('email',email)
                  form.append('password',password)
                  form.append('profilePicture',profilePicture)
                  if(checkBox === false){
                      toast.error("Please mark the check box");
                  }
                  else if(profilePicture === ""){
                    toast.error("Image Is Required");
                  }
                  else{
                    dispatch(Register(form))
                  }
                }}
              >
                {(formik) => (
                  <div>
                    <Form className="signup-container-right-form-signup">
                      <div className="signup-container-right-form-signup-flex">
                        <div className="signup-container-right-form-signup-flex-left">
                          <FormInput
                            label="Name"
                            name="name"
                            type="text"
                            place="Enter your full name"
                          />
                          <FormInput
                            place="Enter your company name"
                            label="Company"
                            name="company"
                            type="text"
                          />
                          <FormInput
                            place="Your position in the company"
                            label="Position"
                            name="position"
                            type="text"
                          />
                        </div>
                        <div className="signup-container-right-form-signup-flex-right">
                          <FormInput
                            label="UserName"
                            name="userName"
                            type="text"
                            place="Choose a username"
                          />
                          <FormInput
                            place="Enter you Contact number"
                            label="phone"
                            name="phone"
                            type="number"
                          />
                          <FormInput
                            place="Give us a reference"
                            label="buildingReference reference"
                            name="buildingReference"
                            type="text"
                          />
                        </div>
                      </div>
                      <FormInput
                        label="Email"
                        name="email"
                        type="email"
                        place="Enter your email"
                      />
                      <FormInput
                        place="Upto 8 Character"
                        label="Password"
                        name="password"
                        type="password"
                      />
                      <input type="file" onChange={(e)=>setProfilePicture(e.target.files[0])}/>
                      <div className="signup-container-right-form-signup-checkbox">
                        <input type="checkbox" onChange={()=>setCheckBox(true)}/>
                        <p>
                          Creating an account means you’re okay with our Terms
                          of Service, Privacy Policy, and our default
                          Notification Settings.
                        </p>
                      </div>
                      <div className="signup-container-right-form-signup-btn">
                        <center>
                          <Button text="Create Account" />
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

export default SignUp;
