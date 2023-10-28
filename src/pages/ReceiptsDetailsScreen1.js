import './ReceiptsDetailsScreen1.css'
import { useNavigate } from 'react-router-dom'
const ReceiptsDetailsScreen1 = () => {
  const navigate = useNavigate()

  const handleDivClick = () => {
    // Use history.push to change the route
    navigate('/receipts-details-screen')
  }
  const handleClickBarCode = () => {
    // Use history.push to change the route
    navigate('/barcode-screen')
  }
  const handleClickReturn = () => {
    // Use history.push to change the route
    navigate('/')
  }
  return (
    <div className="receipts-details-screen1 centered-content">
      <div className="receipts-details-screen-item" />
      <div className="receipts-details-screen-inner" />
      <img className="vector-icon15" alt="" src="/vector.svg" />
      <div className="search-for-receipt1">Search for receipt here</div>
      <div className="my-receipts1">My Receipts</div>
      <b className="welcome-to-ftr-container1">
        <span>{`Welcome To `}</span>
        <span className="ftr-client1">FTR Client</span>
      </b>
      <div className="receipts-details-screen-child1" />
      <div className="choco-land5">{`Choco Land `}</div>
      <div className="see-all1">See all</div>
      <div className="at-2320056">08-09-2023 at 23:20:05</div>
      <div className="let-store-owners2">
        Let Store Owners Scan Your Barcode
      </div>
      <div className="items6">7 items</div>
      <div className="div6">60.00</div>
      <div className="receipts-details-screen-child2" />
      <img className="vector-icon16" alt="" src="/vector15.svg" />
      <img className="vector-icon17" alt="" src="/vector2.svg" />
      <img className="fichier-4-8-11" alt="" src="/fichier-48-1@2x.png" />
      <img className="vector-icon18" alt="" src="/vector11.svg" />
      <div className="rectangle-container">
        <div className="group-child3" />
        <img
          className="vector-icon19"
          alt=""
          src="/vector8.svg"
          style={{ cursor: 'pointer' }}
          onClick={handleClickReturn}
        />
        <div className="receipts1">Receipts</div>
        <img className="vector-icon20" alt="" src="/vector9.svg" />
        <div className="sratistics1">Sratistics</div>
        <img className="group-icon1" alt="" src="/group.svg" />
        <div className="account1">Account</div>
        <div className="cards1">Cards</div>
        <div className="offers1">Offers</div>
        <img className="group-child4" alt="" src="/group-2.svg" />
        <img className="vector-icon21" alt="" src="/vector10.svg" />
      </div>
      <div className="receipts-details-screen-child3" />
      <div
        className="vector-group"
        style={{ cursor: 'pointer' }}
        onClick={handleClickBarCode}
      >
        <img className="vector-icon22" alt="" src="/vector12.svg" />
        <div className="group-child5" />
      </div>
      <img
        className="rectangle-icon"
        alt=""
        src="/rectangle-346242891@2x.png"
        style={{ cursor: 'pointer' }}
        onClick={handleDivClick}
      />
      <div className="receipts-details-screen-child4" />
      <div className="paid">Paid</div>
      <div className="choco-land6">Choco Land</div>
      <div className="chocolandgmailcom">choco.land@gmail.com</div>
    </div>
  )
}

export default ReceiptsDetailsScreen1
