import React, { useEffect, useState } from 'react';
import './AddProduct.css';
import { addProduct, getProducts, updateProduct,deleteProduct } from '../api/items.js';

const AddProduct = () => {
  const [data, setData] = useState([]);
  const [editingItemId, setEditingItemId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const products = await getProducts();
    setData(products);
  };

  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: '',
    url:''
  });

  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = { ...product };
    addProduct(productData);
    fetchData();
    setProduct({ name: '', price: '', category: '' });
  };

  const handleUpdate = async (itemId) => {
    try {
      const updatedData = { ...product };
      await updateProduct(itemId, updatedData);
      setEditingItemId(null);
      fetchData();
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDelete = async (itemId) => {
    try {
      await deleteProduct(itemId);
      fetchData();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleEdit = (itemId) => {
    setEditingItemId(itemId);
  };

  const isEditing = (itemId) => {
    return itemId === editingItemId;
  };

  return (
    <div>
      <table className="product-table">
        <thead >
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{isEditing(item._id) ? <input type="text" value={product.name} onChange={handleInputChange} /> : item.name}</td>
              <td>{isEditing(item._id) ? <input type="text" value={product.price} onChange={handleInputChange} /> : item.price}</td>
              <td>{isEditing(item._id) ? <input type="text" value={product.category} onChange={handleInputChange} /> : item.category}</td>
              <td>
  {isEditing(item._id) ? (
    <div  className="button-container">
      <button onClick={() => handleUpdate(item._id)}>Save</button>
      <button onClick={() => handleDelete(item._id)}>Delete</button>
    </div>
  ) : (
    <div>
      <button onClick={() => handleEdit(item._id)}>Edit</button>
      <button onClick={() => handleDelete(item._id)}>Delete</button>
    </div>
  )}
</td>
            </tr>
          ))}
        </tbody>
      </table>

      <form onSubmit={handleSubmit} className="Admin-login">
     
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={product.name} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="text" id="price" value={product.price} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" value={product.category} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="url">image url:</label>
          <input type="text" id="url" value={product.url} onChange={handleInputChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
  };

export default AddProduct;
