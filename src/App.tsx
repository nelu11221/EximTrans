import { MotionConfig } from 'motion/react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Servicii from './pages/Servicii'
import Flota from './pages/Flota'
import Despre from './pages/Despre'
import Urmarire from './pages/Urmarire'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="servicii" element={<Servicii />} />
            <Route path="flota" element={<Flota />} />
            <Route path="despre" element={<Despre />} />
            <Route path="urmarire" element={<Urmarire />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  )
}
