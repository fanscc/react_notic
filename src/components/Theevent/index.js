
// 生命周期
// 实现一个表
import React from 'react';
function Domshow(props){
  if(!props.islogin){
    return (
      <div>
        <p>没登录</p>
      </div>
    )
  }else{
    return (
      <div>
        <p>已经登录</p>
      </div>
    )
  }
}

class Events extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      islogin:false
    }
    //绑定this
    this.handeclick = this.handeclick.bind(this);
  }
  handeclick(){
    debugger
    this.setState((prevState) => ({
       islogin:!prevState.islogin
    }))
  }

   render(){
     return (
       <div>
       <Domshow  islogin={ this.state.islogin} />
       <button onClick={this.handeclick}>
         {this.state.islogin ? '退出登录' : '登录'}
       </button>
       </div>
     )
   }
}

export default Events;
