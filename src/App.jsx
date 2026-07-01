import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToHash from './components/ScrollToHash'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import ProductsPage from './pages/ProductsPage'
import CoursePage from './pages/CoursePage'
import AdminPage from './pages/AdminPage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="szolgaltatasok" element={<ServicesPage />} />
          <Route path="szolgaltatasok/:slug" element={<ServiceDetailPage />} />
          <Route path="tanfolyam" element={<CoursePage />} />
          <Route path="termekek" element={<ProductsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
