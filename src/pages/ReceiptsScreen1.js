import './ReceiptsScreen1.css'
import { useNavigate } from 'react-router-dom'
const ReceiptsScreen1 = () => {
  const navigate = useNavigate()

  const handleClickBarCode = () => {
    // Use history.push to change the route
    navigate('/barcode-screen')
  }
  const handleClickDetails = () => {
    // Use history.push to change the route
    navigate('/receipts-details-screen1')
  }
  const handleClickReturn = () => {
    // Use history.push to change the route
    navigate('/')
  }
  return (
    <div className="receipts-screen1 centered-content">
      <div className="receipts-screen-child9" />
      <div className="receipts-screen-child10" />
      <img className="vector-icon23" alt="" src="/vector.svg" />
      <div className="search-for-receipt2">Search for receipt here</div>
      <div className="my-receipts2">My Receipts</div>
      <b className="welcome-to-ftr-container2">
        <span>{`Welcome To `}</span>
        <span className="ftr-client2">FTR Client</span>
      </b>
      <div className="receipts-screen-child11" />
      <div className="receipts-screen-child12" />
      <div className="receipts-screen-child13" />
      <div className="receipts-screen-child14" />
      <div className="receipts-screen-child15" />
      <div className="choco-land7">{`Choco Land `}</div>
      <div className="choco-land8">{`Choco Land `}</div>
      <div className="see-all2">See all</div>
      <div className="choco-land9">{`Choco Land `}</div>
      <div className="choco-land10">{`Choco Land `}</div>
      <div className="choco-land11">{`Choco Land `}</div>
      <div className="at-2320057">08-09-2023 at 23:20:05</div>
      <div className="at-2320058">08-09-2023 at 23:20:05</div>
      <div className="let-store-owners3">
        Let Store Owners Scan Your Barcode
      </div>
      <div className="items7">7 items</div>
      <div className="items8">7 items</div>
      <div className="items9">7 items</div>
      <div className="items10">7 items</div>
      <div className="items11">7 items</div>
      <div className="at-2320059">08-09-2023 at 23:20:05</div>
      <div className="at-23200510">08-09-2023 at 23:20:05</div>
      <div className="at-23200511">08-09-2023 at 23:20:05</div>
      <div className="div7">60.00</div>
      <div className="div8">60.00</div>
      <div className="div9">50.00</div>
      <div className="div10">50.00</div>
      <div className="div11">50.00</div>
      <div className="receipts-screen-child16" />
      <div className="receipts-screen-child17" />
      <div className="receipts-screen-child18" />
      <div className="receipts-screen-child19" />
      <div className="receipts-screen-child20" />
      <img
        className="vector-icon24"
        alt=""
        src="/vector16.svg"
        style={{ cursor: 'pointer' }}
        onClick={handleClickDetails}
      />
      <img
        className="vector-icon25"
        alt=""
        src="/vector17.svg"
        style={{ cursor: 'pointer' }}
        onClick={handleClickDetails}
      />
      <img className="vector-icon26" alt="" src="/vector2.svg" />
      <img
        className="vector-icon27"
        alt=""
        src="/vector18.svg"
        style={{ cursor: 'pointer' }}
        onClick={handleClickDetails}
      />
      <img
        className="vector-icon28"
        alt=""
        src="/vector19.svg"
        style={{ cursor: 'pointer' }}
        onClick={handleClickDetails}
      />
      <img className="vector-icon29" alt="" src="/vector20.svg" />
      <div className="receipts-screen-child21" />
      <div className="choco-land12">{`Choco Land `}</div>
      <div className="at-23200512">08-09-2023 at 23:20:05</div>
      <div className="receipts-screen-child22" />
      <img
        className="vector-icon30"
        alt=""
        src="/vector21.svg"
        style={{ cursor: 'pointer' }}
        onClick={handleClickDetails}
      />
      <div className="group-div">
        <div className="group-child6" />
        <div className="invoice-id-1231">Invoice ID: 123</div>
        <div className="at-23200513">08-09-2023 at 23:20:05</div>
        <div className="group-child7" />
        <img className="vector-icon31" alt="" src="/vector7.svg" />
      </div>
      <div className="items12">7 items</div>
      <div className="items13">7 items</div>
      <div className="div12">50.00</div>
      <div className="div13">50.00</div>
      <div className="rectangle-parent1">
        <div className="group-child8" />
        <img
          className="vector-icon32"
          alt=""
          src="/vector8.svg"
          style={{ cursor: 'pointer' }}
          onClick={handleClickReturn}
        />
        <div className="receipts2">Receipts</div>
        <img className="vector-icon33" alt="" src="/vector9.svg" />
        <div className="sratistics2">Sratistics</div>
        <img className="group-icon2" alt="" src="/group.svg" />
        <div className="account2">Account</div>
        <div className="cards2">Cards</div>
        <div className="offers2">Offers</div>
        <img className="group-child9" alt="" src="/group-2.svg" />
        <img className="vector-icon34" alt="" src="/vector10.svg" />
      </div>
      <img className="fichier-4-8-12" alt="" src="/fichier-48-1@2x.png" />
      <img className="vector-icon35" alt="" src="/vector11.svg" />
      <div
        className="vector-container"
        style={{ cursor: 'pointer' }}
        onClick={handleClickBarCode}
      >
        <img className="vector-icon36" alt="" src="/vector12.svg" />
        <div className="group-child10" />
      </div>
    </div>
  )
}

export default ReceiptsScreen1
