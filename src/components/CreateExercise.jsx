import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: [],
    };
  }

  onChangeUsername = (ev) => {
    this.setState({
      username: ev.target.value,
    });
  };
  onChangeDescription = (ev) => {
    this.setState({
      description: ev.target.value,
    });
  };
  onChangeDuration = (ev) => {
    this.setState({
      duration: ev.target.value,
    });
  };
  onChangeDate = (ev) => {
    this.setState({
      date: ev,
    });
  };
  onSubmit = (ev) => {
    ev.preventDefault();
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };
    console.log("Exercise Submitted:", exercise);
    window.location = "/";
  };

  componentDidMount() {
    console.log("mounting");
    this.setState({
      users: ["test user"],
      username: "test user",
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <h3>Create New Exercise Log</h3>
            <form onSubmit={this.onSubmit} className="fluid">
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <br />
                <select
                  required
                  value={this.state.username}
                  className="form-control"
                  onChange={this.onChangeUsername}
                  name="username"
                >
                  {this.state.users.map((user) => {
                    return (
                      <option key={user} value={user}>
                        {user}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <br />
                <input type="text" onChange={this.onChangeDescription} />
              </div>
              <div className="form-group">
                <label htmlFor="duration">Duration:</label>
                <br />
                <input type="text" onChange={this.onChangeDuration} />
              </div>
              <div className="form-group"></div>
              <div className="form-group">
                <label htmlFor="date">Date:</label>
                <br />
                <DatePicker
                  selected={this.state.date}
                  onChange={this.onChangeDate}
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
