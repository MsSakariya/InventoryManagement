import { useContext } from "react";
import { InventoryContext } from "../context/InventoryContext";

function Ledger() {

  const { ledger } = useContext(InventoryContext);

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Stock Ledger
      </h1>

      <table className="w-full bg-white shadow rounded">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Date</th>
            <th className="p-3">Product</th>
            <th className="p-3">Operation</th>
            <th className="p-3">Quantity</th>
          </tr>
        </thead>

        <tbody>

          {ledger.map((item, index) => (

            <tr key={index} className="border-t">

              <td className="p-3">{item.date}</td>
              <td className="p-3">{item.product}</td>
              <td className="p-3">{item.operation}</td>
              <td className="p-3">{item.quantity}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Ledger;