import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../productdisplay/ProductDisplay';
import BreadCrum from '../breadcrum/BreadCrum';
import '../pages/css/Product.css';
export default function Product() {
  
  const data = useContext(ShopContext);

  
  
  const { productId } = useParams();

  const product = data?.all_product?.find(
    (e) => e.id === Number(productId)
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }


   return (
  <div>
    <BreadCrum product={product} />
    <ProductDisplay product={product} />
  </div>
);

}
//StepWhat happensUser clicks productURL changes to /product/5useParamsReads 5 from URL.find()Searches all_product array for id 5ResultThat product's data is displayed