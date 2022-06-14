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
      <div className="container flex">
        <div className="reservation-container w-1/5 border-r border-red-300">
          <div>
            <h5 className=" text-2xl">Reservations</h5>
            <div className="h-96 min-h-full ">
              {reservations.map((name, index) => {
                return <ReservationCard index={index} name={name} />;
              })}
            </div>
          </div>
          <div className=" w-4/5">
            <input
              className="mb-1 w-fullbg-slate-400 h-8 rounded-sm border-red-300 border-4"
              value={reservationNameInput}
              onChange={(e) => setReservationNameInput(e.target.value)}
            />
            <button
              className="bg-green-400 text-white rounded-md  px-4 h-8"
              onClick={handleAddReservations}
            >
              Add
            </button>
          </div>
        </div>
        <div className="flex flex-col w-4/5 ml-2">
          <h5 className=" text-2xl">Customer Card</h5>
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
