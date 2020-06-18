import React, { Component } from "react";
import SearchForm from "./SearchForm";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <h2>Title</h2>
        <SearchForm />
      </div>
    );
  }
}

export default App;
