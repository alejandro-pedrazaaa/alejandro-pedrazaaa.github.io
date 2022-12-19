import "./profile.css";
import { TextAndTools } from "./TextAndTools";
import HTML from "../../Assets/Images/Tools_Icons/HTML.svg";
import CSS from "../../Assets/Images/Tools_Icons/CSS.svg";
import JS from "../../Assets/Images/Tools_Icons/JavaScript.svg";
import Bootstrap from "../../Assets/Images/Tools_Icons/Bootstrap.svg";
import React from "../../Assets/Images/Tools_Icons/React.svg";
import Git from "../../Assets/Images/Tools_Icons/Git.svg";
import Figma from "../../Assets/Images/Tools_Icons/Figma.svg";
import GitHub from "../../Assets/Images/Tools_Icons/GitHub.svg";

export const Profile = () => {
  return (
    <main className="profile text-center ">
      <h1 className="py-4">
        UI/UX Designer<br></br>&<br></br>Frontend Developer
      </h1>
      <p>
        👋 Hey there, I am Alejandro! A web developer dedicated to create
        beautiful websites for amazing people ⭐
      </p>
      <div className="py-2">
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
    </main>
  );
};
