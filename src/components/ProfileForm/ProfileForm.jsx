import { Component } from "react";
import './ProfileForm.css'


export default class ProfileForm extends Component {

  state = {
    name: "",
    avatar: './assests/mario.png'
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

  Selected = (evt) => {

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
          <button 
            type='button'
            value='./assests/mario.png' 
            name='avater'
            // onSelect={}
            >
            <img src="./assests/mario.png" alt="" />
            </button>
          <option 
          className='Profile-Pic' 
          value="" 
          data-style='background-image: url(./assests/mario.png)'></option>
          <option value="">Woman</option>
          <input type="image" name="" id="" src="./assests/mario.png"/>
          <button type='sumbit' onClick={this.handleSubmit}></button>
        </form>
      </div>
    </div>
  )
  }










}