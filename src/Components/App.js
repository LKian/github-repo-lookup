import React, { Component } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

const githubRepoURL = (submittedUsername) =>
  `https://api.github.com/users/${submittedUsername}/repos?sort=updated`;

const fetchRepos = (username) =>
  fetch(githubRepoURL(username))
    .then((response) => {
      let data = response.json();
      return data;
    })
    .catch((error) => {
      console.log(error);
    });

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameWIP: "",
      username: "",
      listOfRepos: [],
      validUsername: false,
      isLoading: false,
    };
  }

  async componentDidMount() {
    console.log("This component did mount.");
    this.setState({ isLoading: true });
    await fetchRepos();
    this.setState({ isLoading: false });
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

    await fetchRepos(this.state.username).then(function (data) {
      console.log("Data : ", data);
      repoArray = data;
    });

    this.setState({
      usernameWIP: "",
      username: submittedText,
      listOfRepos: repoArray,
      isLoading: true,
    });
  };

  render() {
    return (
      <div className="App">
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
        />
      </div>
    );
  }
}

export default App;
