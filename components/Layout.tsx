import React, {useState} from 'react';
import Navbar from './Navbar';
import ShoppingCartFloating from './ShoppingCartFloating';
import LoginCardFloating from './LoginCardFloating';
import Breadcrumbs from './Breadcrumb';


const Layout = (props:{children}) => {

  const [LoginCardVisible, setLoginCardVisible] = useState(false);
  const [ShoppingCartCardVisible, setShoppingCartCardVisible] = useState(false);

    const handleLoginCardVisible = () => {
      setLoginCardVisible(!LoginCardVisible);
    }

    const handleShoppingCartCardVisible = () => {
      setShoppingCartCardVisible(!ShoppingCartCardVisible);
    }

   

    return <>
        <ShoppingCartFloating visibility={ShoppingCartCardVisible} handleVisible={handleShoppingCartCardVisible} />
        <LoginCardFloating visibility={LoginCardVisible} handleVisible={handleLoginCardVisible} />
   
        <Navbar handleLoginVisible={handleLoginCardVisible} handleShoppingCardVisible={handleShoppingCartCardVisible} />
        <Breadcrumbs />
        {props.children}
    </>
}

export default Layout;