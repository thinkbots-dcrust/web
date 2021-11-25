import "./FlipCard.css";
import { BsHeart, BsInstagram, BsLinkedin } from "react-icons/bs";

function FlipCard() {
  return (
    <div className="flipcard-container">
      <div className="frame">
        <div className="card">
          <div className="flip hvr-outline-in">
            <div className="front">
              <h1>Thinkbots</h1>
              <p className="flip-me">Flip Me</p>
              <div className="line line-1"></div>
              <div className="line line-2"></div>
            </div>

            <div className="back">
              <i className="fa fa-heart"></i>
              <h3>Atul</h3>
              <div className="line line-3"></div>
              <h2>Web Developer</h2>
              <div className="social">
                <a>
                  <BsInstagram />
                </a>
                <a>
                  <BsLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
