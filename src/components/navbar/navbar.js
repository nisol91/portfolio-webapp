import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  // faFacebook,
  // faInstagram,
  // faTwitter,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

import logo from "../../img/logo_2.png";
import home from "../../img/chinese-house.svg";
import portfolio from "../../img/view.svg";
import contact from "../../img/letter.svg";
import skills from "../../img/settings.svg";
import about from "../../img/lego.svg";

import i18n from "../../i18n";
import { withNamespaces } from "react-i18next";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}
  render() {
    //i18n
    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };
    const { t } = this.props;

    return <div className="navbar"></div>;
  }
}
export default withNamespaces()(Navbar);
