import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      name:"Sanaa",
      data:{}
    }
  }
  
  getdata=(name)=>{
    let data ={} ;
    fetch(`http://api.weatherstack.com/current?access_key=35381ddac74e2dbd44ec915bb3e139bb&query=${name}`).then(res=>res.json()).then(res=>data=res);
   this.setState({data})
    return data;
  }
  
  render() {
  this.getdata('sanaa')
  console.log(this.state.data);  

    return (
      <div>
      
      </div>
      )
    }
  }
  
  export default App
  
  