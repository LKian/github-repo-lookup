import React, { Component } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

const githubRepoURL = (submittedUsername) =>
  `https://api.github.com/users/${submittedUsername}/repos`;

const fetchRepos = (username) =>
  fetch(githubRepoURL(username))
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameWIP: "",
      username: "",
      listOfRepos: [],
    };
  }

  async componentDidMount() {
    console.log("This component did mount.");

    await fetchRepos().then(function (data) {
      console.log("Data is : ", data);
    });
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
      console.log("Line 47: ", data);
      repoArray = data;
    });

    this.setState({
      usernameWIP: "",
      username: submittedText,
      listOfRepos: repoArray,
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchForm
            usernameWIP={this.state.usernameWIP}
            username={this.state.username}
            onSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            repos={this.state.listOfRepos}
          />
          <SearchResults repos={this.state.listOfRepos} />
        </header>
      </div>
    );
  }
}

export default App;
