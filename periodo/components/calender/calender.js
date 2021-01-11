import React,{useState} from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar' 
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import style from "./calender.module.css"
import Link from 'next/link';


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
      <>
        <h4 className={style.heading}>Click on the date</h4>
        <Link href="/flow">
        <Container maxWidth="xs" className={style.container}>
        <Calendar
         onChange={onChange}
         value={value}
        />
        </Container>
        </Link>
      </>
    );
}

export default Home