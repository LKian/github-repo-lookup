import React, { Component } from "react";
import styled from "styled-components";
import Link from "@material-ui/core/Link";

class LinkGHPages extends Component {
  render() {
    console.log("from LinkGHPages ", this.props);
    return (
      <StyledLinkGHPages>
        {this.props.has_pages ? (
          <Link
            href={this.props.URLPage}
            target="_blank"
            rel="noopener"
            variant="body2"
          >
            Live Demo
          </Link>
        ) : null}
      </StyledLinkGHPages>
    );
  }
}

const StyledLinkGHPages = styled.div``;

export default LinkGHPages;
