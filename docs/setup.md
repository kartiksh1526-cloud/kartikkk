# Setup

1. Install Node.js 18+.
2. Run `npm install`.
3. Copy `.env.example` to `.env`.
4. Set a long random `ADMIN_TOKEN`.
5. Run `npm run dev`.
6. Open `http://localhost:3000/`.

SQLite and its schema are created on server startup. Never serve `server/uploads/` as a static directory.
