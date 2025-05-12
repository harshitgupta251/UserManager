import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function EditUser() {
  const { id } = useRouter().query;
  const router = useRouter();
  const [form, setForm] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/${id}`).then(res => {
        setForm({ ...res.data, interest: res.data.interest.join(', ') });
      });
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...form,
        age: parseInt(form.age),
        interest: form.interest.split(',').map(i => i.trim()),
      };
      await axios.put(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/${id}`, payload);
      router.push(`/user/${id}`);
    } catch (err) {
      alert(err.response?.data?.error || 'Failed to update user');
    }
  };

  if (!form) return <p>Loading...</p>;

  return (
    <div className="container">
      <div className="detail-card">
        <h2>Edit User</h2>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="user" value={form.user} onChange={handleChange} required />

          <label>Interests (comma-separated)</label>
          <input type="text" name="interest" value={form.interest} onChange={handleChange} required />

          <label>Age</label>
          <input type="number" name="age" value={form.age} onChange={handleChange} required />

          <label>Mobile</label>
          <input type="text" name="mobile" value={form.mobile} onChange={handleChange} required />

          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />

          <div className="buttons">
            <button type="submit">Update</button>
            <button type="button" className="back-btn" onClick={() => router.back()}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
