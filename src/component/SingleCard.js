const SingleCard=({card,handleProductClick,addToCart})=>{
    if (!card || !card.image || !card.title || !card.description || !card.price) {
        return <div>Error: Invalid card data</div>;
      }
    return(
        <div>
 <div className="card" style={{ width: '18rem' }} >
                            <img onClick={()=>handleProductClick(card)} src={card.image} className="card-img-top" alt={card.title} style={{ width: '285px', height: '250px' }}/>
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.description}</p>
                                <div className="card-details">
                                    <p className="card-price">{card.price}</p>
                                    <a href="#" className="add-to-bucket-buttons" onClick={()=>addToCart(card)}>Add to bucket</a>
                                    
                                </div>
                            </div>
                        </div>
        </div>
    )
}
export default SingleCard;

