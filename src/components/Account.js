import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const [user, setUser] = useState({ name: '', email: '' });
  const [newName, setNewName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
      setNewName(storedUser.name);
    } else {
      navigate('/');
    }
  }, [navigate]);

  const handleUpdate = () => {
    const updatedUser = { ...user, name: newName };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setUser(updatedUser);
    alert('Profile updated successfully!');
  };

  return (
    <div className="container">
      <h2>Account Information</h2>
      <div className="mb-3">
        <label>Email</label>
        <input type="text" className="form-control" value={user.email} readOnly />
      </div>
      <div className="mb-3">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default Account;
