import axios from 'axios';

const getUsers = async () => {
  try {
    const res = await axios.get("https://food-web-server.onrender.com/user");
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const addUser = async (userData) => {
  try {
    console.log(userData)
    await axios.post("https://food-web-server.onrender.com/user", userData);
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (userId) => {
  try {
    await axios.delete(`https://food-web-server.onrender.com/user/${userId}`);
    console.log('User deleted successfully');
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (userId, updatedUserData) => {
  try {
    await axios.put(`https://food-web-server.onrender.com/user/${userId}`, updatedUserData);
    console.log('User updated successfully');
  } catch (error) {
    console.log(error);
  }
};

export { getUsers, addUser, deleteUser, updateUser };
