// City.js
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { citiesData } from "./Cities";
import styles from "./Cities.module.css";

function City() {
  const { id } = useParams(); // Fetch id from URL params
  const city = citiesData.find((city) => city.id === parseInt(id));
  const navigate = useNavigate();

  function GoBackToCities() {
    navigate(-1);
  }

  if (!city) {
    return <p>City not found!</p>;
  }

  return (
    <div className={styles.city}>
      <h2>
        {city.name}, {city.country}
      </h2>
      <p>
        <strong>History:</strong> {city.history}
      </p>
      <p>
        <strong>Location:</strong> Lat {city.latitude}, Long {city.longitude}
      </p>
      <p>
        <strong>Founded:</strong> {city.founded}
      </p>
      <div className={styles.backdiv}>
        <button onClick={GoBackToCities}> ⬅️ Back</button>
      </div>
    </div>
  );
}

export default City;
