import React from "react";
import Card5 from "./card5";
const tips = [
  {
    tipNumber: "Is cloth pads better than pads?",
    tipLogo:
      "https://menstrualcupreviews.net/wp-content/uploads/2015/10/cloth-vs-disposable-menstrual-pads1.jpg",
    tipContent:
      "Reusable pads, for menstrual flow management, can actually be more helpful than you think. They are better for your health as well as the environment.",
    link:
      "https://www.healthshots.com/intimate-health/menstruation/wondering-if-reusable-cloth-sanitary-pads-are-hygienic-heres-what-a-gyno-says/",
  },
  {
    tipNumber: "Can I use a washcloth as a pad?",
    tipLogo:
      "http://2.bp.blogspot.com/_K-5oi48lCf8/TT8QUzRtj7I/AAAAAAAABbc/hX8V04QpJQI/s1600/IMG_1638.JPG",
    tipContent:
      " WASHCLOTH: You may not know this, but washcloths make for really good pads! You can add a plastic sheet underneath the washcloth to double prevent any leakage if your first day is heavy.",
    link:
      "https://timesofindia.indiatimes.com/life-style/health-fitness/photo-stories/need-a-makeshift-pad-here-are-five-easy-ways-you-can-make-one/photostory/64931674.cms?picid=64931684",
  },
  {
    tipNumber: "How to make pad at home?",
    tipLogo:
      "https://images.herzindagi.info/image/2020/Apr/Sanitary-Pad.jpg",
    tipContent:
      "If you're on your period and you don't have a sanitary pad on hand, you might be feeling stressed out or even embarrassed. Luckily, though, a little creativity will get you through the day until you can find a pad or a tampon.",
    link:
      "https://www.wikihow.com/Make-a-Substitute-Sanitary-Pad",
  }
]
const Tips = () => {
  return (
    <div>
      <Card5 props={tips} />
    </div>
  );
};
export default Tips;
