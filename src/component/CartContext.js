
import React, { createContext, useState } from "react";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  
    const [cardsData,set] = useState([
        {
            id: 1,
            image: '/images/top1.jpg',
            title: 'Krunch Burger',
            description: 'Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun.',
            price: 250
        },
        {
            id: 2,
            image: '/images/top2.jpg',
            title: 'Krunch With Fries N Drink',
            description: 'Krunch + 1 regular Fries + 1 regular Drink a sesame seed bun.',
            price:  490
        },
        {
            id: 3,
            image: '/images/top3.jpg',
            title: 'Hot Wings',
            description: 'Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun.',
            price:  550
        },
        {
            id: 4,
            image: '/images/top4.png',
            title: 'Mighty Zinger',
            description: 'Our signature Zinger but Bigger! Double Zinger fillet with plain mayo, lettuce and cheese.',
            price:  680
        } 
  ]);
  return (
    <AppContext.Provider value={{ cardsData}}>
      {children}
    </AppContext.Provider>
  );
};