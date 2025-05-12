import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function UserDetail() {
  const { id } = useRouter().query;
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/${id}`).then(res => setUser(res.data));
    }
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="container">
      <div className="detail-card">
        <h2>{user.user}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Mobile:</strong> {user.mobile}</p>
        <p><strong>Interests:</strong> {user.interest.join(', ')}</p>
        <div className="buttons">
          <Link href={`/edit/${user._id}`}>
            <button>Edit</button>
          </Link>
          <Link href="/">
            <button className="back-btn">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
