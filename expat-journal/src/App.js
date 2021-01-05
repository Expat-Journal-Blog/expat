import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";
import Home from "./Components/Home";
import NotesSection from './Components/NotesSection';
import PostLists from './Components/PostLists';
import InputSection from './Components/InputSection';

function App() {
  return (
    <Router>
    <div className="app__container">
        <div>
          <div className="image__container">
            <nav className="navbar">
              <Link to="/"><h1>Expat Journal</h1></Link>
              <div className="navbar__links">
                  <Link to="/">Home</Link>
                  <Link to="/signup">Sign Up</Link>
                  <Link to="/login">Log In</Link>
              </div>
            </nav>
            <div className="homepage__text">
              <h2>Welcome to Expat Journal!</h2>
              <p>Expat Journal is an all-in-one app for those curious travelers, bloggers, and photographers who want a way to document their adventures, and share it with their friends. Sign Up or Log In today!</p>
            </div>
          </div>
          <Switch>
            <Route path="/signup">
              <SignUp/>
            </Route>
            <Route path="/login">
              <LogIn/>
            </Route>
            <Route path="/">
              <Home />
              <NotesSection />
              <PostLists />
              <InputSection />
            </Route>
          </Switch>
        </div>
      <footer className="footer">
          <div>Copyright &copy; Expat Journal 2021 </div>
      </footer>
    </div>
    </Router>
  );
}

export default App;
