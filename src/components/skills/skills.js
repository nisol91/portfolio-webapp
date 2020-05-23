import React, { Component } from "react";
import Cube from "../cube";
import { translate } from "react-i18next";
import reactLogo from "../../img/react.svg";
import firebaseLogo from "../../img/firebase_logo.png";
import htmlLogo from "../../img/html.png";
import cssLogo from "../../img/css.png";
import dartLogo from "../../img/dart.png";
import flutterLogo from "../../img/flutter.png";
import jsLogo from "../../img/js.png";
import phpLogo from "../../img/php.png";
import wpLogo from "../../img/wp.png";
import reactNativeLogo from "../../img/reactNative.png";
import goLogo from "../../img/goLogo.png";


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
        { id: 2, name: "firebase", src: reactNativeLogo },
        { id: 5, name: "js", src: jsLogo },
        { id: 6, name: "dart", src: dartLogo },
        { id: 6, name: "html", src: htmlLogo },
        { id: 6, name: "css", src: cssLogo },
        { id: 7, name: "flutter", src: flutterLogo },
        { id: 8, name: "php", src: phpLogo },
        { id: 9, name: "wp", src: wpLogo },
        { id: 10, name: "firebaseLogo", src: firebaseLogo },
        { id: 11, name: "goLogo", src: goLogo },

      ],
    };
  }
  animation() {
    setTimeout(() => {
      this.setState({
        cubeShow: true,
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
        <div className="skillssx hideSkills">
          <h1 className="skills2 tracking-in-expand">services:</h1>
          <ul>
            <li>
              <h1 className="skills3 swing-in-top-fwd">
                web or mobile app creation
              </h1>
            </li>
            <li>
              <h1 className="skills3 swing-in-top-fwd">
                web or mobile app advice
              </h1>
            </li>
            <li>
              <h1 className="skills3 swing-in-top-fwd">
                wordpress website or e-commerce
              </h1>
            </li>
          </ul>
        </div>
        <div className={`skillsdx fade-in ${this.state.cubeShow && "visible"}`}>
          <h1 className="skills2 tracking-in-expand">stack:</h1>
          <h1 className="skills4 swing-in-top-fwd">
            JavaScript[React, React Native, Vue, Angular], Dart[Flutter],
            Php[Wordpress, Laravel]
          </h1>
          <div className="skillCardBox">
            {this.state.stackItems.map((item, key) => (
              <React.Fragment key={key}>
                <div className="card_skills" key={item.id}>
                  <img className="logosSkills" src={item.src} alt="" />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default translate()(Skills);
