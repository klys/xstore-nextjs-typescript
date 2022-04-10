import React, { useEffect, useContext } from "react";
import FloatingCard from "./FloatingCard";
import { AppContext } from "../context/AppContext";
import { io } from "socket.io-client";
const socket = io("http://localhost:3001");

const SignUpCardFloating = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [repassword, setRepassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const {displayMessage, toggleSignup, signup} = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== repassword) {
        window.alert("Passwords do not match");
        return;
    }
    socket.emit("signup", { email, password, name })
  }

  useEffect(() => {
    const SignUpListener = (data) => {
      console.log("useEffect data:",data)
      //toggleWindow()
      toggleSignup()
      if (!data.success) {
        
        //context.globalDispatch({type:"DISPLAY_MESSAGE",messageData:{message:data.message, color:"is-danger", title:"Error"}});
        displayMessage({message:data.message, color:"is-danger", title:"Error"});
      } else {
        
        //context.globalDispatch({type: "DISPLAY_MESSAGE", messageData:{message:data.message, color:"is-success", title:"Success"}});
        displayMessage({message:data.message, color:"is-success", title:"Success"});
      }
    }
    socket.on('signup', SignUpListener)
    
    return () => {
      //socket.off('signup', SignUpListener)
    }
  }, [socket])

  /*const toggleWindow = () => {  
    context.globalDispatch({type:"TOGGLE_SIGNUP"})
  }*/

    return <>
    <FloatingCard options={{title:"Sign Up",color:"is-warning"}} visibility={signup} handleVisible={toggleSignup}>
  
  <div className="">
  <div className="field">
    <p className="control has-icons-left has-icons-right">
        <input className="input" type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
        <span className="icon is-small is-left">
        <i className="fas fa-envelope"></i>
        </span>
        <span className="icon is-small is-right">
        <i className="fas fa-check"></i>
        </span>
    </p>
    </div>
    <div className="field">
    <p className="control has-icons-left has-icons-right">
        <input className="input" type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <span className="icon is-small is-left">
        <i className="fas fa-envelope"></i>
        </span>
        <span className="icon is-small is-right">
        <i className="fas fa-check"></i>
        </span>
    </p>
    </div>
    <div className="field">
    <p className="control has-icons-left">
        <input className="input" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <span className="icon is-small is-left">
        <i className="fas fa-lock"></i>
        </span>
    </p>
    </div>
    <div className="field">
    <p className="control has-icons-left">
        <input className="input" type="password" placeholder="Re-Password" onChange={e => setRepassword(e.target.value)} />
        <span className="icon is-small is-left">
        <i className="fas fa-lock"></i>
        </span>
    </p>
    </div>
    <div className="field is-grouped is-grouped-centered">
    <p className="control">
        <button className="button is-success" onClick={handleSubmit}>
        Submit
        </button>
    </p>
    </div>
  </div>
  
</FloatingCard>
    </>
}

export default SignUpCardFloating;