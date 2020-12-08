// import the libraries
import React, { Component } from 'react';
// css being imported
import styles from './css/styles.css';


export default class Shop extends Component {
render() {
//my images being called 
    const Product1 = './images/Cyber.jpg';
    const Product2 = '/images/Legion.jpg';
    const Product3 = '/images/Valhalla.jpg';
//images being set up in the HTML
    return (
      <div className="container">
      	<h1>Display three Products</h1>
      		<div className="skull1"><img src={Product1} /></div>
      		<div className="skull2"><img src={Product2} /></div>
      		<div className="skull3"><img src={Product3}/></div>
      </div>
    )
  }
}

