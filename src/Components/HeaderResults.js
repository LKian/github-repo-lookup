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
  h3 {
    text-align: center;
    padding: 50px 0 25px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    max-width: 100px;
    padding: 25px 0;
  }
`;

export default HeaderResults;
