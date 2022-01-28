import React, { Component, Fragment } from "react";
import { Container } from "../component/Container";
import { ThemeProvider } from "styled-components";
import RegistrationForm from "./RegistrationForm";
import UserList from "./UserList";
import { UserDarkMode } from "../Themes/UserDarkMode";
import { arrTheme } from "../Themes/ThemeManagement";
export default class UserManagement extends Component {
  state = {
    arrTheme: arrTheme,
    theme: UserDarkMode,
  };
  renderTheme() {
    return this.state.arrTheme.map((theme, index) => {
      return <option key={index}>{theme.name}</option>;
    });
  }
  chooseTheme = (e) => {
    let { value } = e.currentTarget;
    for (let i = 0; i < this.state.arrTheme.length; i++) {
      if (value === this.state.arrTheme[i].name) {
        this.setState({
          theme: this.state.arrTheme[i].theme,
        });
      }
    }
  };
  render() {
    return (
      <Fragment>
        <select
          onChange={this.chooseTheme}
          style={{
            position: "fixed",
            top: "10%",
            right: "15px",
            zIndex: "5",
            cursor: "pointer",
            minWidth: "60px",
            minHeight: "60px",
            border: "3px solid black",
            borderBottomLeftRadius: "20px",
            borderTopRightRadius: "20px",
            backgroundColor: "#EEEEEE",
            color: "black",
            boxShadow: "2px 2px 10px 5px #333333",
            fontWeight: "700",
          }}
        >
          {this.renderTheme()}
        </select>
        <ThemeProvider theme={this.state.theme}>
          <Container>
            <RegistrationForm />
          </Container>
          <Container>
            <UserList />
          </Container>
        </ThemeProvider>
      </Fragment>
    );
  }
}
