import { configureStore } from "@reduxjs/toolkit";
import { formReducer, changeCost, changeName } from "./slice/FormSlice";
import {
  carsReducer,
  changeSearchTerm,
  addCar,
  removeCar,
} from "./slice/carsSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { store, changeName, changeCost, changeSearchTerm, addCar, removeCar };
