import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { translate } from "react-i18next";
import scrollToComponent from "react-scroll-to-component";
import "./portfolio_sp.scss";
import Contact from "../contact/contact";
import Projects from "../projects/projects";
import Footer from "../footer/footer";
import About from "../about/about";
import Skills from "../skills/skills";

import firebase from "firebase";

//inizializzo firebase
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCW3XY0Dg3E27kaIFM4IfvITbl5pXyw3io",
  authDomain: "portfolio-f8a45.firebaseapp.com",
  databaseURL: "https://portfolio-f8a45.firebaseio.com",
  projectId: "portfolio-f8a45",
  storageBucket: "portfolio-f8a45.appspot.com",
  messagingSenderId: "267374463312",
  appId: "1:267374463312:web:bdcf27db9088ce82fb0455",
  measurementId: "G-1F4M1LF7NV"
});
const db = firebaseApp.firestore();
export { db };

class PortfolioSp extends Component {
  constructor(props) {
    super(props);
    this.addProject = this.addProject.bind(this);
    this.state = {
      cubeVisibility: false,
      toggleClass: true,
      scrollProjects: false,
      scrollContacts: false
    };
  }
  notify = () => toast("Scroll to zoom and drag to move!");

  //cosi controllo la durata del caricamento

  componentDidMount() {
    setTimeout(() => {
      this.setState({ cubeVisibility: true, toggleClass: false });
      this.notify();
    }, 1500);
    this.fetchProjects();
    window.addEventListener("scroll", this.handleScroll, true);
  }

  handleScroll = () => {
    if (window.scrollY > "100") {
      this.setState({ scrollProjects: true });
    }
    if (window.scrollY > "300") {
      this.setState({ scrollContacts: true });
    }
    console.log(window.scrollY);
  };
  async fetchProjects() {
    await db
      .collection("projects")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log("=========");
        console.log(data);
        console.log("=========");
      });
  }
  addProject() {
    console.log("inizio");

    db.collection("projects")
      .add({
        name: " projectLos Angeles",
        description: "bello"
      })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  }

  render() {
    //==handling css classes==
    // let className_1 = "boxPortfolio";
    // if (this.state.slide) {
    //   className_1 += " ";
    // }

    const { t } = this.props;

    return (
      <div className="boxPortfolioSp">
        <div className="boxHome">
          <h1 className="home1 text-flicker-in-glow">Hey</h1>
          <h1 className="home2 tracking-in-expand">{t("this_is_downhill")}</h1>
          <h1 className="home3 swing-in-top-fwd">{t("what_we_love")}</h1>
          <Link
            className="mylink"
            onClick={() => {
              this.setState({ scrollContacts: true });

              setTimeout(() => {
                scrollToComponent(this.contactRef, {
                  offset: 200,
                  align: "bottom",
                  duration: 1000
                });
              }, 100);
            }}
          >
            <div
              className={`myBtnContact ${this.state.toggleClass &&
                "swing-in-top-fwd"}`}
            >
              {t("contacts")}
            </div>
          </Link>
          <div
            onClick={this.addProject}
            className={`myBtnContact ${this.state.toggleClass &&
              "swing-in-top-fwd"}`}
          >
            add project
          </div>
        </div>

        <div>
          <div>
            <ToastContainer />
          </div>
        </div>
        {this.state.scrollProjects ? <Projects></Projects> : null}
        <About></About>
        <Skills></Skills>
        {this.state.scrollContacts ? (
          <Contact
            ref={section => {
              this.contactRef = section;
            }}
          ></Contact>
        ) : null}
        <Footer></Footer>
      </div>
    );
  }
}

export default translate()(PortfolioSp);
