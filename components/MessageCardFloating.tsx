import React from "react";
import FloatingCard from "./FloatingCard";

const MessageCardFloating = (props:{visibility, handleVisible, data:{title:"Message", color:"is-info", message:"Just a notification!"}}) => {
  let total = 0;
    return <>
    <FloatingCard options={{title: props.data.title, color: props.data.color}} visibility={props.visibility} handleVisible={props.handleVisible}>
  
  
  
  <div className="panel-block">
    <p className="control">
        {props.data.message}
    </p>
  </div>
  <div className="panel-block">
    <p className="control">
        <a className="button is-link is-outlined" onClick={props.handleVisible}>
            <span>Okay</span>
        </a>
    </p>
  </div>

</FloatingCard>
    </>
};

export default MessageCardFloating;