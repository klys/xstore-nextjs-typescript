import React from "react";
import FloatingCard from "./FloatingCard";
import { io } from "socket.io-client";
const socket = io("http://localhost:3001");

socket.on("login", (data) => {
  console.log(data);
})

const LoginCardFloating = (props:{visibility, handleVisible}) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("login", { email, password })
  }

    return <>
    <FloatingCard options={{title:"Login",color:"is-success"}} visibility={props.visibility} handleVisible={props.handleVisible}>
  <p className="panel-tabs">
    <a className="is-active">User</a>
    <a>Admin</a>
  </p>
  <div className="">
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
    <div className="field is-grouped is-grouped-centered">
    <p className="control">
        <button className="button is-success" onClick={handleSubmit}>
        Login
        </button>
    </p>
    </div>
  </div>
  
</FloatingCard>
    </>
}

export default LoginCardFloating;