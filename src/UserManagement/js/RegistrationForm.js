import React, { Component } from "react";
import { Button } from "../component/Button";
import { Heading } from "../component/Heading";
import { Input, Label } from "../component/Input";
import { connect } from "react-redux";
import { add_user, update_user } from "../../Redux/Actions/action";
class RegistrationForm extends Component {
  state = {
    typeOfAccount: "User",
    values: {
      accountName: "",
      name: "",
      password: "",
      phoneNumber: "",
      email: "",
    },
    errors: {
      accountName: "",
      name: "",
      password: "",
      phoneNumber: "",
      email: "",
    },
    userEdit: {
      type: "",
      id: "",
      accountName: "",
      name: "",
      password: "",
      phoneNumber: "",
      email: "",
    },
  };

  handleInput = (event) => {
    let { name, value, type } = event.currentTarget;
    let newValue = { ...this.state.values, [name]: value };
    let newError = { ...this.state.errors };
    if (value.trim() === "") {
      newError[name] = "Info must not be empty !";
    } else {
      newError[name] = "";
    }
    if (type === "email") {
      let re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(value)) {
        newError[name] = "";
      } else {
        newError[name] = " Email is invalid !";
      }
    }
    if (type === "tel") {
      let re = /\d+/g;
      if (re.test(value)) {
        newError[name] = "";
      } else {
        newError[name] = " Phone number must be number !";
      }
    }
    this.setState({
      values: newValue,
      errors: newError,
    });
  };
  renderType() {
    let { userList } = this.props;
    return userList.map((type, index) => {
      return <option key={index}>{type.type}</option>;
    });
  }
  changeType = (event) => {
    let { value } = event.currentTarget;
    this.setState({
      typeOfAccount: value,
    });
  };
  checkValueInput = (values, errors) => {
    let flag = true;
    for (let key in values) {
      if (values[key] === "") {
        flag = false;
      }
    }
    for (let key in errors) {
      if (errors[key] !== "") {
        flag = false;
      }
    }
    return flag;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let { values, errors, typeOfAccount } = this.state;
    let flag = this.checkValueInput(values, errors);
    if (!flag) {
      console.log("submit");
      alert("Something went wrong!");
    } else {
      let user = { ...values };
      this.setState(
        {
          values: {
            accountName: "",
            name: "",
            password: "",
            phoneNumber: "",
            email: "",
          },
        },
        () => {
          this.props.dispatch(add_user(user, typeOfAccount));
        }
      );
    }
  };
  handleEventUpdate = () => {
    let { values, errors, typeOfAccount, userEdit } = this.state;
    let flag = this.checkValueInput(values, errors);
    if (!flag) {
      console.log("update");
      alert("Something went wrong!");
    } else {
      let { accountName, name, password, phoneNumber, email } = values;
      let userEditUpdate = {
        ...userEdit,
        accountName,
        name,
        password,
        phoneNumber,
        email,
        type: typeOfAccount,
      };

      this.props.dispatch(update_user(userEditUpdate));
    }
  };
  render() {
    return (
      <div style={{ position: "relative" }}>
        <Heading>Registration Form</Heading>
        <form onSubmit={this.handleSubmit}>
          <div className="row" style={{ width: "90%", margin: "auto" }}>
            <div className="col-6 my-3">
              <Label>account name</Label>
              <Input
                value={this.state.values.accountName}
                onChange={this.handleInput}
                name="accountName"
              />
              <span
                className="text text-danger my-1"
                style={{ fontSize: "17px", textTransform: "uppercase" }}
              >
                {this.state.errors.accountName}
              </span>
            </div>
            <div className="col-6 my-3">
              <Label>Name</Label>
              <Input
                value={this.state.values.name}
                onChange={this.handleInput}
                name="name"
              />
              <span
                className="text text-danger my-1"
                style={{ fontSize: "17px", textTransform: "uppercase" }}
              >
                {this.state.errors.name}
              </span>
            </div>
            <div className="col-6 my-3">
              <Label>Password</Label>
              <Input
                value={this.state.values.password}
                onChange={this.handleInput}
                name="password"
                type="password"
              />
              <span
                className="text text-danger my-1"
                style={{ fontSize: "17px", textTransform: "uppercase" }}
              >
                {this.state.errors.password}
              </span>
            </div>
            <div className="col-6 my-3">
              <Label>phone number</Label>
              <Input
                value={this.state.values.phoneNumber}
                onChange={this.handleInput}
                name="phoneNumber"
                type="tel"
              />
              <span
                className="text text-danger my-1"
                style={{ fontSize: "17px", textTransform: "uppercase" }}
              >
                {this.state.errors.phoneNumber}
              </span>
            </div>
            <div className="col-6 my-3">
              <Label>email</Label>
              <Input
                value={this.state.values.email}
                onChange={this.handleInput}
                name="email"
                type="email"
              />
              <span
                className="text text-danger my-1"
                style={{ fontSize: "17px", textTransform: "uppercase" }}
              >
                {this.state.errors.email}
              </span>
            </div>
            <div className="col-6">
              <Label className="mb-3">type of account</Label>
              <select
                onChange={this.changeType}
                style={{
                  height: "40px",
                  textAlign: "center",
                  width: "100%",
                  fontSize: "18px",
                  fontWeight: "700",
                  borderRadius: "10px",
                  cursor: "pointer",
                  display: "block",
                }}
              >
                {this.renderType()}
              </select>
              <Button
                disabled={this.props.disabled === "add" ? true : false}
                style={{ minWidth: "150px", margin: "80px 0 20px 150px" }}
                type="submit"
              >
                <i className="fa fa-plus"></i>
              </Button>
            </div>
          </div>
        </form>
        <div className="container">
          <Button
            disabled={this.props.disabled === "update" ? true : false}
            style={{
              minWidth: "150px",
              position: "absolute",
              bottom: "20px",
              right: "6%",
            }}
            onClick={() => {
              this.handleEventUpdate();
            }}
          >
            <i className="fa fa-upload"></i>
          </Button>
        </div>
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userEdit.id !== this.props.userEdit.id) {
      let userEditUpdate = { ...this.props.userEdit };
      let { type, id, accountName, name, password, phoneNumber, email } =
        userEditUpdate;
      this.setState({
        userEdit: userEditUpdate,
        typeOfAccount: type,
        values: {
          ...this.state.values,
          id,
          accountName,
          name,
          password,
          phoneNumber,
          email,
        },
      });
    }
  }
}
const mapStateToProps = (state) => {
  return {
    userList: state.userReducer.userList,
    userEdit: state.userReducer.userEdit,
    disabled: state.userReducer.disabled,
  };
};
export default connect(mapStateToProps)(RegistrationForm);
