import React from "react"
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
import BeautyStars from 'beauty-stars';
import style from "./Flow.module.css"

export default class App extends React.Component {
  state = { 
  value1: 0,
  value2: 0,
  value3: 0,
 };
  colour = "#ffffff";
  size = "18px";
  render() {
    return (
      <>
        <div className={style.container}>
          <p className={style.heading}>Blood Flow:</p>
          <div className={style.stars}>
          <BeautyStars
            value={this.state.value1}
            onChange={value => this.setState({value1: value })}
            inactiveColor={this.colour}
            size={this.size}
          />
          </div>
        </div>
        <div className={style.container}>
          <p className={style.heading}>Period Pain:</p>
          <div className={style.stars}>
          <BeautyStars
            value={this.state.value2}
            onChange={value => this.setState({ value2: value })}
            inactiveColor={this.colour}
            size={this.size}
          />
          </div>
        </div>
        <div className={style.container}>
          <p className={style.heading}>Mood:</p>
          <div className={style.stars}>
          <BeautyStars
            value={this.state.value3}
            onChange={value => this.setState({ value3: value })}
            inactiveColor={this.colour}
            size={this.size}
          />
          </div>
        </div>
      </>
    );
  }
}