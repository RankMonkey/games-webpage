// imoprt the libraries
import React, { Component } from 'react';



export default class LandingPage extends Component {
render() {
//call of the image
    const img5 = './images/Xbox.jpg';

// returning the images
    return (
      <div className="container">
      	<h1>My Landing Page</h1>
      		<div><img src={img5} alt="Xbox logo"/></div>
      </div>
    )
  }
}

