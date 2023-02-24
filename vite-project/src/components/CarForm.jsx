import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";
import { useRef } from "react";

function CarForm() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleNameChange = (event) => {
    //event.target.value
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event) => {
    const carCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(carCost));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({ name: name, cost: cost }));
  };
  return (
    <div className="">
      <h4 className="title is-2">Add car</h4>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            className=""
            placeholder="Car name"
            value={name}
            name="car"
            onChange={handleNameChange}
          />

          <div>
            <label>Cost</label>
            <input
              className=""
              value={cost || ""}
              onChange={handleCostChange}
              type="number"
              placeholder="Cost"
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
