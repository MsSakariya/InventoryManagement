import { useContext, useState } from "react";
import { InventoryContext } from "../context/InventoryContext";


function Products() {
    
  const { products, setProducts } = useContext(InventoryContext);
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    sku: "",
    category: "",
    stock: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: products.length + 1,
      ...formData,
    };

    setProducts([...products, newProduct]);

    setFormData({
      name: "",
      sku: "",
      category: "",
      stock: "",
    });

    setShowModal(false);
  };

  return (
    <div className="p-10">

      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">Products</h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </div>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded mb-4"
        />

      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">SKU</th>
            <th className="p-3">Category</th>
            <th className="p-3">Stock</th>
          </tr>
        </thead>

        <tbody>
          {products.filter((product) =>
                product.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((product) => (
            <tr key={product.id} className="border-t">
              <td className="p-3">{product.name}</td>
              <td className="p-3">{product.sku}</td>
              <td className="p-3">{product.category}</td>
              <td className="p-3">
            {product.stock}

            {product.stock < 20 && (
                <span className="ml-2 text-red-500 font-bold">
                Low
                </span>
            )}
            </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">

          <div className="bg-white p-6 rounded w-96">

            <h2 className="text-xl font-bold mb-4">Add Product</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">

              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={formData.name}
                onChange={handleChange}
                className="border p-2 rounded"
                required
              />

              <input
                type="text"
                name="sku"
                placeholder="SKU"
                value={formData.sku}
                onChange={handleChange}
                className="border p-2 rounded"
                required
              />

              <input
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleChange}
                className="border p-2 rounded"
                required
              />

              <input
                type="number"
                name="stock"
                placeholder="Initial Stock"
                value={formData.stock}
                onChange={handleChange}
                className="border p-2 rounded"
                required
              />

              <div className="flex justify-end gap-3 mt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-3 py-1 border rounded"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                >
                  Save
                </button>
              </div>

            </form>

          </div>

        </div>
      )}
    </div>
  );
}

export default Products;