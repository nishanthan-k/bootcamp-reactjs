import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ReactPropsState() {
  return (
    <>
      <div className="ModuleBtns">
        <Link to="/ReactPropsState/Cricket">
          <button>Cricket</button>
        </Link>
        <Link to="/ReactPropsState/ChildrenProperty">
          <button>Children Property</button>
        </Link>
        <Link to="/ReactPropsState/TicketBooking">
          <button>Ticket Booking</button>
        </Link>
      </div>
    </>
  )
}

export default ReactPropsState