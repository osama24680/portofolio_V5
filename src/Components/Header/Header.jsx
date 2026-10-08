import "./Header.css";
import CTA from "./CTA";
import osama from "../../assets/osama.png";
import HeaderSocial from "./HeaderSocial";

export default function Header() {
  return (
    <header id="header">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Osama Megahed</h1>
        <h5 className="text_light">Software Engineer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={osama} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
