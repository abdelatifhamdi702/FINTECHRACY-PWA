/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react'
import { Routes, Route, useNavigationType, useLocation } from 'react-router-dom'
import ReceiptsScreen from './pages/ReceiptsScreen'
import BarcodeScreen from './pages/BarcodeScreen'
import ReceiptsDetailsScreen from './pages/ReceiptsDetailsScreen'
import ReceiptsDetailsScreen1 from './pages/ReceiptsDetailsScreen1'
import ReceiptsScreen1 from './pages/ReceiptsScreen1'
import ReceiptsScreen11 from './pages/ReceiptsScreen11'

function App() {
  const action = useNavigationType()
  const location = useLocation()
  const pathname = location.pathname

  useEffect(() => {
    if (action !== 'POP') {
      window.scrollTo(0, 0)
    }
  }, [action, pathname])

  useEffect(() => {
    let title = ''
    let metaDescription = ''

    switch (pathname) {
      case '/':
        title = ''
        metaDescription = ''
        break
      case '/barcode-screen':
        title = ''
        metaDescription = ''
        break
      case '/receipts-details-screen':
        title = ''
        metaDescription = ''
        break
      case '/receipts-details-screen1':
        title = ''
        metaDescription = ''
        break
      case '/receipts-screen':
        title = ''
        metaDescription = ''
        break
      case '/receipts-screen1':
        title = ''
        metaDescription = ''
        break
    }

    if (title) {
      document.title = title
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      )
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription
      }
    }
  }, [pathname])

  return (
    <Routes>
      <Route path="/" element={<ReceiptsScreen />} />
      <Route path="/barcode-screen" element={<BarcodeScreen />} />
      <Route
        path="/receipts-details-screen"
        element={<ReceiptsDetailsScreen />}
      />
      <Route
        path="/receipts-details-screen1"
        element={<ReceiptsDetailsScreen1 />}
      />
      <Route path="/receipts-screen" element={<ReceiptsScreen1 />} />
      <Route path="/receipts-screen1" element={<ReceiptsScreen11 />} />
    </Routes>
  )
}
export default App
