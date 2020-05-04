import React, {Component} from 'react';

const testURL = "https://mysterious-spire-72701.herokuapp.com/";
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
      result: ""
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }
  handleSubmit = event => {
    event.preventDefault();
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
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="textarea" name="query" value={this.state.query} onChange={event => this.handleChange(event)}/>
          <input type="submit" />
        </form>
        <p>{this.state.result}</p>
      </div>
    )
  }
}