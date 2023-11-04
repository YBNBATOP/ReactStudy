import { useEffect, useState } from "react";
import styles from "../assets/css/search.module.css";

const BASE_URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "4c60cf12ba3e4ef6ac3ac97e6db59fd5";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${BASE_URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
