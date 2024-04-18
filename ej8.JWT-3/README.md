# Do
- Create users table in Postgres DB.
- Set up Passport authentication with JWT.
Use SECRET key from .env

# Use
- Use passport and passport-jwt packages
- Create users table SQL query:

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL NOT NULL PRIMARY KEY,
  username TEXT NOT NULL,
  password TEXT NOT NULL,
  token TEXT
);

- Use dotenv package
- Create .env file and store SECRET key

# Check
Use Postman to test the routes

