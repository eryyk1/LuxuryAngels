import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToHash from './components/ScrollToHash'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import ProductsPage from './pages/ProductsPage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="szolgaltatasok" element={<ServicesPage />} />
          <Route path="szolgaltatasok/:slug" element={<ServiceDetailPage />} />
          <Route path="termekek" element={<ProductsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
