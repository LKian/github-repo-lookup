import React, { Component } from "react";
import styled from "styled-components";
import Alert from "@material-ui/lab/Alert";
import Grid from "@material-ui/core/Grid";
import CardRepo from "./CardRepo";

class SearchResults extends Component {
  render() {
    const repoGrid = this.props.listOfRepos.message ? (
      <Alert severity="error">Invalid Username</Alert>
    ) : (
      <Grid container className="grid">
        <Grid item xs={12}>
          <Grid container justify="center" spacing={3}>
            {this.props.listOfRepos.map((repo) => {
              return (
                <Grid item key={repo.id} className="card">
                  <CardRepo
                    name={repo.name}
                    updated_at={repo.updated_at}
                    has_pages={repo.has_pages}
                    URLPage={repo.homepage}
                    URLRepo={repo.html_url}
                    description={repo.description}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    );

    return <StyledResults>{repoGrid}</StyledResults>;
  }
}

const StyledResults = styled.div`
  max-width: 1100px;
  margin: auto;
`;

export default SearchResults;
