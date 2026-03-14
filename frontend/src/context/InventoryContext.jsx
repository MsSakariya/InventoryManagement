import { createContext, useState } from "react";

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {

  const [products, setProducts] = useState([
    { id: 1, name: "Steel Rod", sku: "SR-100", category: "Metal", stock: 120 },
    { id: 2, name: "Wood Panel", sku: "WP-200", category: "Wood", stock: 80 },
    { id: 3, name: "Chair", sku: "CH-300", category: "Furniture", stock: 45 }
  ]);

  const [receipts, setReceipts] = useState([]);
  const [deliveries, setDeliveries] = useState([]);
  const [transfers, setTransfers] = useState([]);
  const [adjustments, setAdjustments] = useState([]);
  const [ledger, setLedger] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [locations, setLocations] = useState([]);
  const [stock, setStock] = useState([]);

  return (
<InventoryContext.Provider
  value={{
    products, setProducts,
    receipts, setReceipts,
    deliveries, setDeliveries,
    transfers, setTransfers,
    adjustments, setAdjustments,
    ledger, setLedger,
    warehouses, setWarehouses,
    locations, setLocations,
    stock, setStock
  }}
>
      {children}
    </InventoryContext.Provider>
  );
};