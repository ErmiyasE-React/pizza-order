import './login-card.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import pizza from '../asset/pizza.jpg';
import pizza2 from '../asset/pizza2.png';
import { TextField, Button, Typography } from '@mui/material';

function LoginCard() {
  const [adminName, setAdminName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
 
 
  const handleContinue = async (e) => {
    e.preventDefault();
      navigate('/admin');
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8081/add-admin', {
        adminName,
        email,
        phoneNumber,
        password,
      });
      navigate(`/Admin/${adminName}`);
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while processing your request.');
    }
  };

  return (
    <div className="login-container">
      {/* Image and Title */}
      <div className="image-container">
        <img src={pizza} alt="Pizza" className="pizza-image" />
        <Typography variant="h4" style={{ color: '#ff9922', fontWeight: 600, textAlign: 'center' }}>
          PIZZA
        </Typography>
      </div>
 
      {/* Admin Form */}
      <div className="login-card">
      <div className="small-image-container">
  <img src={pizza2} alt="Pizza" className="small-pizza-image" />
  <Typography variant="h4" style={{ color: '#f99988', fontWeight: 600, textAlign: 'left', fontSize: '25px', marginLeft: '10px', marginTop: '10px' }}>
    Pizza
  </Typography>
</div>

      <br/>
      <br/>
        <Typography variant="h6" className='card-title'>Add Admin</Typography>
        <br/><br/>
        <form onSubmit={handleContinue}>
          <div className="login-input">
            <TextField
              label="Admin Name"
              variant="outlined"
              value={adminName}
              onChange={(e) => setAdminName(e.target.value)}
              fullWidth
            />
            <TextField
              label="Email Address"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
            <TextField
              label="Phone Number"
              variant="outlined"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              fullWidth
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
            />
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              fullWidth
            />
            {error && <Typography variant="body2" className="error">{error}</Typography>}
            <Button type="submit" variant="contained" color="primary"  onClick={handleContinue}  fullWidth style={{ backgroundColor: '#ff9922' }}>
              Continue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginCard;
