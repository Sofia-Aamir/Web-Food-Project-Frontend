
import React, { useEffect, useState } from 'react';
import './UserForm.css';
import { getUsers,addUser,deleteUser,updateUser } from '../api/userapi.js';

const UserForm = () => {
  const [data, setData] = useState([]);
  const [editingItemId, setEditingItemId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const products = await getUsers();
    setData(products);
  };

  const [product, setProduct] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = { ...product };
    console.log(productData)
    addUser(productData);
    fetchData();
    setProduct({ name: '', email: '', password: '' });
  };

  const handleUpdate = async (itemId) => {
    try {
      const updatedData = { ...product };
      await updateUser(itemId, updatedData);
      setEditingItemId(null);
      fetchData();
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDelete = async (itemId) => {
    try {
      await deleteUser(itemId);
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
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
                <td>{item.name}</td>
              <td>{isEditing(item._id) ? <input type="text" value={product.name} onChange={handleInputChange} /> : item.name}</td>
              <td>{isEditing(item._id) ? <input type="text" value={product.email} onChange={handleInputChange} /> : item.email}</td>
              <td>{isEditing(item._id) ? <input type="text" value={product.password} onChange={handleInputChange} /> : item.password}</td>
              <td>
  {isEditing(item._id) ? (
    <div>
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
          <button type="button">Delete</button>
          <button type="button">Add</button>
          <button type="button">Create</button>
          <button type="button">Read</button>

        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={product.name} required onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="price">Email:</label>
          <input type="text" id="email" value={product.email} required onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="category">password:</label>
          <input type="text" id="password" value={product.password} required onChange={handleInputChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
  };

export default UserForm;
