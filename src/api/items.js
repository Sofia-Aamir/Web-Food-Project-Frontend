import axios from 'axios'
export const getProducts = async () => {
  try {
    const res = await axios.get("http://localhost:5000/product");
    // console.log(res.data)
    return res.data
  } catch (e) {

    console.log(e);
    return e;
  }
};

export const addProduct = async (productData) =>{
  try{
  await axios.post('http://localhost:5000/product',productData); 
   
  }
  catch(error){
  console.log(error);
}
}

export const deleteProduct = async (productId) => {
  try {
    console.log(productId);
    await axios.delete(`http://localhost:5000/product/${productId}`);
    console.log('Product deleted successfully');
  } catch (error) {
    console.log(error);
  }
};


export const updateProduct = async (productId, updatedProductData) => {
  try {
    await axios.put(`http://localhost:5000/product/${productId}`, updatedProductData);

    console.log('Product updated successfully');
  } catch (error) {
    console.log(error);
  }
};



