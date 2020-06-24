import React, { Component } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

class HeaderResults extends Component {
  render() {
    return (
      <StyledHeader>
        <Typography variant="h3" color="textPrimary" gutterBottom>
          {this.props.profileImg ? (
            <>
              <img src={this.props.profileImg} alt="profile pic" />
              {this.props.username}'s repos
            </>
          ) : (
            "Find GitHub Repos by Username"
          )}
        </Typography>
      </StyledHeader>
    );
  }
}

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h3 {
    text-align: center;
    padding: 50px 0 25px;
  }

  img {
    max-width: 100px;
    padding: 0 25px;
  }
`;

export default HeaderResults;
