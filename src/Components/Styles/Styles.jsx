import React from 'react'
import './Styles.css'
import r1 from './img/rasm1.png'
import r2 from './img/rasm2.png'
import r3 from './img/rasm3.png'
import r4 from './img/rasm4.png'

const Styles = () => {
  return (
    <div className="styles-section" id='Style'>
      <div className="container">
        <div className="styles-box">
          <h2 className="styles-title">BROWSE BY DRESS STYLE</h2>
          <div className="styles-grid">
            <div className="style-card card-small">
              <h3>Casual</h3>
              <img src={r1} alt="Casual" />
            </div>
            <div className="style-card card-large">
              <h3>Formal</h3>
              <img src={r2} alt="Formal" />
            </div>
            <div className="style-card card-large">
              <h3>Party</h3>
              <img src={r3} alt="Party" />
            </div>
            <div className="style-card card-small">
              <h3>Gym</h3>
              <img src={r4} alt="Gym" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Styles