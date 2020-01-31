import React, { Component } from "react";
import "./project.scss";
import { Link } from "react-router-dom";
import { Spinner } from "reactstrap";
import { db } from "../portfolio_single_page/portfolio_sp";

export default class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
      imageLoaded: false,
      projectId: null,
      project: [],
      projectLenght: 0
    };
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.changeProj = this.changeProj.bind(this);
  }

  async fetchProjects(projID) {
    await db
      .collection("projects")
      .where("id", "==", projID)
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log("=====PROJECTS in project====");
        console.log(data[0].img);
        console.log("=====PROJECTS====");
        this.setState({ project: data[0] });
      });
  }
  async countProjects() {
    await db
      .collection("projects")
      .where("id", ">", "0")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log("=====QUANTI PROGETTI?====");
        console.log(data.length);
        this.setState({ projectLenght: data.length });
      });
  }
  handleImageLoaded() {
    setTimeout(() => {
      this.setState({
        imageLoaded: true
      });
      console.log(this.state.imageLoaded);
    }, 0);
  }
  changeProj() {
    console.log(this.state.projectId);

    setTimeout(() => {
      this.setProjId();
    }, 200);
  }
  setProjId() {
    const { projID } = this.props.match.params;
    this.setState({
      projectId: projID
    });
    this.fetchProjects(projID);
    console.log(projID);
  }
  componentDidMount() {
    this.setProjId();
    this.countProjects();
    console.log("====================================");
    // console.log(this.props.location.state);

    console.log("====================================");
  }

  render() {
    return (
      <div className="projCont">
        <Link
          to={{
            pathname: `/`
          }}
          className="mylink backBtn"
        ></Link>
        {this.state.projectId != 1 ? (
          <Link
            to={{
              pathname: `/project/${parseInt(this.state.projectId) - 1}`
            }}
            className="mylink arrowBtn"
            onClick={this.changeProj}
          ></Link>
        ) : null}
        <div className="titleProj">
          <h1>{this.state.project.name}</h1>
          <h3>{this.state.project.description}</h3>
        </div>
        <div className="imgContainer">
          {!this.state.imageLoaded && (
            <Spinner color="primary" className="imgSpinner" />
          )}
          <img
            src={this.state.project.img}
            alt=""
            onLoad={this.handleImageLoaded}
          />
        </div>
        {this.state.projectId <= this.state.projectLenght - 1 ? (
          <Link
            to={{
              pathname: `/project/${parseInt(this.state.projectId) + 1}`
            }}
            className="mylink arrowBtn"
            onClick={this.changeProj}
          ></Link>
        ) : null}
      </div>
    );
  }
}
