import React, { Component } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

class RepoLastUpdated extends Component {
  render() {
    return (
      <StyledRepoLastUpdated>
        {" "}
        <Typography variant="caption" color="textSecondary" gutterBottom>
          {/* Last Updated: {this.props.updatedAt.split("T")[0]} */}
          Last Updated: {this.props.updated_at}
        </Typography>
      </StyledRepoLastUpdated>
    );
  }
}

const StyledRepoLastUpdated = styled.div`
  width: 100%;
  h4 {
    text-align: center;
  }
`;

export default RepoLastUpdated;
