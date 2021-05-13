import React, { Component } from "react";
import styles from "./upload.module.css";

class DisplayImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };

    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img)
      });
    }
  };

  render() {
    return (
          <div className={styles.uploadContent}>
            <img src={this.state.image} className={styles.profilePicAfter}/>
             <img src="img_upload.png" className={styles.uploadIcon} alt="Upload Profile Picture" width="20px" height="20px"/>
            <input type="file" id='file' className={styles.upload} name="myImage" onChange={this.onImageChange} />
          </div>
    );
  }
}
export default DisplayImage;
