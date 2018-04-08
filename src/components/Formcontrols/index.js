
// 生命周期
// 实现一个表
import React from 'react';
class Formcontrols extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user:'12',
      check:true,
      gender:'woman'
    }
    //绑定this
    this.handesubmit = this.handesubmit.bind(this);
    this.changesvalue = this.changesvalue.bind(this);
  }
  handesubmit(e){
    alert('input表单的数据是'+this.state.user+'复选框'+this.state.check+'下拉框选择的值'+this.state.gender)
    e.preventDefault();
  }

  changesvalue(e){
    debugger
    let newstate = {};
    newstate[e.target.name] = e.target.name == 'check' ? e.target.checked : e.target.value
    this.setState(newstate)
  }

   render(){
     return (
       <div>
          <input type="text" name='user' defaultValue = { this.state.user } onChange = {this.changesvalue} />
          <input type="checkbox" name='check' checked = {this.state.check} onChange = {this.changesvalue} />
          <select name="gender" onChange={this.changesvalue} value={this.state.gender}>
                <option value="man">帅哥</option>
                <option value="woman">美女</option>
           </select>
          <p>{this.state.user}</p>
          <button onClick={this.handesubmit}>提交</button>
       </div>
     )
   }
}

export default Formcontrols;
