import React, { Component } from "react";
import axios from "axios";
import Card from "../card/card";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./portfolio.scss";
import { translate } from "react-i18next";
import expressLogo from "../../img/express.png";
import mongodbLogo from "../../img/mongodb.png";
import reactLogo from "../../img/react.svg";

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: "",
      project: [],
      doggos: [],

      projectsVisibility: false,
      barDidMount: false,
      contentDidMount: false,
      bar: 0
    };
  }
  async getDoggos() {
    const response = await fetch(
      "https://test-87a0f.firebaseapp.com/api/v1/doggos",

      {
        headers: {
          // "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }
    );
    console.log(await response.json());
  }
  // getDoggos() {
  //   axios
  //     // .get(`${process.env.REACT_APP_GET_PROJECTS}`)
  //     .get("https://test-87a0f.firebaseapp.com/api/v1/doggos", {
  //       headers: {
  //         "Access-Control-Allow-Origin": "http://localhost:3000",
  //         "Content-Type": "application/json"
  //       },
  //       data: {}
  //     })

  //     .then(response => {
  //       this.setState({ doggos: response.data });
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  //   //cosi controllo la durata del caricamento
  //   setTimeout(() => {
  //     this.setState({
  //       projectsVisibility: true
  //     });
  //     console.log(this.state.doggos);
  //   }, 3000);
  // }
  getProjects() {
    axios
      // .get(`${process.env.REACT_APP_GET_PROJECTS}`)
      .get("https://nicola-portfolio-api-2.herokuapp.com/project")

      .then(response => {
        this.setState({ project: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
    //cosi controllo la durata del caricamento
    setTimeout(() => {
      this.setState({
        projectsVisibility: true
      });
      console.log(this.state.project);
    }, 3000);
  }
  animation() {
    setTimeout(() => {
      this.setState({
        barDidMount: true
      });
    }, 0);
  }
  progress() {
    let progresso = setInterval(() => {
      let val = this.state.bar + 10;
      this.setState({
        bar: val
      });
      if (this.state.bar >= 100) {
        clearInterval(progresso);
      }
    }, 200);
  }
  componentDidMount() {
    this.getProjects();
    this.getDoggos();
    // console.log(this.state.doggos);

    this.animation();
    this.progress();
  }
  render() {
    //==handling css classes==
    // let className_1 = "boxPortfolio";
    // if (this.state.slide) {
    //   className_1 += " ";
    // }
    // let className_2 = "";
    // if (this.state.slide) {
    //   className_2 += " ";
    // }
    //
    const { t } = this.props;

    return (
      <div className={`fade-in ${this.state.barDidMount && "visible"}`}>
        {this.state.projectsVisibility === false && (
          <ProgressBar now={this.state.bar} />
        )}
        <div
          className={`boxPortfolio fade-in ${this.state.barDidMount &&
            "visible"}`}
        >
          <div
            className={`textPortfolio slide-in-tr ${this.state
              .projectsVisibility && "visible"}`}
          >
            <h1 className="port1">{t("the_work")}</h1>
            <h1 className="port2">Check it out</h1>
            <h3 className="port3">
              And visit my
              <a href="https://github.com/nisol91?tab=repositories"> GitHub </a>
              page
            </h3>

            <h3 className="port4">This webapp was made with:</h3>
            <div className="logportBox">
              <img class="logosPortfolio" src={reactLogo} alt="" />
              <img class="logosPortfolio" src={mongodbLogo} alt="" />
              <img class="logosPortfolio" src={expressLogo} alt="" />
            </div>
          </div>
          <div
            className={`works fade-in ${this.state.projectsVisibility &&
              "visible"}`}
          >
            {this.state.project.map(object => (
              <div
                key={object._id}
                className={`fade-in ${this.state.projectsVisibility &&
                  "visible"}`}
              >
                <Card datiPerCard={object} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default translate()(Portfolio);
