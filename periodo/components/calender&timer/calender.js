import React, { useState } from "react";
import Helmet from "react-helmet";
import DayPicker, { DateUtils } from "react-day-picker";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "react-day-picker/lib/style.css";
import style from "./calender.module.css";
import DialogNextButton from "../dialogbox/DialogNextButton";
import Timer from './timer';

export default class Example extends React.Component {
  static defaultProps = {
    numberOfMonths: 2,
  };

  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      from: undefined,
      to: undefined,
    };
  }

  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }

  handleResetClick() {
    this.setState(this.getInitialState());
  }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <>
      <body>
      <br></br><br></br><br></br><br></br>
      <div className={style.calendarContainer}>
      {/* className={style.container}> className={RangeExample}  */
      }
        <div className={style.container}>
          <Container maxWidth="md">
            <h3 className={style.h3}>
              {!from && !to && <h3>Please select the first flow day.</h3>}
              {from && !to && <h3>Please select the expected end day.</h3>}
              {from &&
                to &&
                `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()} `}{" "}
              {from &&
                to && [
                  <button
                    className={style.link}
                    onClick={this.handleResetClick}
                  >
                    Reset
                  </button>,
                  <DialogNextButton />,
                ]}
            </h3>
            <DayPicker
              className="Selectable"
              numberOfMonths={this.props.numberOfMonths}
              selectedDays={[from, { from, to }]}
              modifiers={modifiers}
              onDayClick={this.handleDayClick}
            />
          </Container>
          <Helmet>
            <style>
              {`
                .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
                  background-color: #f0f8ff !important;
                  color: #4a90e2;
                }
                .DayPicker-Weekday{
                  color:#660099;
                }
                .Selectable .DayPicker-Day {
                  border-radius: 0 !important;
                }
                .Selectable .DayPicker-Day--start {
                  border-top-left-radius: 50% !important;
                  border-bottom-left-radius: 50% !important;
                }
                .Selectable .DayPicker-Day--end {
                  border-top-right-radius: 50% !important;
                  border-bottom-right-radius: 50% !important;
                }
            `}
          </style>
          </Helmet>
        </div>
      </div>
      <Timer />
      </body>
      </>
    );
  }
}
