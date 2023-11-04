import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "../src/assets/css/App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
