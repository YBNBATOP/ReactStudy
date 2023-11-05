import { useEffect, useState } from "react";

export default function FoodDetail({ foodId }) {
  const BASE_URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "4c60cf12ba3e4ef6ac3ac97e6db59fd5";

  const [food, setFood] = useState({});

  useEffect(() => {
    async function fetchDetail() {
      const res = await fetch(`${BASE_URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setFood(data);
    }
    fetchDetail();
  }, [foodId]);

  return (
    <div>
      Food Details {foodId}
      {food.title}
      <img src={food.image} alt={food.image} />
    </div>
  );
}
