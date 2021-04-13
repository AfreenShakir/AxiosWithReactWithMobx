import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import "./UsersList.css";

class UsersList extends Component {
  componentDidMount = async () => {
    await this.props.fetchDataStore.getListOfUsers();
  };

  searchUser = (e) => {
    if (e.key === "Enter") {
      this.props.fetchDataStore.search(e.target.value);
    }
  };
  render() {
    return (
      <div className="container">
        <p className="user-search">Search from a list of users</p>
        <input
          type="search"
          placeholder="Search"
          onKeyPress={this.searchUser}
          className="searchbo"
        />
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.props.fetchDataStore.usersData.map((users) => (
              <tr key={users.id}>
                <td>{users.name}</td>
                <td>{users.username}</td>
                <td>{users.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default inject("fetchDataStore")(observer(UsersList));
