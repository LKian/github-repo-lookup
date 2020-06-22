import React, { Component } from "react";
import styled from "styled-components";
import Link from "@material-ui/core/Link";

class LinkGHPages extends Component {
  render() {
    console.log("from LinkGHPages ", this.props);
    return (
      <StyledLinkGHPages>
        {this.props.has_pages ? (
          <Link variant="body2" href={this.props.URLPage} size="small">
            Live Demo
          </Link>
        ) : null}
      </StyledLinkGHPages>
    );
  }
}

const StyledLinkGHPages = styled.div``;

export default LinkGHPages;
