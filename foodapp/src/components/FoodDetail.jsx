import { useEffect, useState } from "react";

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
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} alt={food.image} />
        <div>
          <span>
            <strong>{food.readyInMinutes} Minutes</strong>
            <span>{food.vegetarian ? "Vegetarian" : "Non-Vegetarian"}</span>
          </span>
          <span>
            <strong>Serves {food.servings}</strong>
          </span>
          <span>{food.vegan ? "Vegan" : ""}</span>
        </div>
        <div>
          $ <span>{food.pricePerServing / 100} Per serving</span>
        </div>
      </div>
      <div>
        <h2>Instructions</h2>
        {isLoading ? (
          <p>Loading ...</p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => <li>{step.step}</li>)
        )}
      </div>
    </div>
  );
}
