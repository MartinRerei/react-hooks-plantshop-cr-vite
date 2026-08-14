import React from "react";

function PlantCard({ plant, isSoldOut, onSoldOut }) {
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>

      {isSoldOut ? (
        <button>Out of Stock</button>
      ) : (
        <button
          className="primary"
          onClick={() => onSoldOut(plant.id)}
        >
          In Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;