import React, { Component } from "react";
import styled from "styled-components";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import HeaderResults from "./HeaderResults";

const githubUserProfile = (submittedUsername) =>
  `https://api.github.com/users/${submittedUsername}`;

const githubRepoURL = (submittedUsername) =>
  `https://api.github.com/users/${submittedUsername}/repos?sort=updated`;

const fetchRepos = (username) => {
  return fetch(githubRepoURL(username))
    .then((response) => {
      let data = response.json();
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const fetchUserProfile = (username) => {
  return fetch(githubUserProfile(username))
    .then((response) => {
      let data = response.json();

      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameWIP: "",
      username: "",
      listOfRepos: [],
      validUsername: false,
      profileImg: "",
    };
  }

  async componentDidMount() {
    console.log("Component did mount.");
    await fetchRepos();
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      usernameWIP: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    let submittedText = this.state.usernameWIP;
    let repoArray = [];
    let profilePic = "";

    await fetchRepos(this.state.usernameWIP).then(function (data) {
      console.log("Data : ", data);
      repoArray = data;
    });

    await fetchUserProfile(this.state.usernameWIP).then(function (data) {
      profilePic = data.avatar_url;
    });

    this.setState({
      usernameWIP: "",
      username: submittedText,
      listOfRepos: repoArray,
      isLoading: true,
      profileImg: profilePic,
    });
  };

  render() {
    return (
      <StyledApp className="App">
        <HeaderResults
          profileImg={this.state.profileImg}
          username={this.state.username}
          repos={this.props.listOfRepos}
        />
        <SearchForm
          usernameWIP={this.state.usernameWIP}
          username={this.state.username}
          onSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          listOfRepos={this.state.listOfRepos}
        />
        <SearchResults
          listOfRepos={this.state.listOfRepos}
          username={this.state.username}
          profileImg={this.state.profileImg}
        />
      </StyledApp>
    );
  }
}

const StyledApp = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

export default App;
