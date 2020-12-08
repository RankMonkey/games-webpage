// import all the libraries from react , react-dom  

import React, { Component } from "react";
import ReactDOM from "react-dom";
// imoprt EasyEdit and type from react-easy-edit
import EasyEdit, { Types } from "react-easy-edit";

// import "./styles.css";

export default class Profile extends Component {
  //used a to set the inital state of the component 
  constructor(props) { 
    super(props);
    this.state = {
      editMode: false
    };
  }
// created a profile where you can edit in line and this is done with easy edit and editmode
// easy edit and editmode are used to control the state of multiple components by using the editmode to control the prop
  render() {
    return (
      <div>
        <h3>Save and Edit your Profile</h3>
         
  
        <EasyEdit
          type={Types.TEXT}
          value="EmailAddress"
          onSave={() => {
            console.log("saved!");
          }}
          editMode={this.state.editMode}
          instructions={"Toggle me!"}
        />

        <EasyEdit
          type={Types.TEXT}
          value="First name"
          onSave={() => {
            console.log("saved!");
          }}
          editMode={this.state.editMode}
          instructions={"Toggle me!"}
        />

                <EasyEdit
          type={Types.TEXT}
          value="Last name"
          onSave={() => {
            console.log("saved!");
          }}
          editMode={this.state.editMode}
          instructions={"Toggle me!"}
        />
// you can save and edit each individual
        <EasyEdit
          type={Types.TEXTAREA}
          value="Tell us why you love gaming"
          onSave={() => {
            console.log("saved!");
          }}
          editMode={this.state.editMode}
          instructions={"Toggle me!"}
        />
 // or you can save and edit each individual
       <EasyEdit
          type={Types.TEXT}
          value="GamerTag"
          onSave={() => {
            console.log("saved!");
          }}
          editMode={this.state.editMode}
          instructions={"Toggle me!"}
        />
// for each time you click on the "button" your allowed to edit and save everything whats within that button
        <button
          onClick={() => {
            this.setState({ editMode: !this.state.editMode });
          }}
        >
          Edit
        </button>
      </div>
    );
  }
}
