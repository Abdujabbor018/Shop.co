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
          
        <img src={versace} />
        <img src={zara} />
        <img src={gucci} />
        <img src={prada} />
        <img src={calvin} />
        </div>
      </div>
    </div>
  );
};

export default Brands;
