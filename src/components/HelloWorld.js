//Function Component way of utilising 
import React from 'react'

// this is the functional components
// the functional components are numb and donot have any state to store the data
// the functional components are the ones that donot have any class extension


/*props
  the explanation of the props is that they are the params that are being passed from the place where we wanted to utilise the components
  and with what dynamic data that we wanted to use .
*/
function HelloWorld(props){
  return(
    <h1>My name is {props.name} And my color is {props.color}</h1>
  )  
}

export default HelloWorld