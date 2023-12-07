import {Link} from 'react-router-dom'

import NavBar from '../Navbar'
import './index.css'

const Home = () => (
  <>
    <NavBar />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Full Stack Web Developer</h1>
        <img
          src="https://res.cloudinary.com/donzw6c6d/image/upload/v1697576648/329004263_509785331307371_9025795664962094501_n_stf2mu.jpg"
          alt="dresses to be noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
          Welcome to my portfolio. I'm P.E.V.Venkatesh, a Full Stack Developer with a passion for creating innovative web solutions.
        </p>
        <button type="button" className="shop-now-button">
          <Link to="/About" className="navbar-brand">About</Link>
        </button>
      </div>
      <img
        src="https://res.cloudinary.com/donzw6c6d/image/upload/v1697576648/329004263_509785331307371_9025795664962094501_n_stf2mu.jpg"
        alt="dresses to be noticed"
        className="home-desktop-img"
      />
    </div>
  </>
)

export default Home