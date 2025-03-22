import React from "react";
import group from "../../assets/group.png";
import image from "../../assets/image.svg";
import layer1 from "../../assets/layer-1.svg";
import line99 from "../../assets/line-99.svg";
import line100 from "../../assets/line-100.svg";
import line101 from "../../assets/line-101.svg";
import line102 from "../../assets/line-102.svg";
import line1033 from "../../assets/line-103-3.svg";
import line103 from "../../assets/line-103.svg";
import line1042 from "../../assets/line-104-2.svg";
import line104 from "../../assets/line-104.svg";
import line105 from "../../assets/line-105.svg";
import line106 from "../../assets/line-106.svg";
import line107 from "../../assets/line-107.svg";
import line108 from "../../assets/line-108.svg";
import line109 from "../../assets/line-109.svg";
import line110 from "../../assets/line-110.svg";
import line111 from "../../assets/line-111.svg";
import line112 from "../../assets/line-112.svg";
import line113 from "../../assets/line-113.svg";

import union from "../../assets/union.svg";
import withMagicOfDevops from "../../assets/with-magic-of-devops.svg";
import "./banner.css";

export const Banner = () => {
  return (
    <div className="banner">
      <div className="overlap">
        <div className="group">
          <div className="overlap-group">
            <img className="line" alt="Line" src={line105} />

            <div className="overlap-group-wrapper">
              <div className="ellipse-wrapper">
                <div className="ellipse" />
              </div>
            </div>

            <img className="img" alt="Line" src={line102} />

            <div className="div" />

            <div className="ellipse-2" />

            <div className="ellipse-3" />

            <div className="overlap-wrapper">
              <div className="overlap-2">
                <div className="ellipse-4" />

                <div className="ellipse-5" />

                <img className="line-2" alt="Line" src={line104} />
              </div>
            </div>

            <img className="line-3" alt="Line" src={line106} />
          </div>

          <div className="overlap-3">
            <img className="line-4" alt="Line" src={line99} />

            <img className="line-5" alt="Line" src={line107} />

            <img className="line-6" alt="Line" src={line108} />
          </div>

          <div className="overlap-4">
            <img className="line-7" alt="Line" src={line1033} />

            <img className="line-8" alt="Line" src={line100} />

            <img className="line-9" alt="Line" src={line101} />

            <div className="ellipse-6" />
          </div>

          <div className="overlap-5">
            <img className="line-10" alt="Line" src={line109} />

            <img className="line-11" alt="Line" src={line110} />

            <img className="line-12" alt="Line" src={line111} />

            <img className="line-13" alt="Line" src={line112} />
          </div>

          <div className="ellipse-7" />

          <div className="ellipse-8" />

          <div className="overlap-6">
            <div className="ellipse-9" />

            <div className="group-2">
              <div className="ellipse-10" />

              <div className="ellipse-11" />

              <img className="line-14" alt="Line" src={line1042} />
            </div>
          </div>

          <div className="div-wrapper">
            <div className="overlap-7">
              <img className="line-15" alt="Line" src={line103} />

              <div className="ellipse-12" />
            </div>
          </div>

          <img className="line-16" alt="Line" src={line113} />

          <div className="overlap-8">
            <div className="group-3">
              <div className="ellipse-13" />

              <div className="ellipse-14" />

              <img className="line-17" alt="Line" src={image} />
            </div>

            <div className="ellipse-15" />
          </div>
        </div>

        <div className="group-wrapper">
          <div className="group-4">
            <div className="overlap-group-2">
              <img className="layer" alt="Layer" src={layer1} />

              <img className="group-5" alt="Group" src={group} />

              <img className="union" alt="Union" src={union} />
            </div>
          </div>
        </div>

        <div className="ellipse-16" />

        <div className="frame">
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="frame-3">
                <div className="frame-2">
                  <div className="frame-4">
                    <div className="we-turn-your">WE TURN YOUR</div>

                    <div className="frame-4">
                      <div className="frame-5">
                        <div className="ideas-into-reality">
                          IDEAS INTO REALITY
                        </div>

                        <div className="frame-6">
                          <img
                            className="with-magic-of-devops"
                            alt="With magic of devops"
                            src={withMagicOfDevops}
                          />

                          <div className="frame-7" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
