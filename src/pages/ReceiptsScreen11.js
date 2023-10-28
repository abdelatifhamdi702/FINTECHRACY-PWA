import './ReceiptsScreen11.css'
import { useNavigate } from 'react-router-dom'
const ReceiptsScreen11 = () => {
  const navigate = useNavigate()

  const handleClickHighlight = () => {
    // Use history.push to change the route
    navigate('/receipts-screen')
  }
  const handleClickDetails = () => {
    // Use history.push to change the route
    navigate('/receipts-details-screen1')
  }
  return (
    <div className="receipts-screen2 centered-content">
      <div className="receipts-screen-child23" />
      <div className="receipts-screen-child24" />
      <img className="vector-icon37" alt="" src="/vector.svg" />
      <div className="search-for-receipt3">Search for receipt here</div>
      <div className="my-receipts3">My Receipts</div>
      <b className="welcome-to-ftr-container3">
        <span>{`Welcome To `}</span>
        <span className="ftr-client3">FTR Client</span>
      </b>
      <div className="receipts-screen-child25" />
      <div className="receipts-screen-child26" />
      <div className="receipts-screen-child27" />
      <div className="receipts-screen-child28" />
      <div className="choco-land13">{`Choco Land `}</div>
      <div className="see-all3">See all</div>
      <div className="choco-land14">{`Choco Land `}</div>
      <div className="choco-land15">{`Choco Land `}</div>
      <div className="choco-land16">{`Choco Land `}</div>
      <div className="at-23200514">08-09-2023 at 23:20:05</div>
      <div className="let-store-owners4">
        Let Store Owners Scan Your Barcode
      </div>
      <div className="items14">7 items</div>
      <div className="items15">7 items</div>
      <div className="items16">7 items</div>
      <div className="items17">7 items</div>
      <div className="at-23200515">08-09-2023 at 23:20:05</div>
      <div className="at-23200516">08-09-2023 at 23:20:05</div>
      <div className="at-23200517">08-09-2023 at 23:20:05</div>
      <div className="div14">60.00</div>
      <div className="div15">50.00</div>
      <div className="div16">50.00</div>
      <div className="div17">50.00</div>
      <div className="receipts-screen-child29" />
      <div className="receipts-screen-child30" />
      <div className="receipts-screen-child31" />
      <div className="receipts-screen-child32" />
      <img className="vector-icon38" alt="" src="/vector1.svg" />
      <img className="vector-icon39" alt="" src="/vector2.svg" />
      <img className="vector-icon40" alt="" src="/vector3.svg" />
      <img className="vector-icon41" alt="" src="/vector4.svg" />
      <img className="vector-icon42" alt="" src="/vector5.svg" />
      <div className="receipts-screen-child33" />
      <div className="choco-land17">{`Choco Land `}</div>
      <div className="at-23200518">08-09-2023 at 23:20:05</div>
      <div className="receipts-screen-child34" />
      <img className="vector-icon43" alt="" src="/vector6.svg" />
      <div className="rectangle-parent2">
        <div className="group-child11" />
        <div className="invoice-id-1232">Invoice ID: 123</div>
        <div className="at-23200519">08-09-2023 at 23:20:05</div>
        <div className="group-child12" />
        <img className="vector-icon44" alt="" src="/vector7.svg" />
      </div>
      <div className="items18">7 items</div>
      <div className="items19">7 items</div>
      <div className="div18">50.00</div>
      <div className="div19">50.00</div>
      <div className="rectangle-parent3">
        <div className="group-child13" />
        <img className="vector-icon45" alt="" src="/vector8.svg" />
        <div className="receipts3">Receipts</div>
        <img className="vector-icon46" alt="" src="/vector9.svg" />
        <div className="sratistics3">Sratistics</div>
        <img className="group-icon3" alt="" src="/group.svg" />
        <div className="account3">Account</div>
        <div className="cards3">Cards</div>
        <div className="offers3">Offers</div>
        <img className="group-child14" alt="" src="/group-2.svg" />
        <img className="vector-icon47" alt="" src="/vector10.svg" />
      </div>
      <img className="fichier-4-8-13" alt="" src="/fichier-48-1@2x.png" />
      <img className="vector-icon48" alt="" src="/vector11.svg" />
      <div className="vector-parent1">
        <img className="vector-icon49" alt="" src="/vector12.svg" />
        <div className="group-child15" />
      </div>
      <img
        className="receipts-screen-child35"
        alt=""
        src="/rectangle-136.svg"
      />
      <div className="rectangle-parent4">
        <div className="group-child16" />
        <div className="theres-a-fresh-container">
          <p className="theres-a-fresh">{`There's a fresh receipt `}</p>
          <p className="theres-a-fresh">in your inbox!</p>
        </div>
        <div
          className="group-child17"
          style={{ cursor: 'pointer' }}
          onClick={handleClickDetails}
        />
        <b className="check-it">Check it</b>
        <div
          className="remind-me-later"
          style={{ cursor: 'pointer' }}
          onClick={handleClickHighlight}
        >
          Remind me later
        </div>
        <img
          className="vector-icon50"
          alt=""
          src="/vector131.svg"
          style={{ cursor: 'pointer' }}
          onClick={handleClickHighlight}
        />
      </div>
      <img className="image-5-icon" alt="" src="/image-5@2x.png" />
    </div>
  )
}

export default ReceiptsScreen11
