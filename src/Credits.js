import React, {Component} from 'react';
import './Credits.css'

export default class Credits extends Component {
  render(){
    return(
      <footer>
        <p>This site made by <a href="https://github.com/k-christensen/Similar-patterns-ravelry">k-christensen</a> and
         <a href="https://github.com/ananari/ravelry-similar-patterns-frontend"> ananari</a>. Not affiliated with Ravelry.</p>
      </footer>
    )
  }
}