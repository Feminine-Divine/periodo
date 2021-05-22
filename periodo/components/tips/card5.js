import React from "react";
import style from "./cards.module.css";

const card5 = ({ props }) => {
  const propsList = props.map((prop) => {
    return (


      <div className={style.card}>
      <div className={style.circle}>
      <div className={style.h2}>
          <h2>{prop.tipNumber}</h2>
        </div>
        <div className={style.img}>
          <img src={prop.tipLogo} alt="image" height={150} width={300} />
        </div>
      </div>
      <div className={style.contentbody}>
        <div className={style.h2}>
          <h2>{prop.tipNumber}</h2>
        </div>

        <div className={style.contents}>
          <p className={style.p}>{prop.tipContent} </p>
        </div>
      </div>

      <div className={style.content}>
        <a href={prop.link} className={style.a}>
          Read more
        </a>
      </div>
    </div>
      // <>
      
      // <div className={style.card}>
      //   <div className={style.circle}>
      //   <div className={style.h2}>
      //       <h2>{prop.tipNumber}</h2>
      //     </div>
      //     <div className={style.img}>
      //       <img src={prop.tipLogo} alt="image" height={150} width={290} />
      //     </div>
          
      //   </div>
      //   <div className={style.content}>
      //     <p className={style.p}>{prop.tipContent} </p>
      //     <a href={prop.link} className={style.a}>
      //       Read more
      //     </a>
      //   </div>
      // </div>
      // </>
    );
  });
  return (
    <>
    <div className={style.intro}>
      <h1>| SOME TIPS FOR YOU |</h1>
    <div className={style.section}>
      <div className={style.body}>

        <div className={style.container}>{propsList}</div>
      </div>
    </div>
    </div>
    </>
  );
};
export default card5;