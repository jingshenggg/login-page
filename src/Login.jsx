import React,{useState} from "react";

function Login(props) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email);
    console.log(pass);
  }
  function setting1(e) {
    setEmail(e.target.value)
  }
  function setting2(e) {
    setPass(e.target.value)
  }
  return (
    <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input value={email} onChange={setting1} type="email" placeholder="enter your email here" id="email" name="email" ></input>
        <label htmlFor="password">Password</label>
        <input value={pass} onChange={setting2}type="password" placeholder="*********"  id="password" name="password"></input>
        <button>Log In</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('register')}>New uesr? Register here</button>
    </div>
  );
}

export default Login;