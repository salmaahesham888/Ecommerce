import React from 'react';
import './Popular.css';
import data_product from '../assests/all_product';
// import Item from '../items/Item';
export default function Popular() {
  return (
    <div className='popular'>
      <h1><b>POPULAR IN WOMEN</b></h1>

      <div className="row">
        {data_product.map((item) => (
          <div key={item.id} className="col-md-4 p-2">
         
            <div className="item">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>

              <div className="item-prices">
                <div className="item_price-new">
                  ${item.new_price}
                </div>

                <div className="item_price-old">
                  ${item.old_price}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}