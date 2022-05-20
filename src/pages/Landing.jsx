import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* INFO */}
        <div className="info">
          <h1>
            Job <span> Tracking </span>App
          </h1>
          <p>
            I am baby jesus lorem ipsum mercedes jatheri jindal global period
            Lavie Delhi pacific western road I am baby jesus lorem ipsum
            mercedes jatheri jindal global period Lavie Delhi pacific western
            road I am baby jesus lorem ipsum mercedes jatheri jindal global
            period Lavie Delhi pacific western road I am baby jesus lorem ipsum
            mercedes jatheri jindal global period Lavie Delhi pacific western
            road.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        {/* Image */}
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};
