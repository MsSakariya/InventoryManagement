import { useState, useContext } from "react";
import { InventoryContext } from "../context/InventoryContext";

function Locations() {

  const { locations, setLocations, warehouses } = useContext(InventoryContext);

  const [formData, setFormData] = useState({
    name: "",
    code: "",
    warehouse: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newLocation = {
      id: locations.length + 1,
      ...formData
    };

    setLocations([...locations, newLocation]);

    setFormData({
      name: "",
      code: "",
      warehouse: ""
    });
  };

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">Locations</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow mb-6 flex gap-4"
      >

        <input
          type="text"
          name="name"
          placeholder="Location Name"
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

        <select
          name="warehouse"
          value={formData.warehouse}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        >
          <option value="">Select Warehouse</option>
          {warehouses.map((w) => (
            <option key={w.id} value={w.name}>
              {w.name}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Location
        </button>

      </form>

      <table className="w-full bg-white shadow rounded">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Location</th>
            <th className="p-3">Code</th>
            <th className="p-3">Warehouse</th>
          </tr>
        </thead>

        <tbody>
          {locations.map((l) => (
            <tr key={l.id} className="border-t">
              <td className="p-3">{l.name}</td>
              <td className="p-3">{l.code}</td>
              <td className="p-3">{l.warehouse}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default Locations;