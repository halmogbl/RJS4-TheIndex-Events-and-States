import React, { Component } from "react";

class BooksRow extends Component {
  render() {
    const book = this.props.book;
    const author = this.props.author;
    const authorName = `${author.first_name} ${author.last_name}`;
    return (
      <tr>
        <td>{book.title}</td>
        <td>{authorName}</td>
        <td>
          <button className="btn" style={{ backgroundColor: book.color }} />
        </td>
      </tr>
    );
  }
}

export default BooksRow;
