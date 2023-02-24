import React,{useState} from "react";

function Register(props) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }
  return (
    <div className="auth-form-container">
    <form className="register-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Full Name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="enter your name here" id="name" name="name" ></input>
      <label htmlFor="email">Email Address</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="enter your email here" id="email" name="email" ></input>
      <label htmlFor="password">Password</label>
      <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="*********"  id="password" name="password"></input>
      <button>Register</button>
    </form>
    <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here</button>
  </div>
  );
}

export default Register;