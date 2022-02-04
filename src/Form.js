import React, { Component } from "react";
import InputButton from "./InputButton";
//todo Numeronの判定に変える
//ansがint型の配列　inputがstr型の文字列
function check(ans, input) {
  var eat, bite;
  var num = [0, 0, 0, 0];
  var a, b;
  var str;

  num[0] = parseInt(input / 1000, 10);
  num[1] = parseInt((input - num[0] * 1000) / 100, 10);
  num[2] = parseInt((input - num[0] * 1000 - num[1] * 100) / 10, 10);
  num[3] = parseInt(input - num[0] * 1000 - num[1] * 100 - num[2] * 10, 10);

  eat = 0;
  bite = 0;
  for (a = 0; a < 4; a++) {
    if (num[a] === ans[a]) {
      eat++;
    }
    for (b = 0; b < 4; b++) {
      if (a !== b && num[a] === ans[b]) {
        bite++;
      }
    }
    str = "eat" + eat + " bite" + bite;
  }
  return str;
}
class Form extends Component {
  input = "";
  text = "";
  constructor(props) {
    super(props);
    this.state = {
      message: "4桁の数字を入力してください"
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
            <h1>_ _ _ _</h1>
            <label>Guess:</label>
            {/** todo */}
            <InputButton x="10" y="50" text="1" onClick="" />
            <InputButton x="40" y="50" text="2" />
            <InputButton x="70" y="50" text="3" />
            <InputButton x="10" y="62" text="4" onClick="" />
            <InputButton x="40" y="62" text="5" />
            <InputButton x="70" y="62" text="6" />
            <InputButton x="10" y="74" text="7" onClick="" />
            <InputButton x="40" y="74" text="8" />
            <InputButton x="70" y="74" text="9" />
            <InputButton x="10" y="86" text="←" onClick="" />
            <InputButton x="40" y="86" text="0" />
            <InputButton x="70" y="86" text="✔" />
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
