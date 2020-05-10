import React, {Component} from 'react';
import './Testform.css'

const testURL = "https://mysterious-spire-72701.herokuapp.com";
let postObj = {
  method: "POST",
  headers: {
    "X-Requested-With": "XMLHttpRequest"
  }
}

export default class Testform extends Component {

  constructor(){
    super();
    this.state = {
      query: "",
      result: "",
      error: ""
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setState({error: "Loading..."})
    console.log(this.state.query)
    let formData = new FormData();
    formData.append("query", this.state.query)
    postObj["body"] = formData
    fetch(testURL, postObj)
    .then(res => res.json())
    .then(json => {this.setState(json)})
    .catch(error => console.log(error))
  }

  render(){
    return(
      <div className="searchbar">
        <div className="text">
          <p>Welcome! This website will help you find similar Ravelry patterns to a given pattern. Simply enter a Ravelry pattern
             URL in the search bar and press "Find similar patterns" to receive a URL containing links to similar patterns.</p>
        </div>
        <div>
          <form onSubmit={event => this.handleSubmit(event)}>
            <input type="textarea" name="query" value={this.state.query} onChange={event => this.handleChange(event)}/>
            <input type="submit" value="Find similar patterns"/>
          </form>
        </div>
        <div className="text">
          {this.state.result ? <a href={this.state.result} target="_blank" rel="noopener noreferrer">{this.state.result}</a> : null}
          {this.state.error ? <p>{this.state.error}</p> : null}
        </div>
      </div>
    )
  }
}