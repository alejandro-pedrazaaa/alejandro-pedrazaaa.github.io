import { TextAndTools } from "./TextAndTools";
import HTML from "../../Assets/Images/Tools_Icons/HTML.svg";
import CSS from "../../Assets/Images/Tools_Icons/CSS.svg";
import JS from "../../Assets/Images/Tools_Icons/JavaScript.svg";
import Bootstrap from "../../Assets/Images/Tools_Icons/Bootstrap.svg";
import React from "../../Assets/Images/Tools_Icons/React.svg";
import Git from "../../Assets/Images/Tools_Icons/Git.svg";
import Figma from "../../Assets/Images/Tools_Icons/Figma.svg";

export const AboutMe = () => {
  return (
    <main className="about-me">
      <div className="container text-center px-0">
        <div className="row">
          <div className="px-0 col-12">
            <h1 className="my-5">
              UX/UI Designer <br></br> & <br></br> Frontend Developer
            </h1>
            <p className="mb-5">
              👋 Hey there, I am Alejandro! <br></br> I design and develop
              beautiful websites for amazing people and companies
            </p>
            <div className="mb-5">
              <TextAndTools
                text="🗣️ Languages I speak:"
                technologies={{
                  HTML,
                  CSS,
                  JS,
                  Git,
                }}
              />
              <TextAndTools
                text="🛠️ Frameworks and libraries I use:"
                technologies={{
                  Bootstrap,
                  React,
                }}
              />
              <TextAndTools
                text="👨‍🎨 What I use to design:"
                technologies={{
                  Figma,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
