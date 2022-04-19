import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  FeaturedProducts,
  Navbar,
  CartButtons,
  Footer,
  Sidebar,
  Hero,
  Services,
  Contact,
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Filters,
  ProductList,
  Sort,
  Stars,
  CartContent,
  PageHero,
  StripeCheckout,
} from './components'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Router>
      <Navbar />
      <PageHero />
      <Sidebar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/cart' element={<CartContent />}></Route>
        <Route path='/products' element={<ProductList />}></Route>
        <Route path='/checkout' element={<StripeCheckout />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
