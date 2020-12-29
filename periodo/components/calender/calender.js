import React from 'react';
import Calendar from 'react-calendar' 
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import style from "./calender.module.css"


const Home =()=>{

    function handleClick(e) {
        let state = this.props.state;
        state["currentPage"] = "Add";
        this.props.handleChangeState(state);
      }
    
      function handleClickDay(date) {
        let state = this.props.state;
        state["currentDate"] = date;
        this.props.handleChangeState(state);
      }
      

    return(
        <Container maxWidth="xs" className={style.container}>
        <Calendar
        onClickDay={handleClickDay}
        />
        </Container>
    );
}

export default Home