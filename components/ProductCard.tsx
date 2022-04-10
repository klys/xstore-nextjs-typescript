import React, {useContext} from "react";

import { AppContext } from "../context/AppContext";

const ProductCard = () => {
  
  const {addProductItem} = useContext(AppContext);
  
  const data ={
    id: Math.random()+100,
    name: "Producto "+(Math.random()*100).toPrecision(1),
    price: (Math.random()*10).toPrecision(2),
  }

  const handleClick = () => {
    //context.globalDispatch({type:"ADD_PRODUCT", productItem:data});
    addProductItem(data);
  }

    return <>
    
        <a className="card" onClick={handleClick}>
  <div className="card-image">
    <figure className="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">{data.name}</p>
        <p className="subtitle is-6">{data.price}$</p>
      </div>
    </div>

    <div className="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br/>
      <time>11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</a>
    </>
}

export default ProductCard;