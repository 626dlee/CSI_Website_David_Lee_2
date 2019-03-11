import React from "react";
import Bio from "./Bio";
import TeamData from "./TeamData";
import Banner from "./Banner";
class About extends React.Component {
  constructor() {
    super();
  }

  render() {
    const vid2 =
      "https://ak9.picdn.net/shutterstock/videos/1021525339/preview/stock-footage-aerial-helicopter-shot-flying-around-downtown-los-angeles-at-sunset-wide-shot-filmed-with-a-red.webm";
    const teamData = TeamData.map(member => (
      <Bio
        key={member.id}
        name={member.name}
        pos={member.position}
        imgURL={member.imgURL}
        description={member.description}
      />
    ));
    let styles = {
      height: "300px"
    };
    return (
      <div className="about-wrapper">
        {/*<Banner vidURL={vid2} />*/}
        <img
          className="about-bg"
          src="https://images.unsplash.com/photo-1522165078649-823cf4dbaf46?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=756f069c98c96a701453b1e27630e961&w=1000&q=80"
        />
        <div className="about-banner">
          <h1 className="about-title">Meet the team!</h1>
          <video autoPlay loop className="about-banner-vid">
            <source src={vid2} />
          </video>
        </div>
        <div style={styles} />

        {teamData}
      </div>
    );
  }
}

export default About;
