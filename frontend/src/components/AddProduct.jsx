import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
  });
  const [image, setImage] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchProduct = async (id) => {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        console.log(res);
        setProduct(res.data);
      };
      fetchProduct(id);
    }
  }, []);

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setProduct({
      ...product, // non updated fields
      [fieldName]: fieldValue, // upadated field
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", product.name);
    formdata.append("price", product.price);
    formdata.append("stock", product.stock);
    formdata.append("category", product.category);
    formdata.append("image", image);
    if (id) {
      const res = await axios.put(`http://localhost:5000/api/products/${id}`,formdata);
      console.log(res);
      alert("product updated successfully")
    } else {
      await axios.post("http://localhost:5000/api/products", formdata);
      alert("product created successfully");
    }

    setImage(null);
    setProduct({ name: "", price: "", stock: "", category: "" });
    navigate("http://localhost:5173/admin");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 p-6 rounded-xl shadow mb-10 grid grid-cols-1 md:grid-cols-4 gap-4"
    >
      <h3 className="col-span-full text-xl font-semibold text-gray-700">
        Add New Product
      </h3>

      <input
        name="name"
        value={product.name}
        onChange={handleChange}
        placeholder="Product Name"
        className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <input
        name="price"
        type="number"
        value={product.price}
        onChange={handleChange}
        placeholder="Price"
        className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <input
        name="stock"
        type="number"
        value={product.stock}
        onChange={handleChange}
        placeholder="Stock"
        className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <input
        name="category"
        value={product.category}
        onChange={handleChange}
        placeholder="Category"
        className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        className="border p-3 rounded-lg"
      />

      <button
        type="submit"
        className="col-span-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Add Product
      </button>
    </form>
  );
}

export default AddProduct;
