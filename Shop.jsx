import React from 'react';
  
import Popular from '../Popular/Popular'; 
import NewCollection from '../New Collection/NewCollection';
import Hero from '../Hero/Hero';
import Offers from '../Offers/Offers';
import NewLetter from '../NewLetter/NewLetter';
export default function Shop() {
  return (
    <div>
      <Hero />
      <Popular/>
      <NewCollection/>
      <Offers />

      <NewLetter />
    </div>
  );
}