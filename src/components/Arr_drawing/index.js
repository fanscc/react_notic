
// 生命周期
// 实现一个表
import React from 'react';
function domlist(props){
   const silderl = (
     <ul>
      {
        props.prama.arrData.map((item,index) =>{
          <li key={index}>{item.title}</li>
        })
      }
     </ul>
   )
   const silderr = (
     <div>
     {
      props.prama.arrData.map((item,index) =>{
          <p key = {index}>{item.conten}</p>
      })
    }
     </div>
   )
   return (
     <div>
        {silderl}
        {silderr}
     </div>
   )
}

const props = [
  {title:'cc1',conten:'dsadas1'},
  {title:'cc2',conten:'dsadas2'}
  {title:'cc3',conten:'dsadas3'}
]

class ArrDraw extends React.Component {
   render(){
     return (
       <domlist  prama = {props}/>
     )
   }
}

export default ArrDraw;
