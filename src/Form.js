import React, { Component } from "react";

//todo Numeronの判定に変える
//ansがint型の配列　inputがstr型の文字列
function check(ans, input) {
  var eat,bite
  var num = [0,0,0,0];
  var a,b;
  var str;

  num[0] = parseInt(input / 1000,10)
  num[1] = parseInt((input - (num[0]*1000))/100,10)
  num[2] = parseInt((input - (num[0]*1000) - (num[1]*100))/10,10)
  num[3] = parseInt((input - (num[0]*1000) - (num[1]*100) - (num[2]*10)),10)

  eat = 0;
  bite = 0;
  for(a=0;a<4;a++)
  {
    if(num[a] === ans[a]){
      eat++;
    }
    for(b=0;b<4;b++){
      if(a !== b && num[a] === ans[b]){
        bite++;
      }
    }
    str = "eat" + eat + " bite" + bite
  }

  console.log (str);
  
  return(str)

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
