import React from "react";
import Button from "./Button";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      eMail: "",
      phoneNum: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const vid5 =
      "https://ak6.picdn.net/shutterstock/videos/25144106/preview/stock-footage-downtown-los-angeles-at-night-aerial-k-los-angeles.webm";
    return (
      <div className="contact-wrapper">
        <div className="contact-banner-wrapper">
          <h1 className="contact-banner-title"> Get in touch with us!</h1>
          <video autoPlay loop className="contact-banner">
            <source src={vid5} />
          </video>
        </div>
        <form className="contact-form">
          <h4>Who would you like to connect with? </h4>
          <select className="form-select">
            <option>Eric</option>
            <option>Larry</option>
            <option>Ricardo</option>
            <option>John</option>
            <option>Dustin</option>
            <option>Everyone</option>
          </select>
          <br />
          <h4>First Name</h4>
          <input
            className="form-name"
            name="firstName"
            type="text"
            placeholder="First Name*"
          />
          <h4>Last Name</h4>
          <input
            className="form-name"
            name="lastName"
            type="text"
            placeholder="Last Name*"
          />
          <br />
          <h4>E-Mail Address</h4>
          <input
            className="form-email"
            name="eMail"
            type="text"
            placeholder="E-Mail*"
          />
          <br />
          <h4>Phone Number</h4>
          <input
            className="form-phone"
            name="phoneNum"
            type="text"
            placeholder="Phone"
          />
          <br />
          <h4>Message</h4>
          <br />
          <textarea
            className="form-msg"
            placeholder="What are you interested in?  We will get back to you ASAP."
          />
          <br />
          <br />
          <Button name="Send" />
        </form>
      </div>
    );
  }
}

export default Contact;
