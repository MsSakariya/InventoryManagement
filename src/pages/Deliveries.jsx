import { useState, useContext } from "react";
import { InventoryContext } from "../context/InventoryContext";

function Deliveries() {

   const { products, setProducts, adjustments, setAdjustments, ledger, setLedger } =
    useContext(InventoryContext);

  const [deliveries, setDeliveries] = useState([]);

  const [formData, setFormData] = useState({
    product: "",
    quantity: "",
    customer: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  const newDelivery = {
    id: deliveries.length + 1,
    ...formData
  };

  setDeliveries([...deliveries, newDelivery]);

  // reduce stock
  setProducts(
    products.map((p) =>
      p.name.toLowerCase() === formData.product.toLowerCase()
        ? { ...p, stock: p.stock - Number(formData.quantity) }
        : p
    )
  );

  // add ledger record
  setLedger([
    ...ledger,
    {
      date: new Date().toLocaleDateString(),
      product: formData.product,
      operation: "Delivery",
      quantity: "-" + formData.quantity
    }
  ]);

  setFormData({
    product: "",
    quantity: "",
    customer: ""
  });
};
  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">Delivery Orders</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow mb-6 flex gap-4"
      >

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
          name="customer"
          placeholder="Customer"
          value={formData.customer}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Create Delivery
        </button>

      </form>

      <table className="w-full bg-white shadow rounded">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Product</th>
            <th className="p-3">Quantity</th>
            <th className="p-3">Customer</th>
          </tr>
        </thead>

        <tbody>
          {deliveries.map((d) => (
            <tr key={d.id} className="border-t">
              <td className="p-3">{d.product}</td>
              <td className="p-3">{d.quantity}</td>
              <td className="p-3">{d.customer}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default Deliveries;