import React, { Component } from "react";

class AuthorDetail extends Component {
  // checkAuthor(this.props.author){
  //     if(this.props.author == {} || 'undefined' )
  //     au
  // }
  render() {
    console.log(this.props.author);
    return (
      <div className="author col-xs-10">
        <div>
          <h3>{`${this.props.author.first_name} ${
            this.props.author.last_name
          }`}</h3>
          <img src={this.props.author.imageUrl} className="img-thumbnail" />
        </div>
        <table className="mt-3 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I SHOULD BE A BOOK NAME</td>
              <td>I SHOULD BE A STRING OF THIS BOOK'S AUTHORS</td>
              <td>
                <button className="btn" style={{ backgroundColor: "blue" }} />
              </td>
            </tr>
            <tr>
              <td>I SHOULD BE ANOTHER BOOK NAME</td>
              <td>I SHOULD BE A STRING OF THIS OHTER BOOK'S AUTHORS</td>
              <td>
                <button className="btn" style={{ backgroundColor: "red" }} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default AuthorDetail;
