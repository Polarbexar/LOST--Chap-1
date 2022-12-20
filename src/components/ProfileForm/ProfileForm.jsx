import { Component } from "react";
import { useNavigate } from 'react-router-dom'
import './ProfileForm.css'
import * as usersAPI from '../../utilities/users-api'
import * as profileAPI from '../../utilities/profile-api'



export default class ProfileForm extends Component {
  state = {
    name: "",
    avatar: './assets/peach.png'
  };
  
  handleChange = async (evt) => {
    evt.preventDefault();
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  
  handleSubmit = async (evt) => {
    evt.preventDefault();
    await usersAPI.addProfileInfo(this.state)
    this.props.handleProfileUpdate()
    this.props.navigate('/homepage')
  }
  
  handleUpdateSubmit = async (evt) => {
    evt.preventDefault();
    console.log(this.state)
    await profileAPI.updateProfileInfo(this.state)
    this.props.handleProfileUpdate()
    this.props.navigate('/homepage')
  }

  render() {
  return (
    <div>
      {this.props.profile ? 
      <div>
          <h4>Employee, Change your profile here. Tell us about yourself</h4>
        <form className="Profile-Form">
          <label>Employee, print your name</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
          <label>What do you look like?</label> 
          <br/>
          <input
            className='CharButton'
            type='image'
            value='./assets/mario.png' 
            name='avatar'
            onClick={this.handleChange}
            src="./assets/mario.png" width="200px" height='200px' alt="" />
          <input 
            className='CharButton'
            type='image'
            value='./assets/bowser.gif' 
            name='avatar'
            onClick={this.handleChange}
            src="./assets/bowser.gif" width="300px" height='200px' alt="" 
            />
          <input
            className='CharButton'
            type='image'
            value='./assets/peach.png' 
            name='avatar'
            onClick={this.handleChange}
            src="./assets/peach.png" width="200px" height='200px'alt="" />
            
          <input
            className='CharButton'
            type='image'
            value='./assets/luigi.png' 
            name='avatar'
            onClick={this.handleChange}
            src="./assets/luigi.png" width="300px" height='200px'alt="" />
          <button type='submit' onClick={this.handleUpdateSubmit}>submit</button>
        </form>
      </div>
      :
      <div>
          <h4>Employee, fill out this form so we can identify your remains. Tell us about yourself</h4>
        <form className="Profile-Form">
          <label>Employee, print your name</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
          <label>What do you look like?</label> 
          <br/>
          <input
            className='CharButton'
            type='image'
            value='./assets/mario.png' 
            name='avatar'
            onClick={this.handleChange}
            src="./assets/mario.png" width="200px" height='200px' alt="" />
          <input 
            className='CharButton'
            type='image'
            value='./assets/bowser.gif' 
            name='avatar'
            onClick={this.handleChange}
            src="./assets/bowser.gif" width="300px" height='200px' alt="" 
            />
          <input
            className='CharButton'
            type='image'
            value='./assets/peach.png' 
            name='avatar'
            onClick={this.handleChange}
            src="./assets/peach.png" width="200px" height='200px'alt="" />
            
          <input
            className='CharButton'
            type='image'
            value='./assets/luigi.png' 
            name='avatar'
            onClick={this.handleChange}
            src="./assets/luigi.png" width="300px" height='200px'alt="" />
          <button type='submit' onClick={this.handleSubmit}>submit</button>
        </form>
      </div>
      }
    </div>
  )
  }










}