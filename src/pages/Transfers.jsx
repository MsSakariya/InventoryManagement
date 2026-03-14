import { useState, useContext } from "react";
import { InventoryContext } from "../context/InventoryContext";

function Transfers() {
    const { transfers, setTransfers, ledger, setLedger } =
  useContext(InventoryContext);

  const [formData, setFormData] = useState({
    product: "",
    fromLocation: "",
    toLocation: "",
    quantity: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransfer = {
      id: transfers.length + 1,
      ...formData
    };

    setTransfers([...transfers, newTransfer]);

setLedger([
  ...ledger,
  {
    date: new Date().toLocaleDateString(),
    product: formData.product,
    operation: "Transfer",
    quantity: formData.quantity
  }
]);
  };

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">Internal Transfers</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow mb-6 flex gap-4"
      >

        <input
          type="text"
          name="product"
          placeholder="Product"
          value={formData.product}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <input
          type="text"
          name="fromLocation"
          placeholder="From Location"
          value={formData.fromLocation}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <input
          type="text"
          name="toLocation"
          placeholder="To Location"
          value={formData.toLocation}
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

        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          Transfer
        </button>

      </form>

      <table className="w-full bg-white shadow rounded">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Product</th>
            <th className="p-3">From</th>
            <th className="p-3">To</th>
            <th className="p-3">Quantity</th>
          </tr>
        </thead>

        <tbody>
          {transfers.map((t) => (
            <tr key={t.id} className="border-t">
              <td className="p-3">{t.product}</td>
              <td className="p-3">{t.fromLocation}</td>
              <td className="p-3">{t.toLocation}</td>
              <td className="p-3">{t.quantity}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default Transfers;