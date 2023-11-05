import { useEffect, useState } from "react";
import styles from "../assets/css/fooddetails.module.css";

export default function FoodDetail({ foodId }) {
  const BASE_URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "4c60cf12ba3e4ef6ac3ac97e6db59fd5";

  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchDetail() {
      const res = await fetch(`${BASE_URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setFood(data);
      console.log(data);
      setIsLoading(false);
    }
    fetchDetail();
  }, [foodId]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt={food.image} />
        <div className={styles.recipeDetails}>
          <span>
            <strong>{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>{food.vegetarian ? "Vegetarian" : "Non-Vegetarian"}</strong>
          </span>
          <span>
            <strong>Serves {food.servings}</strong>
          </span>
          <span>
            <strong>{food.vegan ? "Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          $
          <span>
            <strong>{food.pricePerServing / 100} Per serving</strong>
          </span>
        </div>

        <h2>Ingredients</h2>
        {food.extendedIngredients.map((item) => (
          <div>
            <img
              src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
              alt=""
            />
            <h3>{item.name}</h3>
            <h3>
              {item.amount} {item.unit}
            </h3>
          </div>
        ))}

        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading ...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
