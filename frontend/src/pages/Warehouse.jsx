import { useState, useContext } from "react";
import { InventoryContext } from "../context/InventoryContext";

function Warehouse() {

  const { warehouses, setWarehouses } = useContext(InventoryContext);

  const [formData, setFormData] = useState({
    name: "",
    code: "",
    address: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newWarehouse = {
      id: warehouses.length + 1,
      ...formData
    };

    setWarehouses([...warehouses, newWarehouse]);

    setFormData({
      name: "",
      code: "",
      address: ""
    });
  };

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">Warehouse</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow mb-6 flex gap-4"
      >

        <input
          type="text"
          name="name"
          placeholder="Warehouse Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <input
          type="text"
          name="code"
          placeholder="Short Code"
          value={formData.code}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Warehouse
        </button>

      </form>

      <table className="w-full bg-white shadow rounded">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Code</th>
            <th className="p-3">Address</th>
          </tr>
        </thead>

        <tbody>
          {warehouses.map((w) => (
            <tr key={w.id} className="border-t">
              <td className="p-3">{w.name}</td>
              <td className="p-3">{w.code}</td>
              <td className="p-3">{w.address}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default Warehouse;