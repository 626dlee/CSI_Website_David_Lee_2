import React from "react";
import Button from "./Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
// function Bio(props) {
//   return (
//     <div className="bio-wrapper">
//       <p>
//         <img className="portrait" src={props.imgURL} />
//         <h3 className="bios-name">{props.name}</h3>
//         <p className="bios-desc">{props.description}</p>
//       </p>
//       <p>
//         <Button name="Contact Me" />
//       </p>
//     </div>
//   );
// }

class Bio extends React.Component {
  render() {
    return (
      {
        /*<div className="bio-wrapper">
        <p>
          <img className="portrait" src={this.props.imgURL} />
          <h3 className="bios-name">{this.props.name}</h3>
          <h4 className="bios-pos">{this.props.pos}</h4>
          <p className="bios-desc">{this.props.description}</p>
        </p>
        <p>
          <a href="/contact">
            <Button name="Contact Me" />
          </a>
        </p>
      </div>*/
      },
      (
        <Card className="bio-wrapper">
          <CardActionArea>
            <Typography gutterBottom variant="h4" component="h4">
              {this.props.name}
            </Typography>
            <Typography gutterBottom variant="h6" component="h4">
              {this.props.pos}
            </Typography>
            <a href="/contact">
              <CardMedia
                component="img"
                image={this.props.imgURL}
                height="200"
              />
            </a>
            {/*<Typography gutterBottom variant="body1" component="body1">
              {this.props.description}
            </Typography>*/}
            {/*<CardContent>
            <Typography component="p">
              {this.props.desc}
              <br />
              {this.props.desc1}
              <br />
              {this.props.desc2}
            </Typography>
          </CardContent>*/}
          </CardActionArea>
        </Card>
      )
    );
  }
}

export default Bio;
