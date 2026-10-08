import CV from "../../assets/cv.pdf";

export default function CTA() {
  return (
    <div>
      <div className="cta">
        <a href={CV} download className="outlineBtn">
          Download CV
        </a>
        <a href="#contact" className="outlineBtn stockBtn">
          let's talk
        </a>
      </div>
    </div>
  );
}
