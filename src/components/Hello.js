//Using the Jsx way of the react 

import React, { Component } from 'react'

const Hello = () => {
    //this is for learning the Concept of the JSX and the normal HTML rendering differentions
    //React JSX provides the flexing for creating the elements on to the dom without being doing the .append or document.createElement methods

    // return(
    //   <div>
    //     <h1>Hello World</h1>
    //   </div>
    // )
    //The equivalen Way rendering the hello World as shown from te step 9 to 13 is similar to the 21 to 23 lines
    //The other way of the above pattern is

    /*
      React.createElement('div',optionsToBePassed, Text or another React.createElement)
    */

    return(
      React.createElement('div',{},React.createElement('h1',{id: 'scenary'}, 'Hello Tag'))
    )
}

export default Hello