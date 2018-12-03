import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAuthor: {}
    };
    this.selectAuthor = this.selectAuthor.bind(this);
  }

  selectAuthor(author) {
    this.setState({ currentAuthor: author });
    //console.log(selectAuthor);
  }

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="content col-10">
            <AuthorsList authors={authors} selectAuthor={this.selectAuthor} />
            <AuthorDetail author={this.state.currentAuthor} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
