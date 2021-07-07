import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/login/Login";
import Registration from "./components/Registration/Registration";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {user && user._id ? (
              <Homepage setLoginUser={setLoginUser} />
            ) : (
              <Login setLoginUser={setLoginUser} />
            )}
          </Route>
          <Route exact path="/register">
            <Registration />
          </Route>
          <Route exact path="/login">
            <Login setLoginUser={setLoginUser} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
