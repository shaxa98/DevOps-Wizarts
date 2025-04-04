import React from "react";
import backgroundImage from "../../assets/RoadmapBacgraund.svg";
import "./roadMap.css";
import RoadmapPath from "../../assets/RoadmapPath.svg";

function roadmap() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "1369px",
      }}
    >
      <div className="Roadmap">
        <div className="RoadmapHeader">
          <p>Roadmap</p>
          <h1>How We Work with You</h1>
        </div>
      </div>
      <div>
        <div className="RoadmapBody">
          <div className="RoadmapBody1">
            <div className="RoadmapBodyTitle">
              <div className="Text1">
                <h1>Understanding Your Needs</h1>
                <p>
                  Discuss your goals, budget, timeline, and preferred
                  technologies. <br /> If it’s a good fit, we schedule a call
                  for a deeper discussion.
                </p>
              </div>
              <div className="Text2">
                <h1>Bringing Your Project to Life</h1>
                <p>
                  We set up tasks in Trello/Kanban and keep you updated
                  regularly.
                  <br /> Need adjustments? We discuss and agree on changes
                  upfront. <br /> You get access to interim results, so you’re
                  always in the loop.
                </p>
              </div>
              <div className="Text3">
                <h1>
                  Ongoing Support & Future <br /> Growth (if needed)
                </h1>
                <p>
                  Optional tech support, monitoring, and consultations.
                  <br />
                  Continuous improvements to help you scale.
                  <br /> Long-term partnership opportunities to keep your
                  business ahead.
                  <br /> Our focus is making your project seamless, secure, and
                  successful.
                </p>
              </div>
            </div>
          </div>
          <div className="RoadmapBody2">
            <img src={RoadmapPath} alt="" />
          </div>
          <div className="RoadmapBody3">
            <div className="RoadmapBodyTitl3">
              <div className="Text1-1">
                <h1>Tailored Proposal & Agreement</h1>
                <p>
                  {" "}
                  We analyze your technical & business requirements
                  <br /> Assess your infrastructure or architecture to find the
                  best solution
                  <br /> Provide a clear proposal with collaboration options,
                  timelines, and pricing.
                </p>
                <p>
                  Once you're happy, we finalize the contract and secure the
                  agreement <br />
                  No work begins without clear agreements to ensure transparency
                  and security.
                </p>
              </div>
              <div className="Text2-2">
                <h1>Delivering the Final Solution</h1>
                <p>
                  We hand over your project, ensuring everything meets your
                  expectations.
                  <br /> If needed, we discuss long-term support and additional
                  services.
                  <br /> You make the final payment only when satisfied.
                </p>
              </div>
              <div className="Text3-3">
                <h1></h1>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default roadmap;
