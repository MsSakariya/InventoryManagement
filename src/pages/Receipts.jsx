import { useState } from "react";
import { useContext } from "react";
import { InventoryContext } from "../context/InventoryContext";

function Receipts() {
    const { products, setProducts, receipts, setReceipts, ledger, setLedger } =
  useContext(InventoryContext);

  const [formData, setFormData] = useState({
    product: "",
    quantity: "",
    supplier: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const newReceipt = {
    id: receipts.length + 1,
    ...formData
  };

setReceipts([...receipts, newReceipt]);

setProducts(
  products.map((p) =>
    p.name.toLowerCase() === formData.product.toLowerCase()
      ? { ...p, stock: p.stock + Number(formData.quantity) }
      : p
  )
);

setLedger([
  ...ledger,
  {
    date: new Date().toLocaleDateString(),
    product: formData.product,
    operation: "Receipt",
    quantity: "+" + formData.quantity
   }
    ]);
}

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">Incoming Stock (Receipts)</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-6 flex gap-4">

        <input
          type="text"
          name="product"
          placeholder="Product Name"
          value={formData.product}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <input
          type="text"
          name="supplier"
          placeholder="Supplier"
          value={formData.supplier}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Receipt
        </button>

      </form>

      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Product</th>
            <th className="p-3">Quantity</th>
            <th className="p-3">Supplier</th>
          </tr>
        </thead>

        <tbody>
          {receipts.map((r) => (
            <tr key={r.id} className="border-t">
              <td className="p-3">{r.product}</td>
              <td className="p-3">{r.quantity}</td>
              <td className="p-3">{r.supplier}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default Receipts;