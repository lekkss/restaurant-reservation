import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer } from "../features/customerSlice";

interface CustomerCardType {
  id: string;
  name: string;
  food: string[];
}

export default function CustomerCard({ id, name, food }: CustomerCardType) {
  const [foodInput, setFoodInput] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food) => {
            return <p>{food}</p>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input
            value={foodInput}
            onChange={(e) => setFoodInput(e.target.value)}
          />
          <button
            onClick={() => {
              if (!foodInput) {
                return;
              }
              dispatch(addFoodToCustomer({ id, food: foodInput }));
              setFoodInput("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
