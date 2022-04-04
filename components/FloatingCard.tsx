import React from 'react';



const FloatingCard = (props:{options:{title,color}, visibility, handleVisible, children}) => {

    return <>
    <div className='scrollable' style={{
        position: "fixed",
        top: "10px",
        right: "3px",
        zIndex: 999,
        overflowY: "auto",
        maxHeight: "90%",
        backgroundColor: "white",
        visibility: (props.visibility ? "visible" : "hidden")
        }}>
        <article className={"panel "+ props.options.color}>
  <p className="panel-heading">
    {props.options.title}
    <button className="delete" onClick={props.handleVisible}></button>
  </p>
  {props.children}
  
</article>
</div>
    
    </>
}

export default FloatingCard;