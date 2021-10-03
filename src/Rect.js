import React,{Component} from 'react'
let x=200;
let y=200;
class Rect extends Component {
  x = 0
  y = 0
  width = 0
  height = 0
  color = "white"
  style = {}

  constructor(props){
    super(props)
    this.x = props.x
    this.y = props.y
    this.width = props.w
    this.height = props.h
    this.color = props.c
    this.state={
      style:{
        backgroundColor:this.color,
        position:"absolute",
        left:this.x + "px",
        top:this.y + "px",
        width:this.width + "px",
        height:this.height + "px"
      }
    }
  }
  clicked = ()=>{
    x++
    y++
    this.setState({
      style:{
        backgroundColor:this.color,
        position:"absolute",
        left:x + "px",
        top:y + "px",
        width:this.width + "px",
        height:this.height + "px"
      }
    })
  }

  render(){
    return (
      <>
        <button onClick={this.clicked}>test</button>
        <button style={this.state.style}></button>
      </>
    )
  }
}

export default Rect;