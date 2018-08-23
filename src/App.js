import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateUser } from "./actions/user-actions";

class App extends Component {
  onUpdateUserClick = () => {
    this.props.onUpdateUser("Nanda");
  };

  onUpdateUserChange = e => {
    this.props.onUpdateUser(e.target.value);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div onClick={this.onUpdateUserClick}>Update user</div>
        <input onChange={this.onUpdateUserChange} />
        {this.props.user}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  products: state.products,
  user: state.user,
  userPlusProp: `${state.user} ${props.someProp}`
});

const mapActionsToProps = (dispatch, props) => {
  console.log(this.props);
  return bindActionCreators(
    {
      onUpdateUser: updateUser
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
