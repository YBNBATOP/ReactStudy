export default function Fruit(props) {
  return (
    <li>
      {props.fruit.name} {props.fruit.price}{" "}
      {props.fruit.soldOut ? "Sold out" : ""}
    </li>
  );
}
