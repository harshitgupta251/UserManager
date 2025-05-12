import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function AddUser() {
  const router = useRouter();
  const [form, setForm] = useState({
    user: '',
    interest: '',
    age: '',
    mobile: '',
    email: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      interest: form.interest.split(',').map((i) => i.trim()),
      age: parseInt(form.age)
    };
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users`, payload);
      router.push('/');
    } catch (err) {
      alert(err.response?.data?.error || 'Error creating user');
    }
  };

  return (
    <div className="container">
      <div className="detail-card">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="user" placeholder="Name" onChange={handleChange} required />
        <input type="text" name="interest" placeholder="Interests (comma-separated)" onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
        <input type="text" name="mobile" placeholder="Mobile" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <div className="buttons">
            <button type="submit">Submit</button>
            <button type="button" className="back-btn" onClick={() => router.back()}>Cancel</button>
        </div>
      </form>
      </div>
    </div>
  );
}
