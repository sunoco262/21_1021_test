import React, { Component } from "react";
import InputButton from "./InputButton";

//todo Numeronの判定に変える
//ansがint型の配列　inputがstr型の文字列
let form ="_ _ _ _";
let cursor = 0;
let history = [];//文字列を入れる
let button_x = [10,40,70];
let button_y = [50,62,74];

function initializeForm(num){
  form ="_ _ _ _";
  cursor = 0;
}

function editform(num){
  if(cursor>3)return;
  let ary = form.split(" ");
  ary[cursor]=num;
  cursor++;
  console.log(ary)
  form = ary.join(" ");
}

function check(ans, num) {
  var eat, bite;
  var a, b;
  var str;

  eat = 0;
  bite = 0;
  for (a = 0; a < 4; a++) {
    if (parseInt(num[a]) === ans[a]) {
      eat++;
    }
    for (b = 0; b < 4; b++) {
      if (a !== b && parseInt(num[a]) === ans[b]) {
        bite++;
      }
    }
    str = eat + "eat " + bite + "bite\n";
  }
  history.push(num.join("")+" "+str)
  if(eat===4){
    history.push("ゲームクリア！！")
  }
  console.log(history)
  return str;
}
class Form extends Component {
  input = "";
  text = "";
  constructor(props) {
    super(props);
    this.state = {
      message: "4桁の数字を入力してください",
      form:form,
      cursor:cursor,
      checkCount:0,
      history:history
    };
    this.inputForm = this.inputForm.bind(this);
  }

  
  
  inputForm(num){
    editform(num)
    this.setState({
      form:form,
      cursor:cursor
    })
  };
  deleteForm(){
    let ary = form.split(" ");
    console.log(cursor)
    if(cursor > 0)cursor--;
    console.log(cursor)
    ary[cursor]="_";
    form = ary.join(" ");
    this.setState({
      form:form,
      cursor:cursor
    })
  }
  submitForm() {
    if ( this.state.form.indexOf('_') !== -1) {
      return 0
    }
    console.log(this.state.form.split(" "))
    initializeForm();
    this.setState({
      message: check(this.props.keyword,this.state.form.split(" ")) + "!!",
      form:form,
      cursor:cursor,
      checkCount:this.state.checkCount+1
    });
    const element = document.getElementById('box');
    element.scrollTo(0, element.scrollHeight);

  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <h1>{this.state.form}</h1>
        <h1>{this.state.checkCount}回</h1>
        {/* todo */}
        <a href="https://calm-bay-090786e10.1.azurestaticapps.net/">最初から遊ぶ</a>
        {button_x.map((item_x,x) => (
          button_y.map((item_y,y) => (
            <div onClick={()=>this.inputForm(y*3+x+1)}><InputButton x={item_x} y={item_y} text={y*3+x+1}  /></div>
          ))
        ))}
        
        <div onClick={()=>this.deleteForm()}><InputButton x="10" y="86" text="←"  /></div>
        <div onClick={()=>this.inputForm("0")}><InputButton x="40" y="86" text="0"  /></div>
        <div onClick={()=>this.submitForm()}><InputButton x="70" y="86" text="✔"  /></div>
        <div class="box" id="box">
          <h2>履歴</h2>
          {this.state.history.map(item => (
            <div key={item}>
              <p>{item}</p>
            </div>
          ))}
          <p>←</p>
        </div>
      </div>
    );
  }
}

export default Form;
