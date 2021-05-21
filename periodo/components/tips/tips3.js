import React from "react";
import Card3 from "./card3";
const tips = [
  {
    tipNumber: "Carbonated Drinks",
    tipLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ZRJpdNF-GvdZOkdITVAJZgVGTv-dfvtLCQ&usqp=CAU",
    tipContent:
      "Sugary, carbonated drinks like soda contribute to bloating. Stick to water instead. Upping your water intake will actually ease water retention and bloating.Avoid sparkling water too. Just like soda, the carbonation will increase bloating.",
    link:
      "https://www.byrdie.com/best-foods-to-eat-on-your-period",
  },
  {
    tipNumber: "Processed Foods",
    tipLogo:
      "https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-asia.com/headlines/policy/single-nutrient-taxes-questioned-ultra-processed-food-policies-should-be-prioritised-instead-say-researchers/11772130-1-eng-GB/Single-nutrient-taxes-questioned-Ultra-processed-food-policies-should-be-prioritised-instead-say-researchers_wrbm_large.jpg",
    tipContent:
      "  Another culprit in the bloating game? High-sodium foods. Processed foods are the biggest source of sodium in your diet.1Avoid anything that comes in a package, and you'll keep salt intake down and your belly bloat, too.",
    link:
      "https://www.byrdie.com/best-foods-to-eat-on-your-period",
  },
  {
    tipNumber: "Legumes",
    tipLogo:
      "https://naturallyella.com/wp-content/uploads/2016/01/legumes.jpg",
    tipContent:
      " Kidney beans, black-eyed peas, chickpeas, and all legumes cause bloating.3﻿ Keep them off your plate to keep discomfort to a minimum.",
    link:
      "https://www.byrdie.com/best-foods-to-eat-on-your-period",
  },
  {
    tipNumber: "Refined Grains",
    tipLogo:
      "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2013/07/wholeGrainProducts-842797430-770x533-1.jpg",
    tipContent:
      " Refined grains, like all processed foods, lose much of their nutrient content. This causes them to interfere with blood sugar and regular appetite control.Both factors are concerns during your period. Choose whole grains over white bread, pasta, cereal, rice, crackers, cakes, and cookies. ",
    link:
      "https://www.byrdie.com/best-foods-to-eat-on-your-period",
  },
  {
    tipNumber: "High-Fat Foods",
    tipLogo:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1538432063%2FAdobeStock_145237676.jpeg%3Fitok%3DTnR4tufx",
    tipContent:
      "  High-fat foods have a strong effect on hormone activity in the body. Like trans fats, saturated fats can contribute to period pain and inflammation.Avoid heavy meats and dairy to keep your fat intake down, which also regulates estrogen levels. ",
    link:
      "https://www.byrdie.com/best-foods-to-eat-on-your-period",
  }
]
const Tips = () => {
  return (
    <div>
      <Card3 props={tips} />
    </div>
  );
};
export default Tips;
