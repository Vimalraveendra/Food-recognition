import React, { Component } from 'react';
import './App.css';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import FoodDisplay from '../components/FoodDisplay/FoodDisplay';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';


const particleOptions ={

  particles: {
     number:{
       value:80,
       density:{
        enable:true,
        value_area:600
       } 
     }
  }
}
 
const app = new Clarifai.App({
 apiKey:process.env.REACT_APP_API_KEY
});


class App extends Component {
	state={
		input:'',
		imageUrl:'',
		foods:[],
    error:''
	}

   onChangeEvent = (e)=>{
   	 this.setState({input:e.target.value})
   }

   onSubmit =()=>{
    
   	this.setState({imageUrl:this.state.input})
    if(this.state.input){
   	 app.models.predict(  Clarifai.FOOD_MODEL, this.state.input)
   	 .then(response=>this.setState({
      foods:response.outputs[0].data.concepts
      }))
     .catch(err=>{
      this.setState({error:'Sorry! Please enter a valid url'})
     })
    this.setState({input:''})
   }else{
   this.setState({error:'Sorry! Please enter a valid url'})
 }
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
           Food-Recognition
        </div>
            <Particles className='particles'
            params={particleOptions} />
            <ImageLinkForm 
            onChangeEvent={this.onChangeEvent}
            onSubmit={this.onSubmit}
            input={this.state.input}
            />
            <FoodDisplay
            imageUrl={this.state.imageUrl}
            foods={this.state.foods}
            error={this.state.error}
          />
    </div>
    );
  }
}


export default App;
