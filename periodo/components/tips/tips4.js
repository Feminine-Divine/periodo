import React from "react";
import Card4 from "./card4";
const tips = [
  {
    tipNumber: "Why do i change pads?",
    tipLogo:
      "https://www.bostik.com/files/live/sites/shared_bostik/files/import-global/globalassets/global-assets/markets--solutions/industrial-adhesive/global-nonwovens/campaign-images/en-campaign-images/Fem%20Care/sq_why-change.png",
    tipContent:
      " Changing your pad every 3 or 4 hours (more if your period is heavy) is good hygiene and helps prevent bad odors. This is especially true if you'll be playing sports or rushing around from class to class.Changing pads often also helps prevent accidental leaks. If your period suddenly gets heavier when you least expect it, you'll be wearing a fresh pad that can absorb the extra flow.",
    link:
      "https://timesofindia.indiatimes.com/life-style/health-fitness/photo-stories/period-hygiene-you-should-change-your-sanitary-napkin-these-many-times/photostory/63184125.cms?picid=63184250",
  },
  {
    tipNumber: "Time to change pads",
    tipLogo:
      "http://www.india.com/wp-content/uploads/2016/11/Sanitary-pad-change.jpg",
    tipContent:
      "  According to health experts, you must change your sanitary napkin once in four hours. If you’re using tampons, they must be changed once in two hours. But these hours cannot be generalized as it also depends on the quality of your sanitary napkin and individual needs. Some women might have a lighter flow and a few may experience heavy bleeding. Hence, change it according to your requirement.",
    link:
      "https://www.stayfree.in/how-often-to-change-your-pad",
  },
  {
    tipNumber: "Why different pad at night?",
    tipLogo:
      "https://images-na.ssl-images-amazon.com/images/I/71XWcJ8CRSL._AC_SX450_.jpg",
    tipContent:
      "As you sleep, you move around a lot more than you might think. Nighttime napkins are longer than regular napkin and have a wider back. So they’re meant to protect through your entire night’s sleep and prevent back leaks.",
    link:
      "https://www.stayfree.in/why-would-i-need-a-different-napkin-at-night",
  }
]
const Tips = () => {
  return (
    <div>
      <Card4 props={tips} />
    </div>
  );
};
export default Tips;
