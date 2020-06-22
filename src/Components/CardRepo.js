import React, { Component } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";
import RepoLastUpdated from "./RepoLastUpdated";
import LinkGHPages from "./LinkGHPages";

class CardRepo extends Component {
  render() {
    return (
      <StyledCardRepo>
        {" "}
        <Card>
          <CardContent>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              {this.props.name}
            </Typography>
            <RepoLastUpdated updated_at={this.props.updated_at} />
          </CardContent>
          <CardActions className="button-container">
            <Link variant="body2" href="#">
              &lt; &gt;
            </Link>
            {/* {githubPages} */}
            {/* <LinkGHPages href={this.props.homepage} /> */}
          </CardActions>
        </Card>
      </StyledCardRepo>
    );
  }
}

const StyledCardRepo = styled.div`
  width: 100%;
  h4 {
    text-align: center;
  }
`;

export default CardRepo;
