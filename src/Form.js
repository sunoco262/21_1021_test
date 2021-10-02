import React, { Component } from "react";

function check(ans, guess) {
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
      title: "input form",
      message: "パスワードを入力してください"
    };
    this.doChange = this.doChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
  }

  doChange(event) {
    this.input = event.target.value;
    this.text = check(this.props.keyword, this.input);
  }

  doSubmit(event) {
    this.setState({
      title: "send form",
      message: this.text + "!!"
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="alert alert-primary mt-3">
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
        </div>
      </div>
    );
  }
}

export default Form;
