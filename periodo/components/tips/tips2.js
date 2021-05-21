import React from "react";
import Card2 from "./card2";
const tips = [
  {
    tipNumber: "What is sanitary napkin?",
    tipLogo:
      "https://www.chinasanitarynapkin.com/resource/upfiles/52/images/technical-articles/three-points-of-sanitary-napkins.jpg",
    tipContent:
      "  Sanitary pad, which is also known as sanitary napkin or menstrual pad, is a thin pad made of absorbent material that absorbs the menstrual fluid during menstruation. Some sanitary pads are disposable and are meant for single use only.",
    link:
      "https://www.stayfree.in/what-is-a-sanitary-napkin-and-how-do-i-use-it?ds_rl=1285419&ds_rl=1285422&ds_rl=1285419&gclid=Cj0KCQjwkZiFBhD9ARIsAGxFX8C53wR8EqvMPieL9_5Dypc3-RuXTVv6dyM0wmEgB26gKSJOtyT-h-EaAqueEALw_wcB&gclsrc=aw.ds",
  },
  {
    tipNumber: "How to use napkin?",
    tipLogo:
      "https://www.stayfree.in/sites/stayfree_in/files/sanitary-pad-disposal.jpg",
    tipContent:
      "USES OF SANITARY NAPKIN-- Remove the paper on the back side of the pad and place it on your panty. DISPOSEL OF SANITARY NAPKIN-- Remove the paper on the back side of the pad and place it on your panty",
    link:
      "https://www.stayfree.in/what-is-a-sanitary-napkin-and-how-do-i-use-it?ds_rl=1285419&ds_rl=1285422&ds_rl=1285419&gclid=Cj0KCQjwkZiFBhD9ARIsAGxFX8C53wR8EqvMPieL9_5Dypc3-RuXTVv6dyM0wmEgB26gKSJOtyT-h-EaAqueEALw_wcB&gclsrc=aw.ds",
  },
  {
    tipNumber: "How to choose napkin?",
    tipLogo:
      "https://www.couponmoto.com/top-10/wp-content/uploads/2019/12/10-Best-Sanitary-Pads-in-india.png",
    tipContent:
      "The first thing to know is there’s no right or wrong way to handle menstruation. Every woman is different, and so is her body’s reaction to periods.That’s why there are so many types of sanitary pads to choose from.",
    link:
      "https://www.stayfree.in/there-are-types-of-sanitary-napkins-how-do-i-choose-a-napkin-for-me",
  }
]
const Tips = () => {
  return (
    <div>
      <Card2 props={tips} />
    </div>
  );
};
export default Tips;
