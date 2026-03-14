import { Link } from "react-router-dom";
import { LayoutDashboard, Package } from "lucide-react";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <h2 className="text-2xl font-bold mb-8">InventoryHub</h2>

      <nav className="flex flex-col gap-4">

        <Link 
          to="/" 
          className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link 
          to="/products" 
          className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
        >
          <Package size={20} />
          Products
        </Link>
        <Link 
            to="/receipts"
            className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
            >
            Receipts
        </Link>
        <Link 
            to="/deliveries"
            className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
            >
            Deliveries
        </Link>
        <Link 
            to="/transfers"
            className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
            >
            Transfers
        </Link>
        <Link 
            to="/adjustments"
            className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
            >
            Adjustments
        </Link>
        <Link 
            to="/ledger"
            className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
            >
            Ledger
        </Link>

      </nav>
    </div>
  );
}

export default Sidebar;