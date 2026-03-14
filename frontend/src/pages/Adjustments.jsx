import { useState, useContext } from "react";
import { InventoryContext } from "../context/InventoryContext";

function Adjustments() {
    const { products, setProducts, adjustments, setAdjustments, ledger, setLedger } =
  useContext(InventoryContext);

  const [formData, setFormData] = useState({
    product: "",
    systemStock: "",
    actualStock: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const difference = formData.actualStock - formData.systemStock;

    const newAdjustment = {
      id: adjustments.length + 1,
      ...formData,
      difference
    };

  

setAdjustments([...adjustments, newAdjustment]);

setProducts(
  products.map((p) =>
    p.name.toLowerCase() === formData.product.toLowerCase()
      ? { ...p, stock: Number(formData.actualStock) }
      : p
  )
);

setLedger([
  ...ledger,
  {
    date: new Date().toLocaleDateString(),
    product: formData.product,
    operation: "Adjustment",
    quantity: difference
  }
]);
  };

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">Stock Adjustment</h1>

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
          type="number"
          name="systemStock"
          placeholder="System Stock"
          value={formData.systemStock}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <input
          type="number"
          name="actualStock"
          placeholder="Actual Stock"
          value={formData.actualStock}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="bg-orange-600 text-white px-4 py-2 rounded"
        >
          Adjust
        </button>

      </form>

      <table className="w-full bg-white shadow rounded">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Product</th>
            <th className="p-3">System</th>
            <th className="p-3">Actual</th>
            <th className="p-3">Difference</th>
          </tr>
        </thead>

        <tbody>
          {adjustments.map((a) => (
            <tr key={a.id} className="border-t">
              <td className="p-3">{a.product}</td>
              <td className="p-3">{a.systemStock}</td>
              <td className="p-3">{a.actualStock}</td>
              <td className="p-3">{a.difference}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default Adjustments;