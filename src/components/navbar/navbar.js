import React, { Component } from "react";
import "./navbar.scss";
import i18n from "../../i18n";
import { withNamespaces } from "react-i18next";

// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight, faBars } from "@fortawesome/free-solid-svg-icons";

// import logo from "../../img/logo_2.png";
// import home from "../../img/chinese-house.svg";
// import portfolio from "../../img/view.svg";
// import contact from "../../img/letter.svg";
// import skills from "../../img/settings.svg";
// import about from "../../img/lego.svg";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleNav: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }

  handleScroll = () => {
    if (window.scrollY > "200") {
      this.setState({ toggleNav: true });
    }
    if (window.scrollY < "100") {
      this.setState({ toggleNav: false });
    }
  };

  render() {
    //i18n
    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };
    const { t } = this.props;

    return (
      <div
        className={`navbar ${this.state.toggleNav && "fixedNav slide-in-top"}`}
      >
        {" "}
      </div>
    );
  }
}
export default withNamespaces()(Navbar);
