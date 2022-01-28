import React, { Component } from "react";
import { Button } from "../component/Button";
import { Heading } from "../component/Heading";
import { connect } from "react-redux";
import { delete_user, edit_user } from "../../Redux/Actions/action";

class UserList extends Component {
  renderUserList() {
    let { userList } = this.props;
    return userList.map((list, i) => {
      return list.list.map((user, index) => {
        return (
          <tr key={i + index} style={{ verticalAlign: "middle" }}>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.accountName}</td>
            <td>{user.password}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.email}</td>
            <td>{list.type}</td>
            <td>
              <Button
                onClick={() => {
                  this.props.dispatch(edit_user(user, list.type));
                }}
                style={{ margin: "0px" }}
              >
                <i className="fa fa-edit"></i>
              </Button>
              <Button
                style={{ marginLeft: "5px" }}
                onClick={() => {
                  this.props.dispatch(delete_user(user, list.type));
                }}
              >
                <i className="fa fa-trash-alt"></i>
              </Button>
            </td>
          </tr>
        );
      });
    });
  }
  render() {
    return (
      <div>
        <Heading>User List</Heading>
        <div className="container-fluid">
          <table className="table" style={{ color: "white" }}>
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Account Name</th>
                <th scope="col">Password</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Email</th>
                <th scope="col">Type Of Account</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>{this.renderUserList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userList: state.userReducer.userList,
  };
};
export default connect(mapStateToProps)(UserList);
