import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Footer, Sidebar } from './components'
import {
  Cart,
  Error,
  PrivateRoute,
  AuthWrapper,
  AboutPage,
  HomePage,
  ProductsPage,
  SingleProductPage,
  Checkout,
} from './pages'

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/products/:id' element={<SingleProductPage />} />
          <Route
            path='/checkout'
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path='*' element={<Error />}></Route>
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  )
}

export default App
