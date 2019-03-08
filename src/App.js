import React, { Component } from "react";

// Data
import authors from "./data";
import AuthorDetail from "./AuthorDetail";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";

class App extends Component {
  state = {
    currentAuthor: null,
    filterAuthors: authors
  };

  selectAuthor = author => this.setState({ currentAuthor: author });
  unSelectAuthor = () => this.setState({ currentAuthor: null });
  filterAuthors = query =>
    this.setState({
      filterAuthors: authors.filter(author => {
        const autherName = `${author.first_name} ${
          author.last_name
        } ${author.books.map(
          book => `${book.title} ${book.color}`
        )}`.toLowerCase();

        return autherName.includes(query.toLowerCase());
      })
    });

  getView = () => {
    if (this.state.currentAuthor) {
      return <AuthorDetail author={this.state.currentAuthor} />;
    } else {
      return (
        <AuthorsList
          authors={this.state.filterAuthors}
          selectAuthor={this.selectAuthor}
          filterAuthors={this.filterAuthors}
        />
      );
    }
  };
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar unSelectAuthor={this.unSelectAuthor} />
          </div>
          <div className="content col-10">{this.getView()}</div>
        </div>
      </div>
    );
  }
}

export default App;
