import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  Navbar,
  Footer,
  Sidebar,
  CartContent,
  PageHero,
  StripeCheckout,
} from './components'
import {
  Error,
  PrivateRoute,
  AuthWrapper,
  AboutPage,
  HomePage,
  ProductsPage,
  SingleProductPage,
} from './pages'

function App() {
  return (
    <AuthWrapper>
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
    </AuthWrapper>
  )
}

export default App
