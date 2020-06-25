import React from 'react';
import logo from './logo.svg';
import HelloWorld from './components/HelloWorld'
import Greet from './components/Greet'
import './App.css';
import Hello from './components/Hello'

function App() {
  return (
    //in functional components to have the dynamic data
    // we need to pass the props that whic can be done by using
    <div>
      {/* <HelloWorld name="raja" color="red"/>
      <Greet>this is the greet child</Greet> */}
      <Hello/>
      {
        /* JSX allows us to write HTML elements in JavaScript 
          and place them in the DOM without any createElement() 
          and/or appendChild() methods. 
          JSX converts HTML tags into react elements. You are not required to use JSX, but JSX makes it easier to write React applications.  
        */}

      
    </div>
  );
}

export default App;
