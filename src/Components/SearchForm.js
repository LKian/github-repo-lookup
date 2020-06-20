import React, { Component } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ErrorIcon from "@material-ui/icons/Error";

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
        {this.props.repos.message === "Not Found" ? (
          <div>
            <ErrorIcon /> Enter valid GitHub username
          </div>
        ) : (
          this.props.repos.map((item) => {
            console.log("ITEM on li 28: ", item);
            return (
              <div>
                <h4> {item.name} </h4>
                <a href="{item.html_url}">View Repo</a>
              </div>
            );
          })
        )}
      </StyledForm>
    );
  }
}

const StyledForm = styled.form``;

export default SearchForm;
