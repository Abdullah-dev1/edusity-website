import { useState } from "react";
import "./testimonials.css";
import testimonialSlide from "../../const/testimonials";
import ICON1 from "../../assets/next-icon.png";
import ICON2 from "../../assets/back-icon.png";

const Testimonials = () => {
  const [translateX, setTranslateX] = useState(0);

  const handleNext = () => {
    setTranslateX((prev) => Math.max(prev - 25, -50));
  };

  const handleBack = () => {
    setTranslateX((prev) => Math.min(prev + 25, 0));
  };

  return (
    <section id="testimonials">
      <h5>TESTIMONIALS</h5>
      <h2>What Student Says</h2>
      <div className="testimonials">
        <img
          src={ICON1}
          alt="next icon"
          className="next__icon"
          onClick={handleNext}
        />
        <img
          src={ICON2}
          alt="back icon"
          className="back__icon"
          onClick={handleBack}
        />
        <div className="slider">
          <ul style={{ transform: `translateX(${translateX}%)` }}>
            {testimonialSlide.map(
              ({ id, image, name, city, feedback, alter }) => (
                <li key={id}>
                  <div className="slide">
                    <div className="user__info">
                      <img src={image} alt={alter} />
                      <div>
                        <h3>{name}</h3>
                        <span>{city}</span>
                      </div>
                    </div>
                    <p>{feedback}</p>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
