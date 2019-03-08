import React, { Component } from "react";
import BooksRow from "./BooksRow";
class AuthorDetail extends Component {
  render() {
    let author = this.props.author;
    let authorName = this.props.author.first_name + this.props.author.last_name;
    let booksR = author.books.map(book => (
      <BooksRow book={book} key={book.title} author={author} />
    ));
    return (
      <div className="author col-xs-10">
        <div>
          <h3>{authorName}</h3>
          <img src={author.imageUrl} className="img-thumbnail " />
        </div>
        <table className="mt-3 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          {booksR}
          <tbody />
        </table>
      </div>
    );
  }
}

export default AuthorDetail;
