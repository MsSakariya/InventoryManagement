import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Receipts from "./pages/Receipts";
import Deliveries from "./pages/Deliveries";
import Transfers from "./pages/Transfers";
import Adjustments from "./pages/Adjustments";
import Ledger from "./pages/Ledger";
import Warehouse from "./pages/Warehouse";
import Locations from "./pages/Locations";
import Stock from "./pages/Stock";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/receipts" element={<Receipts />} />
          <Route path="/deliveries" element={<Deliveries />} />
          <Route path="/transfers" element={<Transfers />} />
          <Route path="/adjustments" element={<Adjustments />} />
          <Route path="/ledger" element={<Ledger />} />
          <Route path="/warehouse" element={<Warehouse />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/stock" element={<Stock />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;