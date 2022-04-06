import { createContext, useReducer } from 'react';

export type initialStateType = {
  products: any[]
  message: any
  addProductItem: (productItem: any) => void
  removeProductItem: (productId: number) => void
  displayMessage: (message: any) => void
  closeMessage: () => void
}

//Initial State and Actions
const initialState = {
  products: [],
  message:{
    display:false,
    message:"Just a message",
    color: "is-info",
    title:"Message"
  }
};

const actions = {
  ADD_PRODUCT: "ADD_PRODUCT",
  REMOVE_PRODUCT: "REMOVE_PRODUCT",
  DISPLAY_MESSAGE: "DISPLAY_MESSAGE",
  CLOSE_MESSAGE: "CLOSE_MESSAGE"
};

//Reducer to Handle Actions
const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_PRODUCT:
      return {
        products: [
          ...state.products,
          action.productItem
        ]
      };
    case actions.REMOVE_PRODUCT: {
      const filteredProducts = state.products.filter(
        (productItem) => productItem.id !== action.productId
      );
      return { products: filteredProducts };
    }
    case actions.DISPLAY_MESSAGE: {
      return { message: { display:true, ...action.message} };
    }
    case actions.CLOSE_MESSAGE: {
      return {message: {display:false, message:"Just a message", color: "is-info", title:"Message"}};
    }
    default:
      return state;
  }
};


//Context and Provider
export const AppContext = createContext<initialStateType>(initialState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    products: state.products,
    message: state.message,
    addProductItem: (productItem) => {
      dispatch({ type: actions.ADD_PRODUCT, productItem });
    },
    removeProductItem: (productId) => {
      dispatch({ type: actions.REMOVE_PRODUCT, productId });
    },
    displayMessage: (messageData) => {
      dispatch({ type: actions.DISPLAY_MESSAGE, messageData });
    },
    closeMessage: () => {
      dispatch({type: actions.CLOSE_MESSAGE})
    }
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

