import React, {useEffect}  from "react";
import { useState } from "react";
import ReactDOM from 'react-dom';



class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

if (typeof window !== 'undefined') {
    ReactDOM.render(<Profile />,document.getElementById("root"));
}

//ReactDOM.render(
//  <NameForm />,
//  document.getElementById('root')
//);

export default Profile;
