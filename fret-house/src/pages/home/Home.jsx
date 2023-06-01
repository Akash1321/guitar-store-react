import {useNavigate} from "react-router-dom";

import "./Home.css";
import acousticGuitar from "../../assets/acousticGuitar.jpg";
import electricGuitar from "../../assets/electricGuitar.jpg";
import bassGuitar from "../../assets/bassGuitar.jpg";
import {useFilter} from "../../context/FilterContext";

const Home = () => {
  const navigate = useNavigate();
  const {filterProduct, categories} = useFilter();


  const handleHeroButton = () => {
        navigate("/products");
        
  }

  const handleAcoustic = () => {
    navigate("/products");
    if(!categories.includes("acoustic")){
      filterProduct({ type: "CATEGORY_FILTER", payload: "acoustic" });
    }
    
  }

  const handleElectric = () => {
    navigate("/products");
    if(!categories.includes("electric")){
      filterProduct({ type: "CATEGORY_FILTER", payload: "electric" });
    }
  }

  const handleBass = () => {
    navigate("/products");
    if(!categories.includes("bass")){
      filterProduct({ type: "CATEGORY_FILTER", payload: "bass" });
    }
  }



  return (
    <>
      <header className="hero-section container">
        <h1 className="hero-heading">Find the perfect instrument to match your style and passion.</h1>
        <button className="primary-button shop-now" onClick={handleHeroButton}>SHOP NOW</button>
        <p className="fs-400 text-primary-300 hero-text">
          Whether you're a seasoned musician or just starting out, we have
          everything you need to take your music to the next level. Our wide
          selection of guitars and accessories are perfect for players of all
          levels and styles. From classic acoustics to sleek electrics, we have
          the perfect instrument to match your unique sound and personality.
          Browse our collection today and let your music soar!
        </p>
        
      </header>
      <section className="categories container text-primary-400">
        <h2 className="fs-heading fw-bold">Shop by sound</h2>
        <div className="shop-category">
          <div className="category-container" onClick={handleAcoustic}>
            <img src={acousticGuitar} alt="acoutic guitar" className="category-image" />
            <p className="fw-semiBold">Acoustic</p>
          </div>

          <div className="category-container" onClick={handleElectric}>
            <img src={electricGuitar} alt="electric guitar" className="category-image"/>
            <p className="fw-semiBold">Electric</p>
          </div>

          <div className="category-container" onClick={handleBass}>
            <img src={bassGuitar} alt="bass guitar" className="category-image"/>
            <p className="fw-semiBold">Bass</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
