import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home/Home'
import { Provider } from './Provider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetail from './pages/product_detail/ProductDetail'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Category from './pages/category/Category'
import Cart from './pages/cart/Cart'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product_detail' element={<ProductDetail />} />
          <Route path='/category' element={<Category />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
