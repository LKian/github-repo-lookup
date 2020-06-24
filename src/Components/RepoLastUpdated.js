import React, { Component } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

class RepoLastUpdated extends Component {
  render() {
    return (
      <StyledRepoLastUpdated>
        {" "}
        <Typography variant="caption" color="textSecondary" gutterBottom>
          Last Updated: {this.props.updated_at.split("T")[0]}
        </Typography>
      </StyledRepoLastUpdated>
    );
  }
}

const StyledRepoLastUpdated = styled.div`
  margin: 15px 0;
`;

export default RepoLastUpdated;
