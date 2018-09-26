import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppUS from './AppUS';
import App from './App';
import AddProject from './Components/AddProjects';
import Chart from './Components/bar';
import { posix } from "path";

const BasicExample = () => (
  <Router>
        <div className="wrapper" >
            <nav className="main-nav">
            <a className="navbar-brand" href=""><h1>NG-AMS-DASHBOARD</h1></a>
                <ul>
                    <li>
                        <Link to="/home">NG-UK-AMS</Link>
                    </li>
                    <li>
                        <Link to="/nguspmo">NG-US-AMS</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>

                </ul>
                </nav>

                <Route exact path="/home" component={App} />
                <Route path="/about" component={About} />
                <Route path="/nguspmo" component={AppUS} />
            
            <footer>
                <p> &copy; NG-PMO  2018</p>
            </footer> 
           
        </div>
  </Router>
);



const About = () => (
  <div>
    <h2>About</h2>
  </div>
);


export default BasicExample;