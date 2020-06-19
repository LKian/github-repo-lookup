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
          value={this.props.searchText}
          onChange={this.props.handleChange}
          variant="outlined"
        />

        <Button className="form-submit" type={"submit"}>
          Submit
        </Button>
        <p>this is username WIP --- {this.props.usernameWIP}</p>
        <p>this is username --- {this.props.username}</p>
      </StyledForm>
    );
  }
}

const StyledForm = styled.form``;

export default SearchForm;
