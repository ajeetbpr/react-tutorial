import React from 'react'
import ReactDom from 'react-dom'

class Formtest extends React.Component{
	constructor(props){
		super(props)
		this.state = {value:''}
	}

handleSubmit = (e) => {
	console.log(this.state.value)
	e.preventDefault()
}

handleChange = (e) => {
	this.setState({
		value : e.target.value
	})
}

	render(){
	return(
		<form onSubmit='this.handleSubmit'>
		<input type='text' value={this.state.value} onChange={this.handleChange} />
		<input type='submit' value="Go Ahead" />
		</form>
		)
    }

}


ReactDom.render(
<Formtest />,
document.getElementById('root')
);





