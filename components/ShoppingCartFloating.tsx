import React from "react";
import FloatingCard from "./FloatingCard";
import { useAppContext } from "../context/AppContext";

const ShoppingCartFloating = (props:{visibility, handleVisible}) => {
  const { products } = useAppContext();
  let total = 0;
    return <>
    <FloatingCard options={{title: "Shopping Cart", color: "is-primary"}} visibility={props.visibility} handleVisible={props.handleVisible}>
  
  <div className="panel-block">
    <p className="control has-icons-left">
      <input className="input is-link" type="text" placeholder="Search"/>
      <span className="icon is-left">
        <i className="fas fa-search" aria-hidden="true"/>
      </span>
    </p>
  </div>
  {(products) ? products.map((product, index) => {
    total = total+ +product.price;
    return<>
    <a className="panel-block">
    <span className="panel-icon">
      <i className="fas fa-book" aria-hidden="true"/>
    </span>
    {product.name} x1 <span className="is-pulled-right">${product.price}</span>
  </a>
    </>
  }) : <></>}
  
  <div className="panel-block">
    <p className="control">
        Total: {total.toPrecision(4)}$
    </p>
  </div>
  <div className="panel-block">
    <p className="control">
        <a className="button is-link is-outlined">
            <span>Checkout</span>
        </a>
        <a className="button is-link is-outlined">
            <span>Close</span>
        </a>
    </p>
  </div>

</FloatingCard>
    </>
};

export default ShoppingCartFloating;