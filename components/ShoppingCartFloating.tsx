import React,{useContext} from "react";
import FloatingCard from "./FloatingCard";
import { AppContext } from "../context/AppContext";


const ShoppingCartFloating = () => {
  const context = useContext(AppContext);
  const products = context.globalState.products;
  let total = 0;

  const handleRemove = (id:number) => {
    context.globalDispatch({type:"REMOVE_PRODUCT", productId:id});
  }

  const toggleWindow = () => {
    context.globalDispatch({type:"TOGGLE_SHOPPINGCART"});
  }

    return <>
    <FloatingCard options={{title: "Shopping Cart", color: "is-primary"}} visibility={context.globalState.shoppingcart} handleVisible={toggleWindow}>
  
  <div className="panel-block">
    <p className="control has-icons-left">
      <input className="input is-link" type="text" placeholder="Search"/>
      <span className="icon is-left">
        <i className="fas fa-search" aria-hidden="true"/>
      </span>
    </p>
  </div>
  {(products) ? products.map((product) => {
    total = total+ +product.price;
    return<>
    <a key={product.id} className="panel-block" onClick={() => handleRemove(product.id)}>
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