import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import ConditionalComponent from "./components/ConditionalComponent";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Form from "./components/Form";

function App() {
  const person = {
    name: "Rob",
    message: "Hi there",
    seatNumbers: [1, 4, 7],
  };
  return (
    <div className="App">
      <Form />
    </div>
  );
}
export default App;
