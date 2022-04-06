import React, {useState, useContext} from 'react';
import Navbar from './Navbar';
import ShoppingCartFloating from './ShoppingCartFloating';
import LoginCardFloating from './LoginCardFloating';
import Breadcrumbs from './Breadcrumb';
import SignUpCardFloating from './SignUpCardFloating';
import MessageCardFloating from './MessageCardFloating';

import {AppContext} from '../context/AppContext';


const Layout = (props:{children}) => {

  const [LoginCardVisible, setLoginCardVisible] = useState(false);
  const [ShoppingCartCardVisible, setShoppingCartCardVisible] = useState(false);
  const [SignUpCardVisible, setSignUpCardVisible] = useState(false);

  const {message, closeMessage} = useContext(AppContext);

    const handleLoginCardVisible = () => {
      setLoginCardVisible(!LoginCardVisible);
    }

    const handleShoppingCartCardVisible = () => {
      setShoppingCartCardVisible(!ShoppingCartCardVisible);
    }

    const handleSignUpCardVisible = () => {
      setSignUpCardVisible(!SignUpCardVisible);
    }

    const handleMessageCardVisible = () => {
      closeMessage();
    }

   

    return <>
        <MessageCardFloating visibility={message.display} handleVisible={handleMessageCardVisible} data={{title:message.title, color:message.color, message:message.message}}/>
        <SignUpCardFloating visibility={SignUpCardVisible} handleVisible={handleSignUpCardVisible}/>
        <ShoppingCartFloating visibility={ShoppingCartCardVisible} handleVisible={handleShoppingCartCardVisible} />
        <LoginCardFloating visibility={LoginCardVisible} handleVisible={handleLoginCardVisible} />
   
        <Navbar handleLoginVisible={handleLoginCardVisible} handleShoppingCardVisible={handleShoppingCartCardVisible} handleSignUpCardVisibl={handleSignUpCardVisible} />
        <Breadcrumbs />
        {props.children}
    </>
}

export default Layout;