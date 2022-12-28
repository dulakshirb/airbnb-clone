import hero_img from "../assets/hero.png";

export default function Hero() {
  return (
    <div className="hero">
      <img src={hero_img} alt="hero-image" className="hero--img" />
      <div className="hero--sub_sec">
        <h1 className="hero--title">Online Experiences</h1>
        <p className="hero--description">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
