import "./App.css";
import Counter from "./components/Counter";
import Hello from "./components/Hello";
import InputState from "./components/InputState";
import User from "./components/User";
import Employe from "./components/Employe";

import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Student from "./components/Student";
import StateExample from "./components/StateExample";
import StudentDetail from "./components/StudentDetail";
import Topics from "./components/Topics";
import Error from "./components/Error";
import FormExample from "./components/FormExample";
import { ThemeProvider } from "./context/ThemeContext";
import Container from "./components/Container";
import { UserProvider } from "./context/UserContext";

function App() {
  useEffect(() => {
    console.log("state güncellendi");
  });
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Hello </Link>
              </li>
              <li>
                <Link to="/employe">Employe</Link>
              </li>
              <li>
                <Link to="/counter">Counter</Link>
              </li>
              <li>
                <Link to="/student">Student</Link>
              </li>
              <li>
                <Link to="/user">Props Örnek</Link>
              </li>
              <li>
                <Link to="/stateExample">State Örnek</Link>
              </li>
              <li>
                <Link to="/inputState">input State</Link>
              </li>
              <li>
                <Link to="/topics">Topic</Link>
              </li>
              <li>
                <Link to="/form-example">Form Example</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact component={Hello} />
            <Route path="/employe" component={Employe} />
            <Route path="/counter" component={Counter} />
            <Route path="/user">
              <User
                name="deneme"
                isLogged={true}
                friends={["ali", "ayşe", "mehmet"]}
              />
            </Route>
            <Route path="/inputState" component={InputState} />
            <Route path="/stateExample" component={StateExample} />
            <Route path="/student" component={Student} />
            <Route path="/studentDetail/:id" component={StudentDetail} />
            <Route path="/topics">
              <Topics />
            </Route>
            <Route path="/form-example" component={FormExample} />

            <Route path="*" component={Error} />
          </Switch>
        </div>
      </Router>

      <ThemeProvider>
        <UserProvider>
          <Container />
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
