import React,{useState} from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar' 
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import style from "./calender.module.css"


const Home =()=>{

  const [value, onChange] = useState(new Date());

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
         onChange={onChange}
         value={value}
        />
        </Container>
    );
}

export default Home