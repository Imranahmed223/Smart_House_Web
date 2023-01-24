import React, { useRef, useEffect,useState } from "react";
import "./Popup.scss";
import edit from "../../assets/edit.svg";
import editblue from "../../assets/edit-blue.svg";
// import profile from "../../assets/profile.svg";
import profile from "../../assets/profile.jpeg";
import {UpdateUser,clearErrors,clearMessages} from "./../../store/actions"
import { useDispatch,useSelector } from "react-redux";
import { Link, Navigate,useNavigate } from "react-router-dom";
import Profile from "./../../modules/UserProfile/UserProfile";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import toast, { Toaster } from "react-hot-toast";
import FormInput from "../FormInput/FormInput";
// For Form validation
import { Formik, Form } from "formik";
import * as Yup from "yup";
const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 25,
  height: 25,
  padding: ".6rem .6rem",
  right: "130%",
  top: "30%",
  marginTop: "-2.3rem",
  marginRight: ".4rem",
  cursor: "pointer",
}));

const Popup = () => {
  const dispatch = useDispatch()
  const ref = useRef();
  const imageRef = useRef();
  const navigate = useNavigate()
  const [updateImage,setUpdateImage] = useState("")
  const user = JSON.parse(localStorage.getItem("user"));

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

  
  useEffect(() => {
    ref.current.click();
  }, [ref]);


  const handleEditImage=()=>{
    imageRef.current.click()
  }
  const handleLogout = ()=>{
    localStorage.clear()
    navigate("/signin")
  }
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
      <div>
        <a href="#popup" ref={ref}></a>
      </div>
      <div className="popup" id="popup">
        <div className="popup__content">
          <div className="popup__container">
            <div className="popup__container-top">
              <div className="popup__container-top-cancel">
                <Link to="/dashboard" className="popup__close">
                  &times;
                </Link>
              </div>
              <div className="try">
                <Stack
                  className="try1"
                  direction="row"
                  spacing={2}
                  style={{ zIndex: 1 }}
                >
                  <input ref={imageRef} type="file" style={{ display: "none" }} onChange={(e)=>setUpdateImage(e.target.files[0])}/>
                  <Badge
                    className="mainAvatar"
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    badgeContent={
                      <SmallAvatar
                        className="tst"
                        alt="Edit Profile"
                        src={edit}
                        style={{ backgroundColor: "#3C5097" }}
                        onClick={()=>handleEditImage()}
                      />
                    }
                  >
                    <div
                      className="gandaName"
                      style={{
                        display: "flex",
                        padding: "1rem",
                        borderRadius: 60,
                        marginTop: "-6.5rem",
                        marginLeft: "2.5rem",
                      }}
                    >
                      <img crossOrigin="true" src={user?user.profilePicture:profile} alt="img" />
                    </div>
                  </Badge>
                </Stack>
              </div>
              <div className="popup__container-top-edit">
                <button className="popup__container-top-edit-btn1" onClick={()=>handleLogout()}>
                  Log Out
                </button>
              </div>
            </div>
            {/* <Profile/> */}
            <div className="popup__container-bottom ">
              <Formik
                initialValues={{
                  name: user.name,
                  userName: user.userName,
                  email: user.email,
                  password: user.password,
                  phone: user.phone,
                  buildingReference: user.buildingReference,
                  company: user.company,
                  position: user.position,
                  // zipcode: "5354",
                  // country: "Dubai",
                }}
                onSubmit={(values) => {
                  delete values.password
                  const updatedData = new FormData()
                  const {name,userName,email,phone,buildingReference,company,position} = values
                  updatedData.append("name",name)
                  updatedData.append("userName",userName)
                  updatedData.append("email",email)
                  updatedData.append("phone",phone)
                  updatedData.append("buildingReference",buildingReference)
                  updatedData.append("company",company)
                  updatedData.append("position",position)
                  updatedData.append("profilePicture",updateImage)
                  dispatch(UpdateUser(user.id,updatedData))
                  dispatch(clearMessages())
                  dispatch(clearErrors())
                }}
              >
                {(formik) => (
                  <Form>
                    <div className="popup__container-bottom-flex">
                      <div className="popup__container-bottom-flex-first">
                        <div className="popup__container-bottom-container">
                          <div className="popup__container-bottom-container-item">
                            <FormInput
                              label="Name"
                              name="name"
                              type="text"
                              place="Enter your full name"
                              color="white"
                              fill="field"
                            />
                          </div>
                          <div className="popup__container-bottom-container-item">
                            <FormInput
                              label="User Name"
                              name="userName"
                              type="text"
                              place="Where do you work?"
                              color="white"
                              fill="field"
                            />
                          </div>
                          <div className="popup__container-bottom-container-item">
                            <FormInput
                              label="Email"
                              name="email"
                              type="email"
                              place="Enter your Email"
                              color="white"
                              fill="field"
                            />
                          </div>
                          <div className="popup__container-bottom-container-item">
                            <FormInput
                              label="Password"
                              name="password"
                              type="password"
                              place="Enter your Password"
                              color="white"
                              fill="field"
                            />
                          </div>
                        </div>
                      </div>
                      {/* for Flex */}
                      <div className="popup__container-bottom-flex-second">
                        <div className="popup__container-bottom-container-item">
                          <FormInput
                            label="buildingReference"
                            name="buildingReference"
                            type="text"
                            place="Enter your address"
                            color="white"
                            fill="field"
                          />
                        </div>
                        <div className="popup__container-bottom-container-item">
                          <FormInput
                            label="company"
                            name="company"
                            type="text"
                            place="Which company are your from?"
                            color="white"
                            fill="field"
                          />
                        </div>
                        <div className="popup__container-bottom-container-item">
                          <FormInput
                            label="Phone No"
                            name="phone"
                            type="number"
                            place="Enter your Contact Number"
                            color="white"
                            fill="field"
                          />
                        </div>
                        <div className="popup__container-bottom-container-item">
                          <FormInput
                            label="Position"
                            name="position"
                            type="text"
                            place="Which Position are your from?"
                            color="white"
                            fill="field"
                          />
                        </div>
                      </div>
                    </div>
                    <center>
                      <button className="update-btn">Update</button>
                    </center>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
