import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './globals.css'

import { MainLayout } from './components/MainLayout/MainLayout'
import { HomePage } from './pages/HomePage/HomePage'
import { AboutPage } from './pages/AboutPage/AboutPage'
import { ContactPage } from './pages/ContactPage/ContactPage'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'
import { StorePage } from './pages/StorePage/StorePage'


import { UserContextProvider } from './context/UserContext'

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/store' element={<StorePage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App