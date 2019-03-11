import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

class Text extends React.Component {
  constructor() {
    super();
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked() {
    console.log("button clicked");
  }

  render() {
    return (
      <div className="text-wrapper">
        {/*<ScrollAnimation
          animateIn="fadeInRight"
          animateOut="fadeOut"
          animatePreScroll="false"
          offset="00"
        >*/}
        <h2 className="text-title">{this.props.title}</h2>
        {/*</ScrollAnimation>*/}
        {/*<ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          animatePreScroll="false"
          offset="00"
        >*/}
        <br />
        <br />
        <a href={this.props.descLink}>
          <button
            type="button"
            className="text-desc"
            onClick={this.buttonClicked}
          >
            {this.props.desc}
          </button>
        </a>
        {/* </ScrollAnimation>*/}
        <br />
      </div>
    );
  }
}

export default Text;
