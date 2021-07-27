import React, { Component } from "react";
import Search from "../Search/Search";
import { withRouter, Link } from "react-router-dom";
import avatar from "../assets/SVGs/avatar.svg"; 
import caret from "../assets/SVGs/caret-down.svg"; 
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header">
          <div className="logo">
            <div class="avatarLogout">
            <img src={avatar} alt="avatar" class="avatar" />
                <p>John Doe</p>
                {/* <li class="dropdown"> */}
                <Link to="#" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <img src={caret} alt="caret" />
                </Link>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/"><div class="dropdown-item">Logout</div></Link>
                </div>
              {/* </li> */}
              </div>
          </div>
          {/*Renders the Search component if the location is /profile */}
          {this.props.location.pathname.includes("/profile") && (
            <Search
              onSubmitHandler={this.props.onSubmitHandler}
              onChangeHandler={this.props.onChangeHandler}
              name={this.props.name}
            />
          )}
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
