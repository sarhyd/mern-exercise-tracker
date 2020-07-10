import React, { Component } from "react";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  onChangeUsername = (ev) => {
    this.setState({
      username: ev.target.value,
    });
  };

  onSubmit = (ev) => {
    ev.preventDefault();
    const user = {
      username: this.state.username,
    };
    console.log("User Submitted:", user);

    this.setState({
      username: "",
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="header">Create User Component</h3>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <form onSubmit={this.onSubmit} className="fluid">
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onChangeUsername}
                  value={this.state.username}
                  name="username"
                />
              </div>

              <div className="form-group">
                <input
                  type="submit"
                  className="btn btn-primary float-right"
                  value="Create!"
                />
              </div>
            </form>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    );
  }
}
