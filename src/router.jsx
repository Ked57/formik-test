import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import Personnal from "./pages/personnal";
import Trainer from "./pages/trainer";

export default () => {
  const firstName = "Obiwan";
  const lastName = "Kenobi";
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/personnal">Personnal</Link>
          </li>
          <li>
            <Link to="/trainer">Trainer</Link>
          </li>
        </ul>

        <hr />
        <Formik
          initialValues={{
            firstName,
            lastName,
            question1: 0
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            lastName: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            question1: Yup.number().required("Required")
          })}
          onSubmit={(values, { setSubmitting }) => {
            console.log("values", values);
            setSubmitting(false);
          }}
        >
          <Form>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/personnal">
                <Personnal />
              </Route>
              <Route path="/trainer">
                <Trainer />
              </Route>
            </Switch>
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};
