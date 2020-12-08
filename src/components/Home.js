// import the react and component
import React, { Component } from 'react';

// used an export default class in case I need to set props
export default class Home extends Component {
render() {

// set the img to img
const img = 'https://i.pinimg.com/originals/d4/db/4a/d4db4af720b170fb993af8bee88f6a86.jpg';

// call the imgae to display
    return (
      <div>
      	<h1>My Home</h1>
      		<img src={img} className="img-fluid" style={{ width: 550 }} />
    </div>
    )
  }
}
