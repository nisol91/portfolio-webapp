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
import * as Scroll from "react-scroll";
import {
  Link as scrollLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import ScrollTrigger from "react-scroll-trigger";

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
      scrollContacts: false,
      toggleNav: false,
      skillsVisible: false,
      projectsVisible: false,
      aboutVisible: false,

      navItems: [
        { id: 1, name: "Home", ref: "home", offset: -30 },
        { id: 2, name: "Projects", ref: "projects", offset: -70 },
        { id: 3, name: "About", ref: "about", offset: -30 },
        { id: 4, name: "Skills", ref: "skills", offset: -70 },
        { id: 5, name: "Contact", ref: "contacts", offset: -30 }
      ]
    };
  }
  notify = () => toast("Hey, check out my projects");

  //cosi controllo la durata del caricamento

  componentDidMount() {
    setTimeout(() => {
      this.setState({ cubeVisibility: true, toggleClass: false });
      this.notify();
    }, 1500);
    this.fetchProjects();
    window.addEventListener("scroll", this.handleScroll, true);
    scrollSpy.update();
  }

  scrollTo(element, offset) {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: offset
    });
  }
  onEnterViewportAbout = () => {
    this.setState({
      aboutVisible: true
    });
    console.log(this.state.visible);
  };

  onExitViewportAbout = () => {
    this.setState({
      aboutVisible: false
    });
    console.log(this.state.visible);
  };
  onEnterViewportSkills = () => {
    this.setState({
      skillsVisible: true
    });
    console.log(this.state.visible);
  };

  onExitViewportSkills = () => {
    this.setState({
      skillsVisible: false
    });
    console.log(this.state.visible);
  };
  onEnterViewportProjects = () => {
    this.setState({
      projectsVisible: true
    });
    console.log(this.state.visible);
  };

  onExitViewportProjects = () => {
    this.setState({
      projectsVisible: false
    });
    console.log(this.state.visible);
  };

  handleScroll = () => {
    if (window.scrollY > "100") {
      this.setState({ scrollProjects: true });
    }
    if (window.scrollY > "300") {
      this.setState({ scrollContacts: true });
    }
    if (window.scrollY > "200") {
      this.setState({ toggleNav: true });
    }
    if (window.scrollY < "100") {
      this.setState({ toggleNav: false });
    }
    // console.log(window.scrollY);
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
    const { t } = this.props;

    return (
      <div className="boxPortfolioSp">
        <div
          className={`navbar ${this.state.toggleNav &&
            "fixedNav slide-in-top"}`}
        >
          {this.state.navItems.map((item, key) => (
            <div className="navItem" key={item.id}>
              <scrollLink
                className={`mylink ${this.state.skillsVisible &&
                  item.name === "Skills" &&
                  "active"} ${this.state.projectsVisible &&
                  item.name === "Projects" &&
                  "active"} ${this.state.aboutVisible &&
                  item.name === "About" &&
                  "active"}`}
                onClick={() => {
                  this.setState({ scrollContacts: true, scrollProjects: true });
                  setTimeout(() => {
                    this.scrollTo(item.ref, item.offset);
                  }, 300);
                }}
              >
                {item.name}
              </scrollLink>
            </div>
          ))}
        </div>

        <div className="boxHome">
          <h1 className="home1 text-flicker-in-glow">Hey</h1>
          <h1 className="home2 tracking-in-expand">{t("this_is_downhill")}</h1>
          <h1 className="home3 swing-in-top-fwd">{t("what_we_love")}</h1>
          <scrollLink
            className="mylink"
            onClick={() => {
              this.setState({ scrollContacts: true, scrollProjects: true });

              setTimeout(() => {
                this.scrollTo("contacts", 10);
              }, 300);
            }}
          >
            <div
              className={`myBtnContact ${this.state.toggleClass &&
                "swing-in-top-fwd"}`}
            >
              {t("contacts")}
            </div>
          </scrollLink>
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
        {this.state.scrollProjects ? (
          <div>
            <ScrollTrigger
              onEnter={this.onEnterViewportProjects}
              onExit={this.onExitViewportProjects}
            ></ScrollTrigger>
            <Element name="projects">
              <Projects id="projects"></Projects>
            </Element>
          </div>
        ) : null}
        <div>
          <ScrollTrigger
            onEnter={this.onEnterViewportAbout}
            onExit={this.onExitViewportAbout}
          ></ScrollTrigger>
          <Element name="about">
            <About id="about"></About>
          </Element>
        </div>
        <div>
          <ScrollTrigger
            onEnter={this.onEnterViewportSkills}
            onExit={this.onExitViewportSkills}
          ></ScrollTrigger>
          <Element name="skills">
            <Skills id="skills"></Skills>
          </Element>
        </div>

        {this.state.scrollContacts ? (
          <Element name="contacts">
            <Contact id="contact"></Contact>
          </Element>
        ) : null}
        <Footer></Footer>
      </div>
    );
  }
}

export default translate()(PortfolioSp);
