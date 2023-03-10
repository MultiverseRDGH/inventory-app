import './App.css';
import ItemList from './components/ItemList';
import { Routes, Route } from 'react-router-dom';
import SingleItemPage from './pages/SingleItemPage';
import NewItemPage from './pages/NewItemPage';
import { createContext, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OrdersPage from './pages/OrdersPage';
import SidebarMenu from './components/SidebarMenu';

export const OrderContext = createContext({
  orders: [],
  setOrders: () => {},
});

function App() {
  const [orders, setOrders] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <OrderContext.Provider value={{ orders, setOrders }}>
        <Navbar toggle={toggle} />
        <SidebarMenu isOpen={isOpen} toggle={toggle} />
        <Routes>
          <Route path="/" element={<ItemList />}></Route>
          <Route path="/items/orders" element={<OrdersPage />}></Route>
          <Route path="/items/single/:id" element={<SingleItemPage />}></Route>
          <Route path="/items/new" element={<NewItemPage />}></Route>
        </Routes>
        <Footer />
      </OrderContext.Provider>
    </>
  );
}

export default App;
