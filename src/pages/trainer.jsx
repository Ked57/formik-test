import React from "react";
import { Field, ErrorMessage } from "formik";

export default () => {
  return (
    <>
      <label htmlFor="question1">Question 1</label>
      <Field name="question1" as="select">
        <option value="">Please select a value</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Field>
      <ErrorMessage name="question1" />
    </>
  );
};
