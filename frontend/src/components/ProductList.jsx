import axios from "axios";
import  { useNavigate } from "react-router-dom";

function ProductList ({ products, refresh }) {

  const navigate=useNavigate();

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/api/products/${id}`);
    refresh();
  };

  const updateProduct=async(id)=>{
    navigate(`http://localhost:5173/${id}`);
  }


  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Product List</h3>

      <div className="overflow-x-auto">
        <table className="w-full overflow-hidden rounded-xl shadow">
          <thead className="bg-linear-to-r from-gray-800 to-gray-700 text-white">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Price</th>
              <th className="p-2">Stock</th>
              <th className="p-2">Category</th>
              <th className="p-2">Image</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p._id} className="border-b hover:bg-gray-50 transition">
                <td className="p-2">{p.name}</td>
                <td className="p-2">₹{p.price}</td>
                <td className="p-2">{p.stock}</td>
                <td className="p-2">{p.category}</td>
                {/* <td className="p-2">{p.image}</td> */}
                <td className="p-2">
                  {p.image ? (
                    <img
                      src={`${p.image}`}
                      alt={p.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  ) : (
                    "No Image"
                  )}
                </td>
                <td className="p-2 flex justify-center gap-2">
                  <button
                    onClick={() =>updateProduct(p._id)}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProduct(p._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {products.length === 0 && (
              <tr>
                <td colSpan="5" className="p-4 text-gray-500">
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;
