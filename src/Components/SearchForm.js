import React, { Component } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class SearchForm extends Component {
  render() {
    return (
      <StyledForm id="username-form" onSubmit={this.props.onSubmit}>
        <TextField
          id="github-user-name"
          label="Username"
          value={this.props.usernameWIP}
          onChange={this.props.handleChange}
          variant="outlined"
        />
        <Button className="form-submit" type={"submit"}>
          Submit
        </Button>
      </StyledForm>
    );
  }
}

const StyledForm = styled.form`
  // border: 2px dashed red;
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default SearchForm;
