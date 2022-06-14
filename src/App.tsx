import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../src/app/store";
import "./App.css";
import CustomerCard from "./component/CustomerCard";
import ReservationCard from "./component/ReservationCard";
import { addReservation } from "./features/reservationSlice";

function App() {
  const [reservationNameInput, setReservationNameInput] = useState("");

  const dispatch = useDispatch();
  const handleAddReservations = () => {
    if (!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("");
  };
  const reservations = useSelector(
    (state: RootState) => state.reservation.value
  );
  const customers = useSelector((state: RootState) => state.customer.value);
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return <ReservationCard index={index} name={name} />;
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationNameInput}
              onChange={(e) => setReservationNameInput(e.target.value)}
            />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer) => {
            return (
              <CustomerCard
                id={customer.id}
                name={customer.name}
                food={customer.food}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
