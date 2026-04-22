import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

export default function Item(props) {
  return (
    <div className="Item">

      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt={props.name} />
      </Link>

      <p>{props.name}</p>

      <div className="item-prices">
        <div className="item_price-new">
          ${props.new_price}
        </div>
        <div className="item_price-old">
          ${props.old_price}
        </div>
      </div>

    </div>
  );
}