import React from "react";
import "./FormInput.scss";
import { ErrorMessage, useField } from "formik";
const FormInput = ({ label, color, fill, place, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={field.name} className={`form-label ${color}`}>
        {label}
      </label>
      <input
        placeholder={place}
        type="text"
        className={`form-input ${
          meta.touched && meta.error && "is-invalid"
        } ${fill}`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="form-error" />
    </>
  );
};

export default FormInput;
