
// 生命周期
// 实现一个表
import React from 'react';


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: new Date()}
  }
  componentDidMount (){
    this.times = setInterval(() =>{
       this.activeTime();
    },1000)
  }

  componentWillUnmount(){
      clearInterval(this.times);
      this.times = null;
  }

  activeTime (){
    this.setState({
       data: new Date()
    })
  }

  render() {
    return (
      <div>
        <p>现在是{this.state.data.toLocaleTimeString()}</p>
      </div>
    );
  }
}
export default Clock;
