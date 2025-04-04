# Node Playground

A beginner-friendly Node.js and Express.js project built as part of a MERN stack learning journey. This simple REST API demonstrates how to serve static files and handle basic API routes using Express.

## 🚀 Features

- Serve static files using Express
- Basic routing with `app.get()` and `app.post()`
- Simple REST API to manage posts (GET all, GET by ID, POST new)
- Practice using query params and path variables
- `express.json()` middleware for parsing JSON request bodies

## 📁 Project Structure

```
node-playground/
├── public/             # Optional static HTML files
├── server.js           # Main Express server logic
├── package.json        # Project metadata and dependencies
└── .env                # (Environment variables placeholder)
```

## 🛠️ How to Run

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
node server.js
```

3. API will be running at [http://localhost:8001](http://localhost:8001)

## 📬 API Endpoints

| Method | Endpoint            | Description                |
|--------|---------------------|----------------------------|
| GET    | `/api/posts`        | Returns all posts          |
| GET    | `/api/posts/:id`    | Returns a single post      |
| POST   | `/api/posts`        | Adds a new post (JSON)     |

## 🧪 Example POST Body

```json
{
  "title": "My new post"
}
```

## 📚 Learning Resources

This project was built while following [Traversy Media's Node.js Crash Course](https://www.youtube.com/user/TechGuyWeb) — an excellent resource for learning Express and backend fundamentals.

---

Feel free to fork this repo or build on top of it for your own experiments!
