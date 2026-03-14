import "./HeroSection.css";
import LeftCategory from "./LeftCategory";
import RightCategory from "./RightCategory";
import MainBanner from "./MainBanner";

function HeroSection() {
  return (
    <div className="categoryDiv">
      <div className="leftCtg">
        <LeftCategory />
      </div>

      <div className="midCtg">
        <MainBanner />
      </div>

      <div className="rigthCtg">
        <RightCategory />
      </div>
    </div>
  );
}

export default HeroSection;
