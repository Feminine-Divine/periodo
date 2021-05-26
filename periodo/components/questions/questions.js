import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components'
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import style from '../questions/questions.module.css';


const FAQSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
height: 100vh;
background: #fff;
`;
const Container = styled.div`
position:absolute;
margin-top: 50%;
box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;
const Wrap = styled.div``;

const Dropdown = styled.div`
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid #00ffb9;
  border-top: 3px solid #00ffb9;
`;

export default function questions() {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

      return (
        <>
        <div className={style.intro}>
        <h1>| FREQUENTLY ASKED QUESTIONS (FAQs) |</h1>
        </div>
        <IconContext.Provider value={{color:'#03ecae', size:"55px"}}>
            <FAQSection className={style.FAQSection}>
                <Container className={style.container}>
                    {Data.map((item, index) => {
                        return (
                            <> 
                            <Wrap onClick={() => toggle(index)} key={index} className={style.wrap}>
                                <h2 className={style.h1} style={{marginLeft:"20px"}}>{item.question}</h2>
                                <span className={style.span}>{clicked === index ? <FiMinus/> : <FiPlus />}</span>
                            </Wrap>
                            {clicked === index ? (
                              <Dropdown>
                              <p className={style.p} style={{marginLeft:"20px", marginRight:"20px"}}>{ item.answer}</p>
                              <a href={item.link} className={style.a} target="_blank">
                                Read more
                              </a>
                              <br></br><br></br>
                              </Dropdown>
                            ):null }
                            
                            </>
                        )
                    })}
                </Container>
            </FAQSection>
        </IconContext.Provider>
        </>
    )
}
