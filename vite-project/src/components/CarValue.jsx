import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) =>
    data
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, car) => acc + car.cost, 0)
  );

  // const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
  //   return data
  //     .filter((car) =>
  //       car.name.toLowerCase().includes(searchTerm.toLowerCase())
  //     )
  //     .reduce((acc, car) => acc + car.cost, 0);
  // const filterCars = data
  //   .filter((car) => {
  //     return car.name.toLowerCase().includes(searchTerm.toLowerCase());
  //   })
  //   .reduce((acc, car) => acc + car.cost, 0);
  // return filterCars.reduce((acc, car) => acc + car.cost, 0);
  // return filterCars.reduce((acc, car) => {
  //   return acc + car.cost;
  // }, 0);
  // let cost = 0;
  // for (let car of filterCars) {
  //   cost += car.cost;
  // }
  // return cost;
  // });
  return (
    <div>
      <h4 className="title is-4">Total Cost :${totalCost}</h4>
    </div>
  );
}

export default CarValue;
