import React, { useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  const [soldOutPlants, setSoldOutPlants] = useState([]);

  function handleSoldOut(plantId) {
    setSoldOutPlants([...soldOutPlants, plantId]);
  }

  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          isSoldOut={soldOutPlants.includes(plant.id)}
          onSoldOut={handleSoldOut}
        />
      ))}
    </ul>
  );
}

export default PlantList;