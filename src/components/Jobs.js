import React from "react";
import Button from "./Button";

class Jobs extends React.Component {
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
      "https://ak1.picdn.net/shutterstock/videos/1019016241/preview/stock-footage-los-angeles-california-circa-flying-in-los-angeles-amongst-the-hollywood-hills-hollwyood.webm";
    return (
      <div className="jobs-wrapper">
        <img
          className="jobs-bg"
          src="https://uploads.codesandbox.io/uploads/user/f7283109-f315-496e-8e3e-e0a6a7eac08f/KYIC-xerox-connectkey-apps-print-scan-cloud-large-969x686_0.jpg"
        />
        <div className="jobs-banner-wrapper">
          <h1 className="jobs-banner-title">Join us!</h1>
          <video autoPlay loop className="jobs-banner">
            <source src={vid5} />
          </video>
        </div>

        <div className="careers">
          <h1>Careers</h1>

          <p>Find out how to start a career with us!</p>
          <br />
          <a href="https://xeroxagentjobs.com/job-details/sales-representative-421/?utm_campaign=Indeed">
            <button className="jobs-button">View Job Opportunities</button>
          </a>
        </div>

        <div className="internships">
          <h1>Internships</h1>
          <p>Explore our internship opportunities!</p>
          <br />
          <a href="https://www.indeed.com/jobs?q=xerox+copy+solution&l=Alhambra%2C+CA">
            <button className="jobs-button">
              View Internship Opportunities
            </button>
          </a>
        </div>
        <div className="meet-the-team">
          <h1>Meet the Team</h1>
          <p>Find out more about our team members</p>
          <br />
          <a href="/about">
            <button className="jobs-button">Meet the Experts</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Jobs;
