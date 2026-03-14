import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import MainLayout from "./layouts/MainLayout";
import Receipts from "./pages/Receipts";
import Deliveries from "./pages/Deliveries";
import Transfers from "./pages/Transfers";
import Adjustments from "./pages/Adjustments";
import Ledger from "./pages/Ledger";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><Dashboard /></MainLayout>} />
        <Route path="/products" element={<MainLayout><Products /></MainLayout>} />
        <Route path="/receipts" element={<MainLayout><Receipts /></MainLayout>} />
        <Route path="/deliveries" element={<MainLayout><Deliveries /></MainLayout>} />
        <Route path="/transfers" element={<MainLayout><Transfers /></MainLayout>} />
        <Route path="/adjustments" element={<MainLayout><Adjustments /></MainLayout>} />
        <Route path="/ledger" element={<MainLayout><Ledger /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;