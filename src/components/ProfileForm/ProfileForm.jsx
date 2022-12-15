import { Component } from "react";


export default class ProfileForm extends Component {

  state = {
    name: "",
    avatar: ""
    //Do I need Error?
  };

  
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
      //Do I need Error?
    });
  }

  handleSubmit = async (evt) => {
    evt.preventDefault();
    const {name, avatar} = this.state; 
  }

  //Do I need Render?
  render() {
  return (
    <div>
      <div>
          <h4>Employee, Congratulations on attaining this position at Karen Station. Tell us about yourself</h4>
        <form className="Profile-Form">
          <label>Employee, print your name</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
          <label>What do you look like?</label> 
          <br/>
          
          <option value="">Man</option>
          <option value="">Woman</option>
        </form>
      </div>
    </div>
  )
  }










}