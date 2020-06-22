import React, { Component } from "react";
import styled from "styled-components";
import Link from "@material-ui/core/Link";

class LinkGHPages extends Component {
  render() {
    return (
      <styledLinkGHPages>
        {" "}
        {/* const githubPages = repo.has_pages ? ( */}
        <Link variant="body2" href={this.props.url} size="small">
          Live Demo
        </Link>
        {/* ) : null; */}
      </styledLinkGHPages>
    );
  }
}

const styledLinkGHPages = styled.div`
  width: 100%;
  h4 {
    text-align: center;
  }
`;

export default LinkGHPages;
