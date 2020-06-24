import React, { Component } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Link from "@material-ui/core/Link";
import RepoLastUpdated from "./RepoLastUpdated";
import LinkGHPages from "./LinkGHPages";
import CodeIcon from "@material-ui/icons/Code";

class CardRepo extends Component {
  render() {
    return (
      <StyledCardRepo>
        <Card className="card">
          <CardContent>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              {this.props.name.replace(/-/g, " ")}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {this.props.description}
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
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 250px;
    min-height: 225px;
  }
  h6 {
    text-transform: capitalize;
    min-height: 50px;
    line-height: 1.3;
    margin-bottom: 15px;
  }
  .button-container {
    display: flex;
    justify-content: space-between;
  }
  .button-container a {
    text-decoration: none;
    color: #e0e;
  }
  .button-container a:hover {
    transition: all linear 0.2s;
    color: #c93cf9;
  }
`;

export default CardRepo;
