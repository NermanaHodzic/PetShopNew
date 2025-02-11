import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { auth, provider, signInWithPopup } from './firebaseConfig'; 

function RegisterForm () {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Message, setMessage] = useState('');
  const [ShowRegisterForm, setShowRegisterForm] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const registerData = {
      Username,
      Password,
      FirstName,
      LastName,
      Email,
      PhoneNumber
    };

    console.log("Register Data:", registerData);

    try {
      const response = await axios.post('http://localhost:5082/api/Login/register', registerData);
      setMessage('Registration successful!');
      console.log(response.data);
      navigate('/');
    } catch (error) {
      setMessage(`Error: ${error.response.data}`);
      console.error('Error:', error);
    }
  };

  const handleToggleForm = () => {
    setShowRegisterForm(!ShowRegisterForm);
    setMessage('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      Email,
      Password
    };

    try {
      const response = await axios.post('http://localhost:5082/api/Login/login', loginData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setMessage('Login successful!');
      console.log(response.data);
      navigate('/');
    } catch (error) {
      setMessage(`Error: ${error.response.data}`);
      console.error('Error:', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Login success:', user);
  
      navigate('/');
    } catch (error) {
      console.log('Login failed:', error);
    }
  };

  return (
    <div style={styles.container}>
      {!ShowRegisterForm ? (
        <>
          <h2>Prijava</h2>
          <form style={styles.form} onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
            <button type="submit" style={styles.button}>Prijavite se</button>
            <button type="button" onClick={handleGoogleLogin} style={styles.button}>Prijavite se preko Google-a</button>
          </form>
          {Message && <p style={styles.message}>{Message}</p>}
          <p>Nemate račun? <button onClick={handleToggleForm} style={styles.toggleButton}>Registrirajte se!</button></p>
        </>
      ) : (
        <>
          <h2>Registracija</h2>
          <form style={styles.form} onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Username"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
            <input
              type="text"
              placeholder="First Name"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={styles.input}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
              style={styles.input}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={PhoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              style={styles.input}
              required
            />
            <button type="submit" style={styles.button}>Registrirajte se</button>
          </form>
          {Message && <p style={styles.message}>{Message}</p>}
          <p>Već imate račun? <button onClick={handleToggleForm} style={styles.toggleButton}>Prijavite se!</button></p>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#e6ccb2',
  },
  form: {
    width: '400px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  input: {
    width: '100%',
    marginBottom: '10px',
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#e3b785',
    color: '#121110',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  toggleButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#8B4513',
    textDecoration: 'underline',
    cursor: 'pointer',
    fontSize: '14px',
  },
  message: {
    marginTop: '10px',
    padding: '8px',
    borderRadius: '4px',
    backgroundColor: '#dff0d8',
    color: '#3c763d',
  },
};

export default RegisterForm;


