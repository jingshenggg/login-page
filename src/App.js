import './App.css';
import Login from './Login';
import React,{useState} from "react";
import Register from './Register';
// import Register from './Register';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
    console.log(currentForm);
  }

  return (
    <div className="App">
      {currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/>}
    </div>
  );
}

export default App;
