import "./offerings.css";
import offerArray from "../../const/offerings";

const Offerings = () => {
  return (
    <section id="offerings">
      <div className="offerings__container">
        <h5>OUR PROGRAM</h5>
        <h2>What We Offer</h2>

        <div className="offer__images">
          {offerArray.map(({ id, image, caption, logo }) => (
            <article className="offer__card" key={id}>
              <img src={image} alt="program-image" />
              <div className="caption">
                <img src={logo} alt="program-logo" />
                <p>{caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
