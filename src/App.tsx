import React, { Component } from 'react';
import api from './Api';

class App extends Component{
  
  state={
    cursos: [],
  }

  async componentDidMount(){
    const response = await api.get('');
    console.log(response.data)
    this.setState({cursos: response.data});
  }
  
  render(){

    const {cursos} = this.state;

     return(
       <div>
         <h1>
           Listar os Cursos
         </h1>
         {console.log(cursos)}
         {cursos.map(curso => (
           <li key={curso}>

           </li>
         ))}
       </div>
     )
   }
}

export default App;
