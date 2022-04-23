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
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
  AuthWrapper,
} from './pages'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import SingleProductPage from './pages/SingleProductPage'

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
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/products/:id' element={<SingleProductPage />} />
        <Route
          path='/checkout'
          element={
            <PrivateRoute>
              <StripeCheckout />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
