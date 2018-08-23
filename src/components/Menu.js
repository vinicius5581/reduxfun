import React, { Component } from "react";
import { connect } from "react-redux";

class Menu extends Component {
  render() {
    const { menu } = this.props;
    const { items } = menu;
    console.log(items);
    return (
      <div className={"app-menu"}>
        <ul className={"menu"}>
          {items.map((menu, idx) => {
            return (
              <li key={idx}>
                <a href={menu.path}>{menu.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menu: state.menu
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
