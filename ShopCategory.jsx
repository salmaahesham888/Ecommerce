import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Item from "../Items/Item";
import '../pages/css/shopcategory.css'

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img src={banner} alt="category" className="shopcategory-banner" />

      <div className="container">
        <div className="row">
          {all_product
            .filter((item) => item.category === category)
            .map((item) => (
              <div key={item.id} className="col-md-4 col-sm-6 col-12 p-2">
                {/* استخدم الـ Component هنا عشان اللينك يشتغل */}
                <Item 
                  id={item.id} 
                  name={item.name} 
                  image={item.image} 
                  new_price={item.new_price} 
                  old_price={item.old_price} 
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;