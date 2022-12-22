import { Component } from "react";
import './ProfileForm.css'
import * as usersAPI from '../../utilities/users-api'
import * as profileAPI from '../../utilities/profile-api'
import './ProfileForm.css'



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
    await profileAPI.updateProfileInfo(this.state)
    this.props.handleProfileUpdate()
    this.props.navigate('/homepage')
  }

  render() {
  return (
    <div className="profileForm">
      {this.props.profile ? 
      <div>
          <h4>Edit your profile here. If youre changing your <br></br> identity because you failed, we'll know.</h4>
          <form>
          <label>Please print your name, <br></br>no chicken scratch</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder={this.props.profile.name} required />
          <label>What do you look like?<br></br>#PoultryInMotion</label> 
          <br/>
          <input
            className='CharButton'
            type='image'
            value='./assets/bigBrownBird.gif' 
            name='avatar'
            onClick={this.handleChange}
            src="./assets/bigBrownBird.gif" width="100px" height='100px' alt="" />
          <input 
            className='CharButton'
            type='image'
            value='./assets/whiteBird.gif' 
            name='avatar'
            onClick={this.handleChange}
            src="./assets/whiteBird.gif" width="100px" height='100px' alt="" 
            />
          <input
            className='CharButton'
            type='image'
            value='./assets/redBird.webp' 
            name='avatar'
            onClick={this.handleChange}
            src="./assets/redBird.webp" width="100px" height='100px'alt="" />
            
          <input
            className='CharButton'
            type='image'
            value='./assets/blueBird.gif' 
            name='avatar'
            onClick={this.handleChange}
            src="./assets/blueBird.gif" width="100px" height='100px'alt="" />
        </form>
          <button type='submit' onClick={this.handleUpdateSubmit}>Update!</button>
      </div>
      :
      <div className="secondForm">
          <h4>Thank you for trying out! If it doesn't work out KFC is also hiring</h4>
        <form>
          <label>Whats your name?</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
          <label>What do you look like?</label> 
          <br/>
          <input
            className='CharButton'
            type='image'
            value='./assets/bigBrownBird.gif' 
            name='avatar'
            onClick={this.handleChange}
            src="./assets/bigBrownBird.gif" width="100px" height='100px' alt="" />
          <input 
            className='CharButton'
            type='image'
            value='./assets/whiteBird.gif'
            name='avatar'
            onClick={this.handleChange}
            src="./assets/whiteBird.gif" width="100px" height='100px' alt="" 
            />
          <input
            className='CharButton'
            type='image'
            value='./assets/redBird.webp' 
            name='avatar'
            onClick={this.handleChange}
            src="./assets/redBird.webp" width="100px" height='100px'alt="" />
            
          <input
            className='CharButton'
            type='image'
            value='./assets/blueBird.gif' 
            name='avatar'
            onClick={this.handleChange}
            src="./assets/blueBird.gif" width="100px" height='100px'alt="" />
          <button type='submit' onClick={this.handleSubmit}>submit</button>
        </form>
      </div>
      }
    </div>
  )
  }
}