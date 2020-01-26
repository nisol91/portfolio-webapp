import React, { Component } from "react";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";
import "./contact.scss";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import { translate } from "react-i18next";

const API_PATH = "http://localhost:4040/form/add";
const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1Ijoibmlzb2w5MSIsImEiOiJjazBjaWRvbTIwMWpmM2hvMDhlYWhhZGV0In0.wyRaVw6FXdw6g3wp3t9FNQ"
});

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      mailSent: false,
      error: null,
      formVisibility: true,
      visible: false,
      formShowEnter: true,
      mapVisibility: true
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${API_PATH}`,
      headers: { "content-type": "application/json" },
      data: this.state
    })
      .then(result => {
        this.setState({
          name: "",
          email: "",
          message: "",
          formVisibility: false,
          mapVisibility: false
        });

        this.onDismiss = this.onDismiss.bind(this);
      })
      .catch(error => this.setState({ error: error.message }));

    setTimeout(() => {
      this.setState({
        mailSent: true,
        formVisibility: true,
        visible: true,
        mapVisibility: true
      });
    }, 1000);
  };
  onDismiss() {
    this.setState({ visible: false });
  }
  componentDidMount() {}
  render() {
    const { t } = this.props;

    return (
      <div className="contact">
        <h1 className="contact2 tracking-in-expand">Stay in touch</h1>

        <h1 className="contact2 tracking-in-expand">inlandsis871@gmail.com</h1>
      </div>
    );
  }
}
// export default Contact;
export default translate()(Contact);
