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
    <div className=" p-4 bg-purple-400  rounded-lg w-4/5 m-4">
      <p className="mr-4 font-normal">{name}</p>
      <div className="flex w-full justify-between mt-4">
        <div className="flex">
          {food.map((food, index) => {
            return (
              <p className="pr-1">
                {index + 1}."{food}"
              </p>
            );
          })}
        </div>
        <div className="flex">
          <input
            className="border-red-300 border-4 rounded-md w-20 mr-1"
            value={foodInput}
            onChange={(e) => setFoodInput(e.target.value)}
          />
          <button
            className="bg-green-400 text-white rounded-md  px-4"
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
