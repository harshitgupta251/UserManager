import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/users').then(res => setUsers(res.data));
  }, []);

  return (
    <div className="container">
      <Link href="/add"><button className="add-user-btn">Add User</button></Link>
      <h1>User Directory</h1>
      <div className="card-grid">
        {users.map(user => (
          <div key={user._id} className="user-card">
            <h3>{user.user}</h3>
            <Link href={`/user/${user._id}`}>
              <button>View</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
