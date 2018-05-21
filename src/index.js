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
		const celsius = scale === 'f' ? (temp - 32)*5/9 : temp;
		const fehrenheit = scale === 'c' ? (temp* 9/5) + 32 : temp;
		return(
			<div>
           <fieldset>
           <legend>Scale Celsius</legend>
           <input value={celsius} onChange={this.handleCelsius}/>
           </fieldset>

           <fieldset>
           <legend>Scale Fehrenheit</legend>
           <input value={fehrenheit} onChange={this.handleFehrenheit}/>
           </fieldset>
           </div>
		)
	}
}

ReactDom.render(
<Calculator />,
document.getElementById('root')
);





