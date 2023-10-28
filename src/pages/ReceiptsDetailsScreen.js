import './ReceiptsDetailsScreen.css'
import { useNavigate } from 'react-router-dom'
const ReceiptsDetailsScreen = () => {
  const navigate = useNavigate()

  const handleDivClick = () => {
    // Use history.push to change the route
    navigate('/receipts-details-screen1')
  }
  return (
    <div className="receipts-details-screen centered-content">
      <img
        className="receipts-details-screen-child"
        alt=""
        src="/rectangle-34624289@2x.png"
      />
      <img
        className="vector-icon14"
        alt=""
        src="/vector14.svg"
        style={{ cursor: 'pointer' }}
        onClick={handleDivClick}
      />
    </div>
  )
}

export default ReceiptsDetailsScreen
