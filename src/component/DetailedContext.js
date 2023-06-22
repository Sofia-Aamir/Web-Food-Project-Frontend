import React, { useContext } from 'react';

const DetailPage = () => {

  // Now you can access the cardsData array and render the detailed page
  return (
    <div>
      {cardsData.map((card) => (
        <div key={card.id}>
          <h2>{card.title}</h2>
          <img src={card.image} alt={card.title} />
          <p>{card.description}</p>
          <p>Price: {card.price}</p>
        </div>
      ))}
    </div>
  );
};

export default DetailPage;
