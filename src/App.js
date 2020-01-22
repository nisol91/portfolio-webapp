import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { translate } from "react-i18next";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(process.env.REACT_APP_VAR);
    console.log(process.env.REACT_APP_GET_PROJECTS);

    return (
      <I18nextProvider i18n={i18n}>
        <Router>
          <div className="contenitore">
            <div className="main" onClick={this.hideNav}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact-me" component={Contact} />
            </div>
          </div>
        </Router>
      </I18nextProvider>
    );
  }
}

export default translate("common")(App);

//qui dentro si trovano la navbar e il router con le transizioni
