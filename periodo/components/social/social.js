import React,{useState} from 'react';
import style from "./social.module.css";
import CloseIcon from '@material-ui/icons/Close';

export default function social() {
  let data =[
    {
      id:1,
      imgsrc:"https://images.financialexpress.com/2020/05/menstrual-hygiene-day.jpg",
    },
    {
      id:2,
      imgsrc:"https://images.news18.com/ibnlive/uploads/2021/03/1615298512_period.jpeg?impolicy=website&width=540&height=405",
    },
    {
      id:3,
      imgsrc:"https://femina.wwmindia.com/content/2021/mar/join-our-fight-to-end-menstruation-in1616671453.jpg",
    },
    {
      id:4,
      imgsrc:"https://www.wateraidindia.in/sites/g/files/jkxoof336/files/styles/full_grid_image/public/menstrual-hygiene-management-in-chhitoor-.jpg?h=b2774bcf&itok=Qj3kw7HW",
    },
    {
      id:5,
      imgsrc:"https://www.unicef.org/philippines/sites/unicef.org.philippines/files/styles/hero_desktop/public/UNIPH2019093.jpg?itok=PfBSH8pg0",
    },{
      id:6,
      imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ngQtDT6-YXOU9a_s9fn9DMPefNyGWeq-9lZLX2dzCm5S63pJ6O4Eqp_iEbdr0dOKwzk&usqp=CAU",
    },
    {
      id:7,
      imgsrc:"https://aniportalimages.s3.amazonaws.com/media/details/Menstrual_Hygiene_Management_-_Upasana_Tuleda_Uttarakhand_270320_1_sRpIusp.jpg",
    },
    {
      id:7,
      imgsrc:"https://thelogicalindian.com/h-upload/2020/01/27/149528-defhzsdc.jpg",
    },
    {
      id:8,
      imgsrc:"https://assets.weforum.org/article/image/responsive_medium_YV4pclQ7OY15lYwHcVc4cMlm5xTIcKRJEy_HJJDQ71g.jpg",
    },
    {
      id:9,
      imgsrc:"https://www.indiawaterportal.org/sites/default/files/iwp/sanitarypad3.jpg",
    },
    {
      id:10,
      imgsrc:"https://www.buzzyoo.com/wp-content/uploads/2019/03/Period-A-film-about-Menstruation.png",
    }
    ,
    {
      id:11,
      imgsrc:"https://mediaindia.eu/wp-content/uploads/2017/08/phu.jpg",
    }
    ,
    {
      id:12,
      imgsrc:"http://images.edexlive.com/uploads/user/imagelibrary/2018/2/11/original/Padman.jpg",
    }
  ]
  const [model, setModel] = useState(false)
  const [tempImg, setTempImg] = useState('')
  const getImg =(imgsrc) =>{
    setTempImg(imgsrc);
    setModel(true)
  }
  
  return (
    <div className={style.container}>
      <div className={style.intro}>
      <h1>| SOCIAL CAMPINGS FOR YOU |</h1>
      </div>
      <div className={style.container2}>
      <div className={model? 
        style.model && style.model_open  : style.model}>
      <img className={style.img} src={tempImg} />
      <CloseIcon className={style.svg} onClick={() => setModel(false)}/>
      </div>
    <div className={style.gallery}>
      {data.map((item, index)=>{
        return(
          <div className={style.pics} key={index} onClick={() => getImg(item.imgsrc)}>
            <img src={item.imgsrc} style={{width:'100%'}} alt={item.id}/>
          </div>
        )
      })}
    </div>
    </div>
    </div>
  )
}

