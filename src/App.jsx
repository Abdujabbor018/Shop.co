import React from 'react'
import Header from './Components/Header/Header'
import Brands from './Components/Brands/Brands'
import './App.css'
import Products from './Components/Products/Products'
import Styles from './Components/Styles/Styles'
import Comments from './Components/Comments/Comments'
import Contact from './Components/Contact/Contact'
const App = () => {
  return (
  <>
    <Header />
    <Brands />
    <Products />
    <Styles />
    <Comments />
    <Contact />
  </>
  )
}

export default App