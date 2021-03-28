import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import style from "./Imgslider.module.css";
function ImgeSlider() {
  
    return (
       
       <>
           
            <Carousel infiniteLoop autoPlay>
                  
                 <div className={style.slideimg}>
                        <img src="/image/img1.jpg" />
                       <div className={style.contentbox1}> 
                           <h2> Hey Girls! 🙋‍♀️ 🙋‍♀️</h2> 
                        </div>
                 </div>
                  <div className={style.slideimg}>
                        <img src="/image/img2.jpg" />
                        <div className={style.contentbox2}> 
                           <h2>Welcome to <span> periodoo.vercel.app </span> </h2>
                        </div>
                 </div>
                 <div className={style.slideimg}>
                        <img src="/image/img3.jpg" />  
                        <div className={style.contentbox3}> 
                           <h2>Here you can get <i>More infomation </i> related to periodo </h2>  
                        </div>                   
                  </div>
                  <div className={style.slideimg}>
                    <img src="/image/img4.jpg" />
                    <div className={style.contentbox4}> 
                    <h2> Create your Account and get More Info </h2>
                    <a href="/api/auth/login"> SingUp </a>
                        </div>
                </div> 

            </Carousel>     

        </>

    );


};
export default ImgeSlider;