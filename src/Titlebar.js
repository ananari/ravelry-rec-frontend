import React, {Component} from 'react';
import './Titlebar.css'
export default class Titlebar extends Component {
  render(){
    return(
      <header className="header">
        <a className="title" href="https://pure-peak-95236.herokuapp.com/"><h1>Similar pattern finder</h1></a>
      </header>
    )
  }
}