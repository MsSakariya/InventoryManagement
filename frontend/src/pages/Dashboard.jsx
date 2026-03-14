import { useContext } from "react";
import { InventoryContext } from "../context/InventoryContext";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function Dashboard() {

  const { products, receipts, deliveries } = useContext(InventoryContext);

  const totalProducts = products.length;

  const lowStock = products.filter((p) => p.stock < 20).length;

  const chartData = products.map((p) => ({
    name: p.name,
    stock: p.stock
  }));

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-8">
        Inventory Dashboard
      </h1>

      {/* KPI Cards */}

      <div className="grid grid-cols-4 gap-6 mb-10">

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-gray-500">Total Products</h3>
          <p className="text-2xl font-bold">{totalProducts}</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-gray-500">Low Stock</h3>
          <p className="text-2xl font-bold text-red-500">{lowStock}</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-gray-500">Total Stock</h3>
          <p className="text-2xl font-bold">
            {products.reduce((sum, p) => sum + p.stock, 0)}
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-gray-500">Products Tracked</h3>
          <p className="text-2xl font-bold">{products.length}</p>
        </div>

      </div>

      {/* Stock Chart */}

      <div className="bg-white p-6 rounded shadow">

        <h2 className="text-xl font-bold mb-4">
          Stock Distribution
        </h2>

        <ResponsiveContainer width="100%" height={300}>

          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="stock" fill="#2563eb" />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default Dashboard;