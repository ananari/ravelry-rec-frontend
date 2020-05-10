import React, {Component} from 'react';
import './Titlebar.css'
export default class Titlebar extends Component {
  render(){
    return(
      <div className="header">
        <a href="https://pure-peak-95236.herokuapp.com/"><h1>Similar pattern finder</h1></a>
      </div>
    )
  }
}