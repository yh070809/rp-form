import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './form.css';
class Form extends Component {
  render() {
    return (
      <div className="form-container"> 
      <div className="form-row">
        <div className="userinfo">
            Username:   
        </div>
        <div id="input-container">
            <input id="input-part" placeholder="Username"/>
        </div>
      </div>

      <div className="form-row">
        <div  className="userinfo">
            Name
        </div>
        <div  id="input-container">
            <input id="input-part" placeholder="Name"/>
        </div>
      </div>

      <div className="form-row">
        <div  className="userinfo">
            Email
        </div>
        <div  id="input-container">
            <input id="input-part" placeholder="Email"/>
        </div>
      </div>
      
        <div className="form-row">
            <div  className="userinfo">
                Password
            </div>
            <div  id="input-container">
                <input id="input-part" placeholder="Password"/>
            </div>
        </div>
      </div>
    );
  }
}

export default Form;