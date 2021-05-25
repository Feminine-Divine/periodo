import React,{useState, useEffect} from 'react';
import style from  "./scrolltop.module.css";
import { useWindowScroll } from "react-use";
import { FaArrowUp } from "react-icons/fa";

export default function scrolltop() {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisiblity] = useState(false)

    useEffect(() => {
        if(pageYOffset > 40){
            setVisiblity(true)
        } else{
            setVisiblity(false)
        }
    }, [pageYOffset]);

    const scrollToTop = () => window.scrollTo({ top:0 , behavior: "smooth" })

    if(!visible){
        return false;
    }
    return (
        <div className={style.scroll_to_top} onClick={scrollToTop}>
           <a className={style.atag}>
           <i  className={style.icon} style={{alignItems:"center"}}>
               <FaArrowUp />
           </i>
           </a>
        </div>
    )
}
