import React, { useEffect, useState } from "react";
import * as yup from "yup";
import schema from "../validation/loginSchema"
import axios from "axios"

const initialFormValues = {
  username: "",
  primaryemail: "",
  password: "",
}

const initialFormErrors = {
  username: "",
  primaryemail: "",
  password: "",
}

export default function LogIn() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [users, setUsers] = useState([])
  const [disabled, setDisabled] = useState(true)

  const postNewUser = (newUser) => {
    axios
      .post("http://dtebo-expatbakend.herokuapp.com/login", newUser)
      // ^^the above link is incorrect not allowing it to post.
      .then((res) => {
        setUsers([res.data, ...users])
        setFormValues(initialFormValues)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const formSubmit = () => {
    const newUser = {
      username: formValues.username,
      primaryemail: formValues.primaryemail,
      password: formValues.password
    };
    postNewUser(newUser);
  };
  const submit = (e) => {
    e.preventDefault();
    formSubmit()
  }
  
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
      ...formValues, [name]: value,
    });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    inputChange(name, value)
  };
  
  

useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div>
      <form>
        <h2>Login</h2>

        <label>
          Username
           <input
            name="username"
            type="text"
            onChange={onChange}
            value={formValues.username} />
        </label>
        <label>
          Email
           <input
            name="primaryemail"
            type="text"
            onChange={onChange}
            value={formValues.primaryemail} />
        </label>
        <label>
          Password
           <input
            name="password"
            type="password"
            onChange={onChange}
            value={formValues.password} />
        </label>
        
        <input
          className="submitButton"
          type="submit"
          name="submit"
          value="Submit"
          onClick={submit}
          disabled={disabled} />
        
        <div className="errors">
          <div>{formErrors.username}</div>
          <div>{formErrors.primaryemail}</div>
          <div>{formErrors.password}</div>
        </div>
      </form>
      
    </div>
  )
}