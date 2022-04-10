import React,{useContext} from "react";
import FloatingCard from "./FloatingCard";
import {AppContext} from '../context/AppContext';


const MessageCardFloating = () => {
  const {message, closeMessage} = useContext(AppContext);
  //const message = context.globalState.message;
  //const closeMessage = () => { context.globalDispatch({type:"CLOSE_MESSAGE"}); }
    return <>
    <FloatingCard options={{title: message.title, color: message.color}} visibility={message.display} handleVisible={closeMessage}>
  
  
  
  <div className="panel-block">
    <p className="control">
        {message.message}
    </p>
  </div>
  <div className="panel-block">
    <p className="control">
        <a className="button is-link is-outlined" onClick={closeMessage}>
            <span>Okay</span>
        </a>
    </p>
  </div>

</FloatingCard>
    </>
};

export default MessageCardFloating;