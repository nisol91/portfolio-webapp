import React, { Component } from "react";
import Cube from "../cube";
import { translate } from "react-i18next";
import reactLogo from "../../img/react.svg";
import firebaseLogo from "../../img/firebase_logo.png";
import "./skills.scss";

// import axios from "axios";
// import { Spinner } from "reactstrap";

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cubeShow: false,
      stackItems: [
        { id: 1, name: "react", src: reactLogo },
        { id: 2, name: "firebase", src: firebaseLogo },
        { id: 5, name: "javascript", src: firebaseLogo },
        { id: 6, name: "dart", src: firebaseLogo },
        { id: 7, name: "flutter", src: firebaseLogo }
      ]
    };
  }
  animation() {
    setTimeout(() => {
      this.setState({
        cubeShow: true
      });
    }, 0);
  }
  componentDidMount() {
    this.animation();
  }
  render() {
    const { t } = this.props;

    return (
      <div className="boxSkills">
        <div className="skillssx">
          <h1 className="skills1 text-flicker-in-glow">{t("the_skillset")}</h1>
          <h1 className="skills2 tracking-in-expand">good at:</h1>
          <h1 className="skills3 swing-in-top-fwd">
            JavaScript, React, Dart, Flutter, Html, Css
          </h1>
        </div>
        <div className={`skillsdx fade-in ${this.state.cubeShow && "visible"}`}>
          <h1 className="skills2 tracking-in-expand">the stack:</h1>
          <div className="skillCardBox">
            {this.state.stackItems.map((item, key) => (
              <div className="card_skills" key={item.id}>
                <img class="logosSkills" src={item.src} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default translate()(Skills);
