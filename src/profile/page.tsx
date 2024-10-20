import { useState } from 'react';

export default function ProfileSettings() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    location: '',
    status: '',
    userName: '',
    password: '',
    email: '',
    phoneNumber: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    setErrorMessage(''); // Clear error message on input change
  };

  const validateForm = () => {
    // Simple validation: check if required fields are filled
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setErrorMessage('Please fill in all required fields.');
      return false;
    }
    // Additional validations can be added here (e.g., email format)
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Profile Updated:', formData);
      setSuccessMessage('Profile updated successfully!');
      setErrorMessage(''); // Clear any previous error message
      // Reset form or perform further actions if necessary
    }
  };

  return (
    <div className="container">
      <div className="profile-sidebar">
        <div className="profile-info">
          <img src="/profile-pic.png" alt="Profile Picture" className="profile-pic" />
          <h2>Edogaru</h2>
          <p>edogaru@mail.com.my</p>
          <button className="btn logout-btn">Logout</button>
          <button className="btn author-btn">Become an Author</button>
        </div>
      </div>
      <div className="profile-form">
        <h1>Profile Settings</h1>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input type="text" name="dateOfBirth" placeholder="dd/mm/yyyy" value={formData.dateOfBirth} onChange={handleChange} />
            <input type="text" name="gender" placeholder="Gender" value={formData.gender} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input type="text" name="status" placeholder="Status" value={formData.status} onChange={handleChange} />
            <input type="text" name="userName" placeholder="User Name" value={formData.userName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <input type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
          </div>
          <button type="submit" className="btn save-btn">Save Profile</button>
        </form>
      </div>
    </div>
  );
}
