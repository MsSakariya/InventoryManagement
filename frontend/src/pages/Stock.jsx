import { useContext } from "react";
import { InventoryContext } from "../context/InventoryContext";

function Stock() {

  const { stock } = useContext(InventoryContext);

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">Stock View</h1>

      <table className="w-full bg-white shadow rounded">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Product</th>
            <th className="p-3">Warehouse</th>
            <th className="p-3">Location</th>
            <th className="p-3">Quantity</th>
          </tr>
        </thead>

        <tbody>

          {stock.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center p-4 text-gray-500">
                No stock records yet
              </td>
            </tr>
          ) : (
            stock.map((s) => (
              <tr key={s.id} className="border-t">
                <td className="p-3">{s.product}</td>
                <td className="p-3">{s.warehouse}</td>
                <td className="p-3">{s.location}</td>
                <td className="p-3">{s.quantity}</td>
              </tr>
            ))
          )}

        </tbody>

      </table>

    </div>
  );
}

export default Stock;