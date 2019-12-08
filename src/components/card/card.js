import React, { Component } from "react";
import "./card.scss";
import { Link } from "react-router-dom";
import { Spinner } from "reactstrap";

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
      imageLoaded: false
    };
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }
  handleImageLoaded() {
    setTimeout(() => {
      this.setState({
        imageLoaded: true
      });
      console.log(this.state.imageLoaded);
    }, 0);
  }
  componentDidMount() {}

  render() {
    return (
      <div className="cardCont">
        <div className="imgContainer">
          <Link to={"/"} className="mylink">
            <div className="show">
              <h1 className="showText textCardColor">SHOW ME</h1>
            </div>
          </Link>
          {!this.state.imageLoaded && (
            <Spinner color="primary" className="imgSpinner" />
          )}
          <img
            src={this.props.datiPerCard.project_img}
            alt=""
            onLoad={this.handleImageLoaded}
          />
        </div>
        {/* <h1 className="cardFont">{this.props.datiPerCard.project_name}</h1> */}
        {/* <h1 className="cardFont">{this.props.datiPerCard.project_date}</h1> */}
        {/* <h1 className="cardFont"> */}
        {/* {this.props.datiPerCard.project_description} */}
        {/* </h1> */}
      </div>
    );
  }
}
