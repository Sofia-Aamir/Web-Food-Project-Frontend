import './Cards.css';
import Cart from './Cart';
import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../api/items';



const Content = () => {
   
    const navigate = useNavigate();
    // const {cardsData}= useContext(AppContext);
    
    const [cardsData, setData] = useState([]);
  // const [editingItemId, setEditingItemId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const products = await getProducts();
    setData(products);
    console.log(products)
  };
    

    const [cart, setCart] = useState([]);
  // const [setShowCart] = useState(false);

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  // const handleShow = (value) => {
  //   setShowCart(value);
  // };

  const handleRemove = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };
  
  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });

  };
    
    return (

        <div>
          
            <div className="content-wrapper">
               
                <div className='selling-container'>
                    <div className="heading2">
                        <h2>Deals Of The Month</h2>
                        <div className="top-selling-front-line">
                        </div>
                    </div>
                </div>

                <div className="TopSellingcards">
                    {cardsData.map((card) => (
                      // idhr se card,addtocart ye sb pass horaha hay aur singlecard mei receive horaha hay
                      <div className="card" style={{ width: '18rem' }} >
                      <img onClick={()=>handleProductClick(card)} src={card.url} className="card-img-top" alt={card.title} style={{ width: '285px', height: '250px' }}/>
                      <div className="card-body">
                          <h5 className="card-title">{card.name}</h5>
                          <p className="card-text">{card.category}</p>
                          <div className="card-details">
                              <p className="card-price">{card.price}</p>
                              <button href="#" className="add-to-bucket-buttons" onClick={()=>addToCart(card)}>Add to bucket</button>
                              
                          </div>
                      </div>
                  </div>
                       ))}
                </div>
    
            </div>
            <Cart cart={cart} handleRemoveItem={handleRemove} />
            {/* {selectedCard && <DetailPage card={selectedCard} />}         */}
        </div>
    );
};

export default Content;