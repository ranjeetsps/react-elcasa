import { Link } from "react-router-dom";
import styles from "./Cities.module.css";

export const citiesData = [
  {
    id: 1,
    name: "New York",
    country: "USA",
    history:
      "New York was originally settled by the Dutch and named New Amsterdam. It later became a major port and cultural center.",
    latitude: 40.7128,
    longitude: -74.006,
    founded: "1624",
  },
  {
    id: 2,
    name: "London",
    country: "UK",
    history:
      "London has a rich history dating back to Roman times, evolving through the Middle Ages and becoming a global city.",
    latitude: 51.5074,
    longitude: -0.1278,
    founded: "43 AD",
  },
  {
    id: 3,
    name: "Tokyo",
    country: "Japan",
    history:
      "Originally a small fishing village, Tokyo grew to become Japan’s capital and a major metropolis.",
    latitude: 35.6895,
    longitude: 139.6917,
    founded: "1457",
  },
  {
    id: 4,
    name: "Paris",
    country: "France",
    history:
      "Paris, known for its art, fashion, and culture, has roots dating back to a Roman settlement in the 3rd century BC.",
    latitude: 48.8566,
    longitude: 2.3522,
    founded: "3rd century BC",
  },
  {
    id: 5,
    name: "Sydney",
    country: "Australia",
    history:
      "Sydney was established as a penal colony in the late 18th century and has grown to be a vibrant global city.",
    latitude: -33.8688,
    longitude: 151.2093,
    founded: "1788",
  },
  {
    id: 6,
    name: "Cairo",
    country: "Egypt",
    history:
      "Cairo, Egypt’s sprawling capital, has landmarks from ancient Egypt, including the pyramids and Great Sphinx of Giza.",
    latitude: 30.0444,
    longitude: 31.2357,
    founded: "969 AD",
  },
  {
    id: 7,
    name: "Berlin",
    country: "Germany",
    history:
      "Berlin, known for its turbulent 20th-century history, is now a hub of culture, science, and innovation in Europe.",
    latitude: 52.52,
    longitude: 13.405,
    founded: "1237",
  },
  {
    id: 8,
    name: "Moscow",
    country: "Russia",
    history:
      "Moscow is Russia’s capital and a historic city, with the Kremlin and Red Square as notable landmarks.",
    latitude: 55.7558,
    longitude: 37.6176,
    founded: "1147",
  },
];
function Cities() {
  // citiesData.js
  console.log("cities");
  return (
    <div>
      <ul>
        {citiesData.map((city, index) => (
          <li key={index}>
            <Link className={styles.cities} to={`/travel/cities/${city.id}`}>
              {city.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cities;
