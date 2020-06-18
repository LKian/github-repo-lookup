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
        <p>this is search text --- {this.props.searchText}</p>
        <p>this is submitted text --- {this.props.submittedText}</p>
      </StyledForm>
    );
  }
}

const StyledForm = styled.form``;

export default SearchForm;
