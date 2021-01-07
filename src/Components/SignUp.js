import React, { useState, useEffect} from "react";
import schema from "../formSchema";
import axios from "axios";
import * as yup from "yup";
import "./SignUp.css";
import Button from "@material-ui/core/Button";

const initialFormValues = {
  username: "", 
  primaryemail: "",
  password: "",
};
const initialFormErrors = {
  username: "",
  primaryemail: "",
  password: ""
};
const initialUsers = [];
const initialDisabled = true;

export default function SignUpForm() {
  const [users, setUsers] = useState(initialUsers); 
  const [formValues, setFormValues] = useState(initialFormValues); 
  const [formErrors, setFormErrors] = useState(initialFormErrors); 
  const [disabled, setDisabled] = useState(initialDisabled); 

  const postNewUser = (newUser) => {
    axios
      .post("https://dtebo-expatbackend.herokuapp.com/createnewuser", newUser)
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
      .reach(schema, name) 
      .validate(value) 
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value, 
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
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  const onSubmit = (evt) => {
    evt.preventDefault();
    formSubmit();
  };

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUSe = type === "checkbox" ? checked : value;
    inputChange(name, valueToUSe);
  };

  return (
    <form className="form__container" onSubmit={onSubmit}>
      <div className="formgroup__submit">
        <h2>New User</h2>
        <div className="errors">
          <div>{formErrors.name}</div>
          <div>{formErrors.email}</div>
          <div>{formErrors.password}</div>
          <div>{formErrors.termsOfService}</div>
        </div>
      </div>

      <div className="formgroup__inputs">
        <h4>Add Your Information:</h4>
        <label className="labels">
          Username:
          <input
            value={formValues.username}
            onChange={onChange}
            name="username"
            type="text"
          />
        </label>
        <label className="labels">
          Email:
          <input
            value={formValues.primaryemail}
            onChange={onChange}
            name="primaryemail"
            type="email"
          />
        </label>
        <label className="special__labels">
          Password:
          <input
            value={formValues.password}
            onChange={onChange}
            name="password"
            type="text"
          />
        </label>
      </div>
      <Button type="submit" variant="contained" disabled={disabled} color="secondary">Sign Up</Button>
    </form>
  );
}

