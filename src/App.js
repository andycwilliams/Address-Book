import AddressList from "./components/AddressList";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  return (
    <>
      <AddressList addresses={addresses} />
    </>
  );
}

export default App;
