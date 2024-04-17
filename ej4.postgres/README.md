# Do
Using PgAdmin:
Create a Postgres DB.

Using a setupDb function:
-Create planets table.
-Populate the table with two planets (e.g. 'Earth' and 'Mars').

Connect your app to Postgres using Express (pg-promise). [https://github.com/vitaly-t/pg-promise]

Replace the dummy DB with the Postgres DB.

Rewrite all planets controller functions. They should now work with the DB. (Use the SQL queries below.)

# Use
SQL query to create the table:

DROP TABLE IF EXISTS planets;

CREATE TABLE planets(
  id SERIAL NOT NULL PRIMARY KEY,
  name TEXT NOT NULL,
);

Make sure that all CRUD operations read from and write to Postgres (instead of the dummy db you've been using in previous exercises).

GET /planets
Use this SQL query:
SELECT * FROM planets;

GET /planets/:id
Use this SQL query:
SELECT * FROM planets WHERE id=$1;
Make sure that $1 is id.

POST /planets
Use this SQL query:
INSERT INTO planets (name) VALUES ($1);
Make sure that $1 is name.

PUT /planets/:id
Use this SQL query:
UPDATE planets SET name=$2 WHERE id=$1;
Make sure that $1 is id and $2 is name.

DELETE /planets/:id
Use this SQL query:
DELETE FROM planets WHERE id=$1;
Make sure that $1 is id.

# Check
Use Postman to test the routes.
