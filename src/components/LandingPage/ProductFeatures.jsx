// React Utils
import React from "react";

// Videos
import SlackFeatureVideo1 from "../../assets/SlackFeatureVideo1.webm";
import SlackFeatureVideo2 from "../../assets/SlackFeatureVideo2.webm";
import SlackFeatureVideo3 from "../../assets/SlackFeatureVideo3.webm";
import SlackFeatureVideo4 from "../../assets/SlackFeatureVideo4.webm";

const ProductFeatures = () => {
  return (
    <div className="w-full py-20 pt-10">
      <div className="flex flex-col gap-40">
        <EachFeature
          videoSrc={SlackFeatureVideo1}
          heading={"Communicate in countless ways from one place"}
          subheading={
            "Slack is built for bringing people and information together. Type things out. Talk things through. Invite external organisations into the conversation."
          }
        />
        <EachFeature
          videoSrc={SlackFeatureVideo2}
          videoOrder={2}
          heading={"Manage projects and move work forwards faster"}
          subheading={
            "Prioritise tasks, share ideas and stay aligned. Slack brings every piece of your project together from start to finish."
          }
        />
        <EachFeature
          videoSrc={SlackFeatureVideo3}
          heading={"Tap into the tools that you already use"}
          subheading={
            "Over 2,600 apps are ready to connect in Slack, so you can automate everyday tasks in the flow of work and save your team precious time."
          }
        />
        <EachFeature
          videoSrc={SlackFeatureVideo4}
          videoOrder={2}
          heading={"Do more with AI that works where you do"}
          subheading={
            "Search your entire company history for answers, instantly catch up on conversations and get daily recaps of messages missed."
          }
        />
      </div>
    </div>
  );
};

const EachFeature = ({ videoSrc, videoOrder, heading, subheading }) => {
  return (
    <div className="flex gap-20 max-sm:flex-col max-sm:items-center">
      <div className={`order-${videoOrder}`} style={{ order: videoOrder }}>
        <video
          autoPlay
          muted
          loop
          className="max-w-[550px] max-sm:max-w-[350px] rounded-[5px]"
        >
          <source src={videoSrc} type="video/webm" />
        </video>
      </div>
      <div className="flex flex-col gap-6 mt-8">
        <div>
          <h1 className="text-4xl font-semibold leading-[1.3] tracking-wide">
            {heading}
          </h1>
        </div>
        <div>
          <p className="font-normal">{subheading}</p>
        </div>
        <div className="flex gap-2">
          <button className="cursor-pointer uppercase hover:bg-[#61345F] transition-all duration-200 hover:text-[#F5EEE5] border-[#61345F] border-2 rounded-sm bg-[#F5EEE5] tracking-wide text-[#531652] font-semibold text-xs px-8 py-4">
            Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;
