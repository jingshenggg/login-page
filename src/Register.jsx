import React,{useState} from "react";

function Register(props) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email);
    console.log(pass);
    console.log(name);
  }
  function setting1(e) {
    setEmail(e.target.value)
  }
  function setting2(e) {
    setPass(e.target.value)
  }
  function setting3(e) {
    setName(e.target.value)
  }

  return (
    <div className="auth-form-container">
    <form className="register-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Full Name</label>
      <input value={name} onChange={setting3} type="text" placeholder="enter your name here" id="name" name="name" ></input>
      <label htmlFor="email">Email Address</label>
      <input value={email} onChange={setting1} type="email" placeholder="enter your email here" id="email" name="email" ></input>
      <label htmlFor="password">Password</label>
      <input value={pass} onChange={setting2}type="password" placeholder="*********"  id="password" name="password"></input>
      <button>Register</button>
    </form>
    <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here</button>
  </div>
  );
}

export default Register;