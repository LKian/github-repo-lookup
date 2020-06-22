import React, { Component } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        {" "}
        <Typography variant="h4" color="textSecondary" gutterBottom>
          Repo: {this.props.username}
        </Typography>
      </StyledHeader>
    );
  }
}

const StyledHeader = styled.div`
  width: 100%;
  h4 {
    text-align: center;
  }
`;

export default Header;
