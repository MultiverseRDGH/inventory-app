import "./App.css";
import ItemList from "./components/ItemList";
import { Routes, Route } from "react-router-dom";
import SingleItemPage from "./pages/SingleItemPage";
import NewItemPage from "./pages/NewItemPage";

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Routes>
        <Route path="/items" element={<ItemList />}></Route>
        <Route path="/items/single/:id" element={<SingleItemPage />}></Route>
        <Route path="/items/new" element={<NewItemPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
