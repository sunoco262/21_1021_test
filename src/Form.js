import React, { Component } from "react";

function check(ans, guess) {
  console.log(typeof(ans),typeof(guess));
  if (ans === guess) {
    return "正解！！";
  } else {
    return "はずれ！！";
  }
}
class Form extends Component {
  input = "";
  text = "";
  constructor(props) {
    super(props);
    this.state = {
      message: "パスワードを入力してください"
    };
    this.doChange = this.doChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
  }

  doChange(event) {
    this.input = event.target.value;
  }

  doSubmit(event) {
    this.setState({
      message: check(this.props.keyword, this.input) + "!!"
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.doSubmit}>
          <div className="form-group">
            <p>{this.state.message}</p>
            <label>Guess:</label>
            <input
              type="text"
              className="form-control"
              onChange={this.doChange}
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Enter" />
        </form>
      </div>
    );
  }
}

export default Form;
