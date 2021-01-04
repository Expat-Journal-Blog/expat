import React, { useState, useEffect } from "react";
import './App.css';
import schema from "./formSchema";
import axios from "axios";
// import { axiosWithAuth } from "./axiosWithAuth";
import * as yup from "yup";
import LoginForm from "./LoginForm";
// import NewUser from "./NewUser";

const initialFormValues = {
  username: "", // Text Inputs
  primaryemail: "",
  password: "",
};
const initialFormErrors = {
  name: "",
  email: "",
  password: ""
};
const initialUsers = [];
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers); // array of objects
  const [formValues, setFormValues] = useState(initialFormValues); // object
  const [formErrors, setFormErrors] = useState(initialFormErrors); // object
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewUser = (newUser) => {
    axios
      .post("http://dtebo-expatbackend.herokuapp.com/createnewuser", newUser)
      .then((res) => {
        console.log(res);
        setUsers([res, ...users]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
        debugger;
      });
  };

  const inputChange = (name, value) => {
    yup
      .reach(schema, name) // get to this part of the schema
      //we can then run validate using the value
      .validate(value) // validate this value
      .then(() => {
        // happy path and clear the error
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      // if the validation is unsuccessful, we can set the error message to the message
      // returned from yup (that we created in our schema)
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          // validation error from schema
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value, // NOT AN ARRAY
    });
  };

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      primaryemail: formValues.primaryemail.trim(),
      password: formValues.password.trim(),
    };
    postNewUser(newUser);
  };

  useEffect(() => {
    // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="app__container">
      <header>
        <h1>Sign Up</h1>
      </header>
      <LoginForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {/* {users.map((user) => {
        return <NewUser key={user.id} details={user} />;
      })} */}

    </div>
  );
}

export default App;
