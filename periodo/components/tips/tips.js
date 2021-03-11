import React from "react";
import Navbar from "../navbar";
// import style from  "./tips.module.css";
import Card from "./card";
const tips=[
  {
        tipNumber:"Drink tea",
        tipContent:"Drinking  atleast 1 cup of tea (Ginger/Cardamom/Lavender) can provide you with much needed freshness and also help decrease the amount of pain you experience at that time of the month."
    },
    {
        tipNumber:"Apply heat",
        tipContent:"Heat therapy works by relaxing the muscles of the uterus, increasing blood flow and easing pain, applying it to your lower abdomen and lower back can help relax the muscles of your uterus."
    },
    {
        tipNumber:"Drink plenty of water",
        tipContent:"Drinking 6-8 glasses of water , in addition to make you feel better will also improve your overall health.It can help move your cycle along more quickly.Moreover it helps prevent blood from thickening."
    },
    {
        tipNumber:"Choose your meal wisely",
        tipContent:"Avoid fatty foods, they have high level of salt content that can impact how bloated you feel and the level of pain you experience during your periods.Eat foods which is rich in potassium, vitamins and iron. "
    },
    {
        tipNumber:"Exercise",
        tipContent:"Low-to-medium intensity aerobic workout can do wonders, it can help reduce pain caused by period cramps. You can easily fit a light workout into your schedule, like dancing on your favorite song, take a short walk, etc."
    },
    {
        tipNumber:"Soak in a tub",
        tipContent:"Soaking in a warm bathtub surrounds your pelvic muscles with the warmth they need to relax. You can enhance the pain-relieving power by adding a few drops of essential oils like lavender or rose. Try to relax in a warm bath for at least 15 minutes."
    },
    {
        tipNumber:"Relax",
        tipContent:"Using relaxation techniques to reduce stress may help control your premenstrual anxiety.Take rest as much as you can because psychological stress might increase your risk of menstrual cramps and their severity."
    },
    {
        tipNumber:"Medicines",
        tipContent:"Some best medications to relieve painful menstrual cramps are Panadol Woman, Paracetamol, Hyoscine butylbromide. You can also consider taking Over-the-counter(OTC) anti-inflamatory medications"
    }
]
const Tips = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Card props={tips} />
        </div>
    );

}
export default Tips;
