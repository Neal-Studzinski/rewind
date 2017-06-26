import store from "./store.js";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppRoot from "./components/app_root.js";
import Welcome from "./components/welcome.js";
import Contact from "./components/contact.js";
import Jeopardy from "./components/game.js";
import Quiz from "./components/quiz.js";
import Editor from "./components/editor.js";

const Nav = () => (
  <nav>
    <li><Link to="/game">Jeopardy</Link></li>
    <li><Link to="/quiz">Quiz</Link></li>
    <li><Link to="/editor">MarkDown Editor</Link></li>

  </nav>
);

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={Welcome} />
          <Route exact path="/game" component={Jeopardy} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/editor" component={Editor} />
          
        </div>
      </Router>
    </Provider>,
    document.getElementById("app")
  );
}
