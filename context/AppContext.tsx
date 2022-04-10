import { createContext, useReducer } from 'react';

export type product = {
  id: number
  name: string
  price: number
}

export type message = {
  display: boolean
  message: string
  color: string
  title: string
}


export type initialStateType = {
  products: product[]
  message: message,
  signup: boolean,
  login: boolean
}

//Initial State and Actions
const initialState = {
  products: [],
  message:{
    display:false,
    message:"Just a message",
    color: "is-info",
    title:"Message"
  },
  signup:false,
  login:false,
  shoppingcart:false
};

const actions = {
  ADD_PRODUCT: "ADD_PRODUCT",
  REMOVE_PRODUCT: "REMOVE_PRODUCT",
  DISPLAY_MESSAGE: "DISPLAY_MESSAGE",
  CLOSE_MESSAGE: "CLOSE_MESSAGE",
  TOGGLE_SIGNUP: "TOGGLE_SIGNUP",
  TOGGLE_LOGIN: "TOGGLE_LOGIN",
  TOGGLE_SHOPPINGCART: "TOGGLE_SHOPPINGCART",
};

//Reducer to Handle Actions
const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products,
          action.productItem
        ]
      };
    case actions.REMOVE_PRODUCT: {
      const filteredProducts = state.products.filter(
        (productItem) => productItem.id !== action.productId
      );
      return { ...state,
        products: filteredProducts };
    }
    case actions.DISPLAY_MESSAGE: {
      console.log("AppContext action.messageData:",action.messageData)
      return { ...state,
        message: { ...action.messageData, display:true} };
    }
    case actions.CLOSE_MESSAGE: {
      return {...state, message: {display:false, message:"Just a message", color: "is-info", title:"Message"}};
    }
    case actions.TOGGLE_SIGNUP: {
      return {...state, signup:!state.signup};
    }
    case actions.TOGGLE_LOGIN: {
      return {...state, login:!state.login};
    }
    case actions.TOGGLE_SHOPPINGCART: {
      return {...state, shoppingcart:!state.shoppingcart};
    }
    
    default:
      return state;
  }
};


//Context and Provider
export const AppContext = createContext<any>({});

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    products: state.products,
    message: state.message,
    signup: state.signup,
    login: state.login,
    shoppingcart: state.shoppingcart,
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
    },
    toggleSignup: () => {
      dispatch({type: actions.TOGGLE_SIGNUP})
    },
    toggleLogin: () => {
      dispatch({type: actions.TOGGLE_LOGIN})
    },
    toggleShoppingcart: () => {
      dispatch({type: actions.TOGGLE_SHOPPINGCART})
    }

  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

