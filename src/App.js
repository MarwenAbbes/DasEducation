import React from "react";
import Main from "./Layout/HomePage/Main/Main";
import Heading from "./Layout/HomePage/Heading/Heading";
import ViewArticle from "./Layout/ViewArticle/ViewArticle";
import NewArticle from "./Layout/NewArticle/NewArticle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Heading />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>

          <Route path="/article/:id" exact>
            <ViewArticle />
          </Route>

          <Route path="/newArticle">
            <NewArticle />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
