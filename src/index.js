import React from 'react'
import ReactDom from 'react-dom'


// class Clock extends React.Component{
// 	constructor(props){
// 		super(props)
// 		this.state = { 
//           date : new Date()
// 		}
// 	}

// 	componentDidMount(){
//         setInterval( ()=> this.start(), 1000);
// 	}
// 	componentWillUnmount(){

// 	}
// 	start(){
// 		this.setState({
// 			date: new Date()
// 		});
// 	}
//    render(){
//    	return <h1>Time is : {this.state.date.toLocaleTimeString()}</h1>
//    }
// }


class Inc extends React.Component{
	constructor(props){
		super(props);
		this.state = { counter : 0}
		this.increment = this.increment.bind(this);
	}

	render(){
		return <button onClick= {this.increment}>Value is {this.state.counter}</button>
	}

	increment = (e) => {
		e.preventDefault();
		this.setState({
           counter : this.state.counter + 1
		});
	}
} 


ReactDom.render(
<Inc/>,
document.getElementById('root')
);





