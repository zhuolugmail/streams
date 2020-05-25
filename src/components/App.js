import React from "react";
import "./App.css";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history";

function App() {
  return (
    <div className="App ui container">
      <Router history={history}>
        <Header className="header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </Header>
        <Switch>
          <Route path="/" exact component={StreamList}></Route>
          <Route path="/streams/new" exact component={StreamCreate}></Route>
          <Route path="/streams/edit/:id" exact component={StreamEdit}></Route>
          <Route path="/streams/delete/:id" component={StreamDelete}></Route>
          <Route path="/streams/:id" exact component={StreamShow}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
