require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import Ifdrawing from './conditions_drawing/index';
import StateAndLife from './State_and_life_cycle/index';
import ArrDraw from './Arr_drawing/index';
import Theevent from './Theevent/index';
import Fromcontrols from './Formcontrols/index';
import {NavLink} from 'react-router-dom';
import {BrowserRouter as Router , Route} from 'react-router-dom';
//let yeomanImage = require('../images/yeoman.png');
class AppComponent extends React.Component {
  render() {
    return (
          <div id="mainapp">
             <h1 className ="homenav"> react学习笔记 </h1>
             <div className="homeroute">
                 <Router>
                   <div>
                     <div className="homenavlist">
                        <NavLink exact to='/' className="href_go" >条件渲染</NavLink>
                        <NavLink  to='/StateAndLife' className="href_go" >状态和生命周期</NavLink>
                        <NavLink  to='/ArrDraw' className="href_go" >数组渲染</NavLink>
                        <NavLink  to='/Theevent' className="href_go" >事件处理</NavLink>
                        <NavLink  to='/Fromcontrols' className="href_go" >表单控件</NavLink>
                     </div>
                      <Route exact path="/"  component = {Ifdrawing}/>
                      <Route  path="/StateAndLife"  component = {StateAndLife}/>
                      <Route  path="/ArrDraw"  component = {ArrDraw}/>
                      <Route  path="/Theevent"  component = {Theevent}/>
                      <Route  path="/Fromcontrols"  component = {Fromcontrols}/>
                   </div>
                 </Router>
             </div>

          </div>
    );
  }
}

AppComponent.defaultProps = {

};
export default AppComponent;
