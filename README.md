# UserManager

A fullstack CRUD application for managing users using:

- Frontend: [Next.js](https://nextjs.org/) (Plain CSS)
- Backend: [Express.js](https://expressjs.com/)
- Database: [MongoDB](https://www.mongodb.com/)
- Containerized with [Docker](https://www.docker.com/)
- Ready to scale to multiple pods (Kubernetes-ready)

---

## 🚀 Features

- Full CRUD: Create, Read, Update, Delete users
- Validations in both frontend and backend
- Clean RESTful API structure
- Frontend: Simple and responsive (no Tailwind)
- Backend: Modular Express architecture
- Fully Dockerized (frontend + backend + MongoDB)
- Multi-pod scalable (stateless app)

---

## 🧱 Tech Stack

| Layer     | Tech        |
|-----------|-------------|
| Frontend  | Next.js     |
| Backend   | Express.js  |
| Database  | MongoDB     |
| DevOps    | Docker, Docker Compose |
| Styling   | Plain CSS   |

---

## 📦 Local Development Setup (Manual)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/usermanager.git
cd usermanager
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

#### Create a `.env` file inside the `backend/` directory:

```
PORT=5000
MONGO_URI=<ADD_MONGO_URI>
```

Start the backend server:

```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
```

#### Create a `.env` file inside the `frontend/` directory:

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
```

Start the frontend server:

```bash
npm run dev
```

- Frontend: http://localhost:3000  
- Backend API: http://localhost:5000/api/users

> Make sure MongoDB is running locally on port 27017.

---

## 🐳 Full Docker Setup (Recommended)

### 1. Ensure project structure like:
```
usermanager/
├── backend/
│   └── Dockerfile
├── frontend/
│   └── Dockerfile
└── docker-compose.yml
```

---

### 2. `backend/.env` for Docker Compose

Create or modify the file:

```env
PORT=5000
MONGO_URI=<ADD_MONGO_URI>
```

> `mongo` refers to the container name defined in `docker-compose.yml`.

---

### 3. `frontend/.env` for Docker Compose

Create or modify the file:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
```
---

### 4. Run everything together:

```bash
docker-compose up --build
```

> Visit:
> - `http://localhost:3000` → Frontend
> - `http://localhost:5000/api/users` → Backend API

---

## 📘 REST API Endpoints

| Method | Endpoint               | Description        |
|--------|------------------------|--------------------|
| GET    | `/api/users`           | Get all users      |
| GET    | `/api/users/:id`       | Get single user    |
| POST   | `/api/users`           | Create new user    |
| PUT    | `/api/users/:id`       | Update existing    |
| DELETE | `/api/users/:id`       | Delete a user      |

---

## 🧪 Sample User JSON

```json
{
  "user": "Harry",
  "interest": ["Comics", "Sports"],
  "age": 22,
  "mobile": 4234243224,
  "email": "harry@potter.com"
}
```

---

## 📊 Multi-Pod Scalability (Kubernetes Ready)

This app is:
- ✅ Stateless (no local session)
- ✅ Dockerized (ready for container orchestrators)
- ✅ Easily horizontally scalable via replicas

> To scale to multiple pods in Kubernetes, use a deployment like:

```yaml
spec:
  replicas: 3
```

---

## 📂 Project Structure

```
usermanager/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── validators/
│   │   └── app.js
│   ├── .env
│   ├── Dockerfile
│   └── package.json
├── frontend/
│   ├── pages/
│   ├── styles/
│   ├── Dockerfile
│   └── package.json
└── docker-compose.yml
```

---

## 🧑‍💻 Author

Built with ❤️ by Harshit Gupta

---

## 📜 License

MIT License – free for personal and commercial use
