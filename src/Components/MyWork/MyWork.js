import "./mywork.css";
import { Card } from "./Card";
import MoviesAppLogo from "../../Assets/Images/Projects/MoviesApp.png";
import MAndMLogo from "../../Assets/Images/Projects/MAndM.png";
import FetchRewardsLogo from "../../Assets/Images/Projects/FetchRewards.png";
import APLogo from "../../Assets/Images/Projects/AP.png";

export const Work = () => {
  return (
    <section className="pt-4">
      <div className="work-text text-center pb-2">
        <h2>Here is some of my work:</h2>
      </div>
      <Card
        img={MoviesAppLogo}
        alt="Logo of Movies App"
        text="Website that displays and searches for movies"
        liveDemo="https://movies-app-2021.netlify.app/"
        sourceCode=""
      />
      <Card
        img={MAndMLogo}
        alt="Logo of M&M's"
        text="Website for a metal fabrication business"
        liveDemo="https://m-and-m-metal-fabrication.netlify.app/"
        sourceCode=""
      />
      <Card
        img={FetchRewardsLogo}
        alt="Logo of Fetch Rewards"
        text="User creation form inspired by Fetch Rewards"
        liveDemo="https://fetch-rewards.netlify.app/"
        sourceCode=""
      />
      <Card
        img={APLogo}
        alt="Logo of my portfolio"
        text="This website!"
        liveDemo="https://alejandro-perez.netlify.app/"
        sourceCode=""
      />
    </section>
  );
};
