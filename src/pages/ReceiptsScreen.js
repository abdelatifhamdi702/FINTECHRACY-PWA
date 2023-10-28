/* eslint-disable react/react-in-jsx-scope */
import './ReceiptsScreen.css'
import { useNavigate } from 'react-router-dom'

const ReceiptsScreen = () => {
  const navigate = useNavigate()

  const handleDivClick = () => {
    // Use history.push to change the route
    navigate('/barcode-screen')
  }
  const handleClickDetails = () => {
    // Use history.push to change the route
    navigate('/receipts-details-screen1')
  }
  const handleClickPopUp = () => {
    // Use history.push to change the route
    navigate('/receipts-screen1')
  }
  return (
    <div className="receipts-screen centered-content">
      <div className="receipts-screen-child" />
      <div className="receipts-screen-item" />
      <img className="vector-icon" alt="" src="/vector.svg" />
      <div className="search-for-receipt">Search for receipt here</div>
      <div className="my-receipts">My Receipts</div>
      <b className="welcome-to-ftr-container">
        <span>{`Welcome To `}</span>
        <span className="ftr-client">FTR Client</span>
      </b>
      <div className="receipts-screen-inner" />
      <div className="rectangle-div" />
      <div className="receipts-screen-child1" />
      <div className="receipts-screen-child2" />
      <div className="choco-land">{`Choco Land `}</div>
      <div className="see-all">See all</div>
      <div className="choco-land1">{`Choco Land `}</div>
      <div className="choco-land2">{`Choco Land `}</div>
      <div className="choco-land3">{`Choco Land `}</div>
      <div className="at-232005">08-09-2023 at 23:20:05</div>
      <div className="let-store-owners">Let Store Owners Scan Your Barcode</div>
      <div className="items">7 items</div>
      <div className="items1">7 items</div>
      <div className="items2">7 items</div>
      <div className="items3">7 items</div>
      <div className="at-2320051">08-09-2023 at 23:20:05</div>
      <div className="at-2320052">08-09-2023 at 23:20:05</div>
      <div className="at-2320053">08-09-2023 at 23:20:05</div>
      <div className="div">60.00</div>
      <div className="div1">50.00</div>
      <div className="div2">50.00</div>
      <div className="div3">50.00</div>
      <div className="receipts-screen-child3" />
      <div className="receipts-screen-child4" />
      <div className="receipts-screen-child5" />
      <div className="receipts-screen-child6" />
      <img
        className="vector-icon1"
        alt=""
        src="/vector1.svg"
        style={{ cursor: 'pointer' }}
        onClick={handleClickDetails}
      />
      <img className="vector-icon2" alt="" src="/vector2.svg" />
      <img
        className="vector-icon3"
        alt=""
        src="/vector3.svg"
        style={{ cursor: 'pointer' }}
        onClick={handleClickDetails}
      />
      <img
        className="vector-icon4"
        alt=""
        src="/vector4.svg"
        style={{ cursor: 'pointer' }}
        onClick={handleClickDetails}
      />
      <img
        className="vector-icon5"
        alt=""
        src="/vector5.svg"
        style={{ cursor: 'pointer' }}
        onClick={handleClickDetails}
      />
      <div className="receipts-screen-child7" />
      <div className="choco-land4">{`Choco Land `}</div>
      <div className="at-2320054">08-09-2023 at 23:20:05</div>
      <div className="receipts-screen-child8" />
      <img
        className="vector-icon6"
        alt=""
        src="/vector6.svg"
        style={{ cursor: 'pointer' }}
        onClick={handleClickDetails}
      />
      <div className="rectangle-parent">
        <div className="group-child" />
        <div className="invoice-id-123">Invoice ID: 123</div>
        <div className="at-2320055">08-09-2023 at 23:20:05</div>
        <div className="group-item" />
        <img className="vector-icon7" alt="" src="/vector7.svg" />
      </div>
      <div className="items4">7 items</div>
      <div className="items5">7 items</div>
      <div className="div4">50.00</div>
      <div className="div5">50.00</div>
      <div className="rectangle-group">
        <div className="group-inner" />
        <img className="vector-icon8" alt="" src="/vector8.svg" />
        <div className="receipts">Receipts</div>
        <img className="vector-icon9" alt="" src="/vector9.svg" />
        <div className="sratistics">Sratistics</div>
        <img className="group-icon" alt="" src="/group.svg" />
        <div className="account">Account</div>
        <div className="cards">Cards</div>
        <div className="offers">Offers</div>
        <img className="group-child1" alt="" src="/group-2.svg" />
        <img className="vector-icon10" alt="" src="/vector10.svg" />
      </div>
      <img className="fichier-4-8-1" alt="" src="/fichier-48-1@2x.png" />
      <img
        className="vector-icon11"
        alt=""
        src="/vector11.svg"
        style={{ cursor: 'pointer' }}
        onClick={handleClickPopUp}
      />
      <div
        className="vector-parent"
        style={{ cursor: 'pointer' }}
        onClick={handleDivClick}
      >
        <img className="vector-icon12" alt="" src="/vector12.svg" />
        <div className="group-child2" />
      </div>
    </div>
  )
}

export default ReceiptsScreen
