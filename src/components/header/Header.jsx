import "./header.css";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Header = () => {
  return (
    <header id="header" className="container">
      <div className="header__content">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <button className="btn">
          Explore more <HiOutlineArrowLongRight className="btn__icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
