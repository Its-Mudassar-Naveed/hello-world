import { useState } from "react";

function Car() {
  const [car, setCar] = useState({
    name: "Honda",
    model: "2018",
    type: "fuel",
    owner: "Meer Hadi",
  });
  return (
    <>
      <p>The car name is {car.name},</p>
      <p>The car Model is {car.model}</p>
      <button onClick={() => setCar({ name: "audi" })}>Change</button>
      <button onClick={() => setCar({ model: "2020" })}>Model</button>
    </>
  );
}
export default Car;
