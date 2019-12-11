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
  handelChange=(e)=>{
   let a= e.target.innerText;
    this.setState({name: a})
    console.log(this.state.name , "Clicked");
  }
  
  getdata=(name)=>{
    let data ={} ;
    fetch(`http://api.weatherstack.com/current?access_key=c2b96cca3030c567906cf2d51c8d5697&query=${name}`).then(res=>res.json()).then(res=>this.setState({data:res}));
   
    return data;
  }
  componentDidMount(){
    this.getdata(this.state.name)
  }
  componentWillUnmount = () => {
    this.setState({data:null})
  }
  
  // comm(){
  //   this.getdata(this.state.name)
  // }
  render() {
    let finalData = {}
   if (this.state.data !== null){
     finalData = {temperature: this.state.data.current.temperature ,time:this.state.data.location.localtime, city:this.state.data.location.name, desc:this.state.data.current.weather_descriptions,cloud: this.state.data.current.cloudcover,pressure: this.state.data.current.pressure,humidity:this.state.data.current.humidity,wind:this.state.data.current.wind_speed}
   } 
console.log(this.state.data);
 

    return (
      <div>
 <Weather data={finalData} onClick={this.handelChange} /> 
      </div>
      )
    }
  }
  
  export default App
  
  