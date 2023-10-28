import './BarcodeScreen.css'
import { useNavigate } from 'react-router-dom'
const BarcodeScreen = () => {
  const navigate = useNavigate()

  const handleDivClick = () => {
    // Use history.push to change the route
    navigate('/')
  }
  return (
    <div className="barcode-screen centered-content">
      <img className="image-1-icon" alt="" src="/image-1@2x.png" />
      <div className="let-store-owners-container">
        <p className="get-your-receipts">
          Let Store Owners Scan Your Barcode to
        </p>
        <p className="get-your-receipts">get your receipts</p>
      </div>
      <img
        className="vector-icon13"
        alt=""
        src="/vector13.svg"
        style={{ cursor: 'pointer' }}
        onClick={handleDivClick}
      />
      <img className="glaygvglay-1-icon" alt="" src="/glaygvglay-1@2x.png" />
    </div>
  )
}

export default BarcodeScreen
