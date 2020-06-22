import React, { Component } from "react";
import styled from "styled-components";
import Alert from "@material-ui/lab/Alert";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Header from "./Header";
import CardRepo from "./CardRepo";

class SearchResults extends Component {
  render() {
    const repoGrid = this.props.listOfRepos.message ? (
      <div>
        <Alert severity="error">Invalid Username</Alert>
      </div>
    ) : (
      <Grid container spacing={2}>
        {5 > 3 ? <Header username={this.props.username} /> : "2020202020"}
        <Grid item xs={12}>
          <Grid container justify="center" spacing={4}>
            {this.props.listOfRepos.map((repo) => {
              //   console.log("item ", item);
              //   const githubPages = repo.has_pages ? (
              //     <Link variant="body2" href={repo.homepage} size="small">
              //       Live Demo
              //     </Link>
              //   ) : null;
              return (
                <Grid item key={repo.id} className="card">
                  <CardRepo name={repo.name} updated_at={repo.updated_at} />
                  <CardRepo />
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
  .card {
    min-width: 275px;
  }
  .button-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .button {
    flex: 1;
  }
`;

export default SearchResults;
