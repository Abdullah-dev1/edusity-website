import "./gallery.css";
import galleryArray from "../../const/gallery";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Gallery = () => {
  return (
    <section id="gallery">
      <div className="title">
        <h5>GALLERY</h5>
        <h2>Campus Photos</h2>
      </div>

      <div className="campus">
        <div className="gallery">
          {galleryArray.map(({ id, image, alter }) => (
            <img src={image} alt={alter} key={id} />
          ))}
        </div>

        <button className="btn">
          See more here <HiOutlineArrowLongRight className="btn__icon" />
        </button>
      </div>
    </section>
  );
};

export default Gallery;
