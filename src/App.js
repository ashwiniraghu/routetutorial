
import './App.css';
import { Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Navbar from './pages/Navbar';
import OrderSummary from './pages/OrderSummary';
import NoMatch from './pages/NoMatch';
import Products from './pages/Products';
import New from './pages/New';
import Feautred from './pages/Feautred';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import Admin from './pages/Admin';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="OrderSummary" element={<OrderSummary />} />
        <Route path="Products" element={<Products />}>
          <Route index element={<Feautred />} />
          <Route path="featured" element={<Feautred />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </>
  )
}

export default App;
