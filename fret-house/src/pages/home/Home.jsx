import {useNavigate} from "react-router-dom";

import "./Home.css";

const Home = () => {
    const navigate = useNavigate();
    const handleHeroButton = () => {
        navigate("/products")
    }
  return (
    <>
      <header className="hero-section container">
        <h1>Find the perfect instrument to match your style and passion.</h1>
        <button className="primary-button" onClick={handleHeroButton}>SHOP NOW</button>
        <p className="fs-400 text-primary-300 hero-text">
          Whether you're a seasoned musician or just starting out, we have
          everything you need to take your music to the next level. Our wide
          selection of guitars and accessories are perfect for players of all
          levels and styles. From classic acoustics to sleek electrics, we have
          the perfect instrument to match your unique sound and personality.
          Browse our collection today and let your music soar!
        </p>
      </header>
      <main className="categories container text-primary-400">
        <h2 className="fs-heading fw-bold">Shop by sound</h2>
        <div className="temp">
          <button className="primary-button">Acoustic</button>
          <button className="primary-button">Electric</button>
          <button className="primary-button">Bass</button>
        </div>
      </main>
    </>
  );
};

export default Home;
