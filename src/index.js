import React from 'react'
import ReactDom from 'react-dom'

class Calculator extends React.Component{
	constructor(props){
		super(props)
		this.state = { scale: 'c', temp:0}
	}

handleCelsius = (e)=> {
	this.setState({scale: 'c', temp:e.target.value})
	console.log('efjei')
}

handleFehrenheit = (e)=> {
	this.setState({scale: 'f', temp:e.target.value})
	console.log('efjei')
}

	render(){
		const temp = this.state.temp
		const scale = this.state.scale
		const celsius = scale === 'f' ? convert(temp, toCelsius) : temp;
		const fehrenheit = scale === 'c' ? convert(temp, toFehrenheit) : temp;
		return(
			<div>
           
           <Inputs scalename="Celsius" value={celsius} func={this.handleCelsius}/>
           <Inputs scalename="Fehrenheit" value={fehrenheit} func={this.handleFehrenheit}/>
           </div>
		)
	}
}

function convert(temp, convertFunction){
  return convertFunction(temp)
}

function toCelsius(fehrenheit){
  return(fehrenheit - 32)*5/9
}

function toFehrenheit(celsius){
	return(celsius * 9/5) + 32
}

class Inputs extends React.Component{
	render(){
		return(
			<fieldset>
           <legend>Scale this.props.scalename</legend>
           <input value={this.props.value} onChange={this.props.func}/>
           </fieldset>
		)
	}
}

ReactDom.render(
<Calculator />,
document.getElementById('root')
);





