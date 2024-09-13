import React, { useState , useContext } from 'react';
import { faker } from '@faker-js/faker';
import SingleProduct from './SingleProduct';


const Home = () => {
    const productsArray = [...Array(20)].map((p) => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image:faker.image.avatar(),
      }));
      const [products] = useState(productsArray);
  return (
    <div className='productContainer'>
      {
        products.map(prod=>
            <SingleProduct prod={prod}/>
        )
      }
    
      
    </div>
  )
}

export default Home
