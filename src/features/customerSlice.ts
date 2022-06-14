import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";



//only TS
interface CustomerState{
    value: Customer[]
}
interface AddFoodToCustomerPayload{
    id: string,
    food: string
}
interface Customer{
    id: string,
    name: string,
    food: string[]
}

const initialState: CustomerState = {
    value: [
        {   
            id: uuid(),
            name:"Taylor",
            food:["Yam", "Egg"]
            
        }
    ]
}
export const customerSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<Customer>) =>{
            state.value.push(action.payload);
        },
        addFoodToCustomer: (state, action: PayloadAction<AddFoodToCustomerPayload> )=>{
            state.value.forEach((customer=>{
                if(customer.id === action.payload.id){
                    customer.food.push(action.payload.food)
                }
            }))
        }
    }
})

export const {addCustomer, addFoodToCustomer} = customerSlice.actions

export default customerSlice.reducer