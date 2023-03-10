import "./App.css";
import ItemList from "./components/ItemList";
import { Routes, Route } from "react-router-dom";
import SingleItemPage from "./pages/SingleItemPage";
import NewItemPage from "./pages/NewItemPage";
import { createContext, useState } from "react";

export const OrderContext = createContext({
  orders: [],
  setOrders: () => {},
});

function App() {
  const [orders, setOrders] = useState([]);
  return (
    <>
      <h1>Hello</h1>
      <OrderContext.Provider value={{ orders, setOrders }}>
        <Routes>
          <Route path="/items" element={<ItemList />}></Route>
          <Route path="/items/single/:id" element={<SingleItemPage />}></Route>
          <Route path="/items/new" element={<NewItemPage />}></Route>
        </Routes>
      </OrderContext.Provider>
    </>
  );
}

export default App;
