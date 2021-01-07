import React, { useEffect, useState } from "react";
import * as yup from "yup";
import schema from "../validation/loginSchema"
import axios from 'axios'
import {axiosWithAuth} from '../utils/axiosWithAuth'

const initialFormValues = {
  username: "",
  password: "",
}

const initialFormErrors = {
  username: "",
  password: "",
}

export default function LogIn() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [users, setUsers] = useState([{
    username: "",
    password: "",
  }]);

  const [disabled, setDisabled] = useState(true)

  const postNewUser = (newUser) => {
    axiosWithAuth()
      .post("/login", `grant_type=password&username=${newUser.username}&password=${newUser.password}`, {
        headers: {
          // btoa is converting our client id/client secret into base64
          Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        }
      })
      .then((res) => {
        localStorage.setItem("token", res.data.access_token)
        console.log(res.data)
        
        setFormValues(initialFormValues)
      })
      .catch((err) => {
        console.log(err);
      });

      axiosWithAuth()
        .get("/users/users")
        .then((res) => {
          setUsers([...users, res.data]);
        });
  };
  const formSubmit = () => {
    const newUser = {
      username: formValues.username,
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
          <div>{formErrors.password}</div>
        </div>
      </form>
      
    </div>
  )
}