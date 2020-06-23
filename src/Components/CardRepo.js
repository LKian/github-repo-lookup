import React, { Component } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";
import RepoLastUpdated from "./RepoLastUpdated";
import LinkGHPages from "./LinkGHPages";
import CodeIcon from "@material-ui/icons/Code";

class CardRepo extends Component {
  render() {
    console.log("< CardRepo />", this.props);
    return (
      <StyledCardRepo>
        {" "}
        <Card>
          <CardContent>
            <Typography variant="overline" color="textPrimary" gutterBottom>
              {this.props.name}
            </Typography>
            <RepoLastUpdated updated_at={this.props.updated_at} />
          </CardContent>
          <CardActions className="button-container">
            <Link
              href={this.props.URLRepo}
              target="_blank"
              rel="noopener"
              variant="body2"
            >
              <CodeIcon />
            </Link>
            <LinkGHPages
              has_pages={this.props.has_pages}
              URLPage={this.props.URLPage}
            />
          </CardActions>
        </Card>
      </StyledCardRepo>
    );
  }
}

const StyledCardRepo = styled.div`
  width: 100%;
  .button-container {
    border: 2px dashed green;
  }
`;

export default CardRepo;
