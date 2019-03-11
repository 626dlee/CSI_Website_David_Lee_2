import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
class Showroom extends React.Component {
  constructor() {
    super();
    this.state = {
      pos1: 0,
      pos2: 1,
      pos3: 2
    };
    this.handleClick = this.handleClick.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        pos1: (prevState.pos1 + 1) % 3,
        pos2: (prevState.pos2 + 1) % 3,
        pos3: (prevState.pos3 + 1) % 3
      };
    });

    // console.log(this.state);
  }

  buttonClicked() {
    console.log("button clicked!!!!");
  }

  render() {
    const name1 = "rotate" + this.state.pos1;
    const name2 = "rotate" + this.state.pos2;
    const name3 = "rotate" + this.state.pos3;

    // console.log(name1);
    // console.log(name2);
    // console.log(name3);

    return (
      <div className="showroom-wrapper">
        <h2 className="sr-name">
          {name1 === "rotate0" ? "MultiFunction" : ""}
          {name1 === "rotate1" ? "Desktop" : ""}
          {name1 === "rotate2" ? "Production" : ""}
        </h2>
        <img
          onClick={this.handleClick}
          className={name1}
          src="https://uploads.codesandbox.io/uploads/user/f7283109-f315-496e-8e3e-e0a6a7eac08f/lp-z-Untitled-1.png"
        />
        <img
          onClick={this.handleClick}
          className={name2}
          src="https://uploads.codesandbox.io/uploads/user/f7283109-f315-496e-8e3e-e0a6a7eac08f/9jYI-Untitled-2.png"
        />
        <img
          onClick={this.handleClick}
          className={name3}
          src="https://uploads.codesandbox.io/uploads/user/f7283109-f315-496e-8e3e-e0a6a7eac08f/1WMV-fbv.png"
        />
        <img
          className="platform"
          src="https://uploads.codesandbox.io/uploads/user/f7283109-f315-496e-8e3e-e0a6a7eac08f/NiUQ-Untitled-1-01.png"
        />
        <br />
        {/*<a href="/contact">
          <button className="sr-button1">Contact us for a quote</button>
        </a>*/}
        <Link to="/contact">
          <button
            type="button"
            className="sr-button1"
            onClick={this.buttonClicked}
          >
            Contact us for a quote!
          </button>
        </Link>
        <a href="/products">
          <button
            type="button"
            className="sr-button2"
            onClick={this.buttonClicked}
          >
            View more models
          </button>
        </a>
      </div>
    );
  }
}

export default Showroom;
