import Fruit from "./Fruit";
export default function Fruits() {
  //const fruits = ["Apple", "Mango", "Banana"];
  const fruits = [
    { name: "Apple", price: 10, soldOut: false },
    { name: "Banana", price: 2, soldOut: true },
    { name: "Mango", price: 3, soldOut: true },
    { name: "Orange", price: 8, soldOut: false },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit key={fruit.name} fruit={fruit} />
        ))}
      </ul>
    </div>
  );
}
