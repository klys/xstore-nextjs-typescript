import React, {useState} from 'react';
import Navbar from './Navbar';
import ShoppingCartFloating from './ShoppingCartFloating';
import LoginCardFloating from './LoginCardFloating';
import Breadcrumbs from './Breadcrumb';
import SignUpCardFloating from './SignUpCardFloating';
import MessageCardFloating from './MessageCardFloating';




const Layout = (props:{children}) => {

  const [LoginCardVisible, setLoginCardVisible] = useState(false);
  const [ShoppingCartCardVisible, setShoppingCartCardVisible] = useState(false);
  const [SignUpCardVisible, setSignUpCardVisible] = useState(false);

  

    const handleLoginCardVisible = () => {
      setLoginCardVisible(!LoginCardVisible);
    }

    const handleShoppingCartCardVisible = () => {
      setShoppingCartCardVisible(!ShoppingCartCardVisible);
    }

    const handleSignUpCardVisible = () => {
      setSignUpCardVisible(!SignUpCardVisible);
    }

    

   

    return <>
        <MessageCardFloating/>
        <SignUpCardFloating />
        <ShoppingCartFloating />
        <LoginCardFloating />
   
        <Navbar />
        <Breadcrumbs />
        {props.children}
    </>
}

export default Layout;