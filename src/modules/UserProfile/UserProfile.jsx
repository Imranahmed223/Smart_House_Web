import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import "./UserProfile.scss";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import Sidebar from "../../components/Sidebar/Sidebar";

// Profi;e
import edit from "../../assets/edit.svg";
import profile from "../../assets/profile.svg";
// For Form validation
import { Formik, Form } from "formik";
import * as Yup from "yup";

const UserProfile = () => {
  const validate = Yup.object({
    d_name: Yup.string()
      .min(2, "Name must be 2 character")
      .max(20, "Must be 20 characters or less")
      .required("Name is Required"),
    office: Yup.string()
      .min(6, "Must be at least 2 charaters")
      .max(30, "Must be 30 character or less.")
      .required("Company name is Required"),
    email: Yup.string().email("Email is invalid").required("Email is Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .max(30, "Password is too long - should be 30 chars maximum."),

    contactnumber: Yup.number()
      .min(6, "Must be at least 6 charaters")
      .max(15, "Must be 15 character or less.")
      .required("Contact number is Required"),
    address: Yup.string()
      .min(5, "Must be at least 5 charaters")
      .max(50, "Must be 50 character or less.")
      .required("Address is Required"),
    city: Yup.string()
      .min(2, "Must be at least 2 charaters")
      .max(20, "Must be 20 character or less.")
      .required("City name is Required"),
    state: Yup.string()
      .min(2, "Must be at least 2 charaters")
      .max(20, "Must be 20 character or less.")
      .required("State is Required"),
    zipcode: Yup.string()
      .min(2, "Must be at least 2 charaters")
      .max(100, "Must be 100 character or less.")
      .required("Zip Code is Required"),
    country: Yup.string()
      .min(2, "Must be at least 2 charaters")
      .max(100, "Must be 100 character or less.")
      .required("Country name is Required"),
  });

  return (
    <>
      <div className="userprofile">
        <div className="userprofile-topbar">
          <Topbar />
        </div>
        <div className="userprofile-container">
          <div className="userprofile-container-sidebar">
            <Sidebar />
          </div>
          <div className="userprofile-container-userview">
            <div className="userprofile-container-userview-center">
              <div className="userprofile-container-userview-container">
                <div className="userprofile-container-userview-container-profile">
                  <div className="userprofile-container-userview-container-profile-image">
                    <img src={profile} alt="profile" />
                  </div>
                  <div className="userprofile-container-userview-container-profile-edit">
                    <img src={edit} alt="edit" />
                  </div>
                </div>
                <div className="userprofile-container-userview-container-info">
                  <h1>John Smith</h1>
                  <p>Executive Officer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="userprofile-container-form">
            <div className="userprofile-container-form-container">
              <Formik
                initialValues={{
                  d_name: "",
                  office: "",
                  email: "",
                  password: "",
                  contactnumber: "",
                  address: "",
                  city: "",
                  state: "",
                  zipcode: "",
                  country: "",
                }}
                validationSchema={validate}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {(formik) => (
                  <Form>
                    <div className="userprofile-container-form-container-flex">
                      <div className="userprofile-container-form-container-flex-left">
                        <FormInput
                          label="Display Name"
                          name="d_name"
                          type="text"
                          place="Enter your full name"
                        />
                      </div>
                      <div className="userprofile-container-form-container-flex-right">
                        <FormInput
                          label="Office"
                          name="office"
                          type="text"
                          place="Where do you work?"
                        />
                      </div>
                    </div>
                    <FormInput
                      label="Email"
                      name="email"
                      type="email"
                      place="Enter your Email"
                    />
                    <FormInput
                      label="Password"
                      name="password"
                      type="password"
                      place="Enter your Password"
                    />
                    <FormInput
                      label="Contact number"
                      name="contactnumber"
                      type="number"
                      place="Enter your Contact Number"
                    />
                    <FormInput
                      label="Address"
                      name="address"
                      type="text"
                      place="Enter your address"
                    />

                    <div className="userprofile-container-form-container-flex">
                      <div className="userprofile-container-form-container-flex-left">
                        <FormInput
                          label="City"
                          name="city"
                          type="text"
                          place="Which City are your from?"
                        />
                        <FormInput
                          label="State"
                          name="state"
                          type="text"
                          place="Which State are your from?"
                        />
                      </div>
                      <div className="userprofile-container-form-container-flex-right">
                        <FormInput
                          label="Zip Code"
                          name="zipcode"
                          type="text"
                          place="Enter your Zip Code"
                        />
                        <FormInput
                          label="Country"
                          name="country"
                          type="text"
                          place="Which Country are your from?"
                        />
                      </div>
                    </div>
                    <div className="changes-btn">
                      <center>
                        <Button text="Save Changes" />
                      </center>
                    </div>
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

export default UserProfile;

// <div className="userprofile-container-form-container">
//   <div className="userprofile-container-form-container-flex">
//     <div className="userprofile-container-form-container-flex-left"></div>
//     <div className="userprofile-container-form-container-flex-right"></div>
//   </div>
// </div>;
