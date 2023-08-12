import React from "react";
import background1 from "./img/background.jpg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  AppBar
} from "./components";
import {
  Home,
  Services,
  Report,
  
} from "./pages";
import { PDFViewer } from '@react-pdf/renderer';

export default function App() {
  return (
    <Router>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      {/* <div  style={{ backgroundImage: `url(${background1})` }}> */}
      <div style={{ backgroundColor: '#fafafa' }}>  
        <AppBar>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/dr-dashboard/Home">
            <Home />
          </Route>
          <Route path="/dr-dashboard/services">
            <Services />
          </Route>
                  <Route path="/dr-dashboard/Report/:runId">
            {/* <PDFViewer> */}
            <Report />
            {/* </PDFViewer> */}
          </Route>
          <Route path="/Execution">
            
          </Route>
          <Route path="/SendEmail">
            <SendEmail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AppBar>
      </div>
    </Router>
  );
}

function Inbox() {
  return <h2>Inbox</h2>;
}

// function Report() {
//   return <h2>Starred</h2>;
// }

function Drafts() {
  return <h2>Drafts</h2>;
}

function SendEmail() {
  return <h2>SendEmail</h2>;
}