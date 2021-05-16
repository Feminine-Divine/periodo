import styles from './profile.module.css';
import React, { Component } from 'react';
import DisplayImage from './imageupload.js';


export default class Profile extends Component {
	constructor(props) {
		super(props)

		this.state = {
			username: '',
			bio: '',
      name: '',

		}
	}

	handleUsernameChange = event => {
		this.setState({
			username: event.target.value
		})
	}

	handleBioChange = event => {
		this.setState({
			bio: event.target.value
		})
	}

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    })
  }


	handleSubmit = event => {
    event.preventDefault();
    document.getElementById('username').innerHTML = `@${this.state.username}` ;
    document.getElementById('bio').innerHTML = `${this.state.bio}` ;
    document.getElementById('name').innerHTML = `${this.state.name}` ;

	}

	render() {
		const { username, bio, name} = this.state
		return (
      <>
      <div className={styles.container}>
        <div className={styles.contentBg}>
          <main className={styles.main}>
            <label id = "name" className={styles.title}>NAME</label>
            <img src="placeholder_icon.png" alt="profile-picture" className={styles.profilePic}/>
            <DisplayImage className={styles.imageDisplay} />
              <label id = "username" className={styles.userTag}>
              @username
              </label>
              <label id = "bio" className={styles.bio}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </label>
          </main>
            </div>
      <form onSubmit={this.handleSubmit} className={styles.profileForm}>
      <h2 className={styles.profileHead}>MY PROFILE</h2>
      <div className={styles.Name}>
        <label className={styles.nameHead}>What are you called in the real world?</label>
        <input
          className={styles.nameText}
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={this.handleNameChange}
        />
      </div>
        <div className={styles.userInput}>
          <label className={styles.userHead}>What would you like us to call you?</label>
          <input
            className={styles.userText}
            type="text"
            placeholder="Username"
            value={username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div className={styles.bioInput}>
          <label className={styles.bioHead}>Tell us a little bit about yourself. Remember, keep it short and sweet!</label>
          <textarea
            className={styles.bioText}
            placeholder="Bio"
            value={bio}
            onChange={this.handleBioChange}
          />
        </div>
        <button type="submit" className={styles.submitBtn}>Submit</button>
      </form>
    </div>
  </>
		)
	}
}
