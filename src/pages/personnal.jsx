import React from "react";
import { Field, ErrorMessage } from "formik";

export default () => {
  return (
    <>
      <p>
        <label htmlFor="firstName">First name</label>
        <Field name="firstName" />
        <ErrorMessage name="firstName" />
      </p>
      <p>
        <label htmlFor="lastName">Last name</label>
        <Field name="lastName" />
        <ErrorMessage name="lastName" />
      </p>
    </>
  );
};
