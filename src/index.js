import React from 'react'
import ReactDom from 'react-dom'

function Cartoon(props){
   return<h1>hello, {props.name} on {props.show}</h1>
}

function Show(){
	return <div>
	<Cartoon name='Ajeey' show='pokemon' />
	<Cartoon name='Awrwerw' show='porwrwon' />
	</div>
}


ReactDom.render(
<Show/>,
document.getElementById('root')
);


