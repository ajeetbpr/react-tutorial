import React from 'react'
import ReactDom from 'react-dom'

function ToonList(props){
	const list  = props.cartoon
	const toons = list.map((list, index)=> <li key={index}>{list}</li>)
    return <ul>{
    	list.map((list, index)=> <li key={index}>{list}</li>)
    }</ul>
}
const cartoons = ['Pikachu', 'Alladin', 'Tom', 'Tom']

ReactDom.render(
<ToonList cartoon={cartoons} />,
document.getElementById('root')
);





