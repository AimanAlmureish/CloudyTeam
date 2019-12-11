import React, { Component } from 'react'
import Weather from './Weather';
import './STYLING/kvass.css'
import './STYLING/style.css'


export class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      name:"Sanaa",
      data:null
    }
  }
  
  getdata=(name)=>{
    let data ={} ;
    fetch(`http://api.weatherstack.com/current?access_key=35381ddac74e2dbd44ec915bb3e139bb&query=${name}`).then(res=>res.json()).then(res=>this.setState({data:res}));
   
    return data;
  }
  componentDidMount(){
    this.getdata('sanaa')
  }
  render() {
    let finalData = {}
   if (this.state.data !== null){
     finalData = {temperature: this.state.data.current.temperature ,time:this.state.data.location.localtime, city:this.state.data.location.name, desc:this.state.data.current.weather_descriptions,cloud: this.state.data.current.cloudcover,pressure: this.state.data.current.pressure,humidity:this.state.data.current.humidity,wind:this.state.data.current.wind_speed}
   } 
console.log(this.state.data);
 

    return (
      <div>
 <Weather data={finalData} /> 
      </div>
      )
    }
  }
  
  export default App
  
  