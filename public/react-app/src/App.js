import "./App.css";
import ItemList from "./components/ItemList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Routes>
        <Route path="/items" element={<ItemList />}></Route>
      </Routes>
    </>
  );
}

export default App;
