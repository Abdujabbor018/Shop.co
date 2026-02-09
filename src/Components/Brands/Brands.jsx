import "./Brands.css";
import versace from './logos/versace.png'
import zara from './logos/zara.png'
import gucci from './logos/gucci.png'
import prada from './logos/prada.png'
import calvin from './logos/calvinklein.png'

const Brands = () => {
  return (
    <div className="brands">
      <div className="container">
        <div className="brands-container">
          <a href="https://www.versace.com" target="_blank" rel="noopener noreferrer">
            <img src={versace} alt="Versace" />
          </a>

          <a href="https://www.zara.com" target="_blank" rel="noopener noreferrer">
            <img src={zara} alt="Zara" />
          </a>

          <a href="https://www.gucci.com" target="_blank" rel="noopener noreferrer">
            <img src={gucci} alt="Gucci" />
          </a>

          <a href="https://www.prada.com" target="_blank" rel="noopener noreferrer">
            <img src={prada} alt="Prada" />
          </a>

          <a href="https://www.calvinklein.com" target="_blank" rel="noopener noreferrer">
            <img src={calvin} alt="Calvin Klein" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Brands;