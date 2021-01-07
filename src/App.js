import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import styles, { keyframes } from "styled-components";

import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";
import Home from "./Components/Home";
import PostLists from "./Components/PostLists";
<<<<<<< HEAD
=======
import InputSection from "./Components/InputSection";

>>>>>>> 9766b54732a894815df6e44e28539544e9f724b7

const kf = keyframes`
  100% {
    opacity: 1;
  }
`;

const AppStyles = styles.div`
  opacity: 0;
  animation: ${kf} 0.5s ease-in-out forwards;

  a {                       
    &:hover {
      transform: scale(1.1);
      transition: all 0.4s ease-in-out;
    }
    transition: all 0.4s ease-in-out;
  }
`;

function App() {
  return (
    <div className="app__container">
      <Router>
        <div>
          <div className="image__container">
            <AppStyles>
              <nav className="navbar">
                <Link to="/">
                  <h1>Expat Journal</h1>
                </Link>
                <div className="navbar__links">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/signup">Sign Up</NavLink>
                  <NavLink to="/login">Log In</NavLink>
                  <li>
                    <Link to="/input-section">Add-or-Edit-a-Post</Link>
                  </li>
                </div>
              </nav>
              <div className="homepage__text">
                <h2>Welcome to Expat Journal!</h2>
                <p>
                  Expat Journal is an all-in-one app for those curious
                  travelers, bloggers, and photographers who want a way to
                  document their adventures, and share it with their friends.
                  Sign Up or Log In today!
                </p>
              </div>
            </AppStyles>
          </div>
          <Switch>
            <Route path="/posts">
              <PostLists />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/posts">
              <PostLists />
            </Route>
          </Switch>
          <Route path="/input-section" component={InputSection} />
          {/* <NotesSection /> */}
        </div>
      </Router>
      <footer className="footer">
        <div>Copyright &copy; Expat Journal 2021 </div>
      </footer>
    </div>
  );
}

export default App;
