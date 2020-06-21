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

class SearchResults extends Component {
  render() {
    const pages =
      this.props.repos > 20 ? (
        <Button size="small">Learn More</Button>
      ) : (
        "No pages"
      );
    const leah = this.props.repos.message ? (
      <Alert severity="error">Invalid Username</Alert>
    ) : (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {this.props.repos.map((item) => (
              <Grid item key={item.id}>
                <Card>
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      {item.name}
                    </Typography>
                    <Typography color="textSecondary">
                      repo descrip here
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                    {pages}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );

    return <StyledResults>{leah}</StyledResults>;
  }
}

const StyledResults = styled.div``;

export default SearchResults;
