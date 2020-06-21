import React, { Component } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Alert from "@material-ui/lab/Alert";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

class SearchForm extends Component {
  render() {
    const leah = this.props.repos.message ? "TRUE!" : "FALSE";
    // console.log("line 17 : ", this.props.repos.message);

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
        {leah}
      </StyledForm>
    );
  }
}

const StyledForm = styled.form``;

export default SearchForm;
