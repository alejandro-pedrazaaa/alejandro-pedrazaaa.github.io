import "./mywork.css";
import { Card } from "./Card";
import MoviesAppLogo from "../../Assets/Images/Projects/MoviesApp.png";
import MAndMLogo from "../../Assets/Images/Projects/MAndM.png";
import FetchRewardsLogo from "../../Assets/Images/Projects/FetchRewards.png";
import APLogo from "../../Assets/Images/Projects/AP.png";

export const MyWork = () => {
  return (
    <section>
      <div className="work-text text-center pb-1">
        <h2>Here is some of my work:</h2>
      </div>
      <div>
        <Card
          img={MoviesAppLogo}
          alt="Logo of Movies App"
          text="Website that shows, searches, and filters movies"
          liveDemo="https://alejandro-pedrazaaa.github.io/MoviesApp/"
          sourceCode="https://github.com/alejandro-pedrazaaa/MoviesApp"
        />
        <Card
          img={MAndMLogo}
          alt="Logo of M&M's"
          text="Website for a metal fabrication business"
          liveDemo="https://www.mnmsteelfab.com/"
          sourceCode="https://github.com/alejandro-pedrazaaa/MandM-Steel-Fabrication"
        />
        <Card
          img={FetchRewardsLogo}
          alt="Logo of Fetch Rewards"
          text="User creation form inspired by Fetch Rewards"
          liveDemo="https://alejandro-pedrazaaa.github.io/User-Creation-Form/"
          sourceCode="https://github.com/alejandro-pedrazaaa/User-Creation-Form"
        />
        <Card
          img={APLogo}
          alt="Logo of my portfolio"
          text="This website!"
          liveDemo=""
          sourceCode=""
        />
      </div>
    </section>
  );
};
