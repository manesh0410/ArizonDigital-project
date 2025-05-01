import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <>
    <div className="footer-container">
      <div className="footer-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website-footer-logo"
          className="footer-logo"
        />
      </div>
      <div className="footer-desc-container">
        <p>The only thing we are serious about is products. Contact us on</p>
      </div>
      <ul className="footer-social-media-list">
        <li className="footer-li">
          <a href="https://in.pinterest.com/" target="_blank" rel="noReferrer">
            <FaPinterestSquare
              testid="pintrest-social-icon"
              className="social-icon"
            />
          </a>
        </li>
        <li className="footer-li">
          <a
            href="https://www.instagram.com/hl=en"
            target="_blank"
            rel="noReferrer"
          >
            <FaInstagram
              testid="instagram-social-icon"
              className="social-icon"
            />
          </a>
        </li>
        <li className="footer-li">
          <a href="https://twitter.com/" target="_blank" rel="noReferrer">
            <FaTwitter testid="twitter-social-icon" className="social-icon" />
          </a>
        </li>
        <li className="footer-li">
          <a
            href="https://www.facbook.com/hl=en"
            target="_blank"
            rel="noReferrer"
          >
            <FaFacebookSquare
              testid="facebook-social-icon"
              className="social-icon"
            />
          </a>
        </li>
      </ul>
    </div>
  </>
)

export default Footer
