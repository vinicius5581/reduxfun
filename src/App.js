import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { updateUser, apiRequest } from "./actions/user-actions";

import Header from "./components/Header";

class App extends Component {
  componentDidMount() {
    this.props.onApiRequest();
  }

  onUpdateUserClick = () => {
    this.props.onUpdateUser("Nanda");
  };

  onUpdateUserChange = e => {
    this.props.onUpdateUser(e.target.value);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div onClick={this.onUpdateUserClick}>Update user</div>
        <input onChange={this.onUpdateUserChange} />
        {this.props.user}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log("mapStateToProps props", props);
  return {
    products: state.products,
    user: state.user,
    userPlusProp: `${state.user} ${props.someProp}`
  };
};

const mapActionsToProps = {
  onUpdateUser: updateUser,
  onApiRequest: apiRequest
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
