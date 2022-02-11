import React, { Component } from "react";
import InputButton from "./InputButton";

//todo Numeronの判定に変える
//ansがint型の配列　inputがstr型の文字列
let form ="_ _ _ _";
let cursor = 0;
let history = [];//文字列を入れる
let button_x = [10,40,70];
let button_y = [50,62,74,86];
function initializeForm(num,Difficulty){
  form = (Difficulty === "Normal") ? "_ _ _ _" : "_ _ _";
  cursor = 0;
}

function editform(num,formSize){
  if(cursor>formSize-1)return;
  let ary = form.split(" ");
  ary[cursor]=num;
  cursor++;
  console.log(ary)
  form = ary.join(" ");
}

function check(ans, num,formSize) {
  var eat, bite;
  var a, b;
  var str;

  eat = 0;
  bite = 0;
  for (a = 0; a < formSize; a++) {
    if (parseInt(num[a]) === ans[a]) {
      eat++;
    }
    for (b = 0; b < formSize; b++) {
      if (a !== b && parseInt(num[a]) === ans[b]) {
        bite++;
      }
    }
    str = eat + "eat " + bite + "bite\n";
  }
  history.push(num.join("")+" "+str)
  if(eat===formSize){
    history.push("ゲームクリア！！")
  }
  console.log(history)
  return str;
}
function isInclude(form,num){
  let res;
  if ( form.indexOf(num) !== -1) {
    res = true;    
  }
  else{
    res = false;
  }
  return res;
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
      history:history,
      formSize:4,
      Difficulty:"Normal",
    };
    this.inputForm = this.inputForm.bind(this);
  }

  
  
  inputForm(num){
    editform(num,this.state.formSize)
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
    initializeForm(this.state.Difficulty);
    this.setState({
      message: check(this.props.keyword,this.state.form.split(" "),this.state.formSize) + "!!",
      form:form,
      cursor:cursor,
      checkCount:this.state.checkCount+1,
    });
    const element = document.getElementById('box');
    element.scrollTo(0, element.scrollHeight);

  }
  manageButton(num,x,y){
    let button;
    if(num<=9||num===11){
      if(isInclude(this.state.form,num%11)){
        button = 
          <InputButton x={x} y={y} text={num%11}  on={true}/>;
      }
      else{
        button = <div onClick={
          ()=>this.inputForm(num%11,this.state.formSize)}>{/* 11の場所に０のボタンを置きたいため */}
          <InputButton x={x} y={y} text={num%11}  on={false}/>
          </div>;
      }
      
    }
    else{
      if(num===10){
        button = <div onClick={
          ()=>this.deleteForm(0)}>
          <InputButton x={x} y={y} text="←"  />
        </div>;
      }
      else if(num===12){
        button = <div onClick={
          ()=>this.submitForm(0)}>
          <InputButton x={x} y={y} text="✔"  />
        </div>;
      }
    }
  
    return button
  }
  changeDifficulty(){
    const isNormalMode = (this.state.Difficulty === "Normal")
    this.setState({
      formSize : isNormalMode ? 3 : 4,
      form:isNormalMode ? "_ _ _":"_ _ _ _",
      Difficulty:isNormalMode ? "Easy":"Normal",
      cursor:0,
    })
    initializeForm();
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <h1>{this.state.form}</h1>
        <h1>{this.state.checkCount}回</h1>
        {/* todo */}
        <a href="https://calm-bay-090786e10.1.azurestaticapps.net/">最初から遊ぶ</a>{/*todo */}
        <button onClick={()=> this.changeDifficulty()}>難易度変更</button>
        <h2>難易度:{this.state.Difficulty}</h2>

        {button_y.map((item_y,y) => (
          button_x.map((item_x,x) => (
            this.manageButton(y*3+x+1,item_x,item_y)
          ))
        ))}
        
        <div className="box" id="box">
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
