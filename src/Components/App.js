import React, { Component } from "react";
import SearchForm from "./SearchForm";

const githubRepoURL = (submittedUsername) =>
  `https://api.github.com/users/${submittedUsername}/repos`;

const fetchRepos = (username) =>
  fetch(githubRepoURL(username))
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data[0];
    });

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      submittedUsername: "",
      repos: [],
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
    console.log("Changed!  ");

    this.setState({
      username: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    let submittedText = this.state.username;

    e.preventDefault();
    this.setState({
      submittedUsername: submittedText,
      username: "",
    });
    console.log(
      `submitted text is ${submittedText} ${this.state.submittedUsername}`
    );
    await fetchRepos(this.state.submittedUsername).then(function (data) {
      console.log(data);
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchForm
            searchText={this.state.username}
            submittedText={this.state.submittedUsername}
            onSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        </header>
      </div>
    );
  }
}

export default App;
