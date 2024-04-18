# Do
- Add image field to planets table in the DB.
- Set POST /planets/:id/image route for file upload (planet's image).
- Store the image file locally (on disk).
- Save file path to DB (update the correct planet).

# Use
- Add image TEXT to your CREATE TABLE planets SQL query.
- Use multer library to save files to /uploads folder.
- Add image TEXT to CREATE TABLE planets SQL query (in your DB setup).
- Use this SQL query to update planet's image:

UPDATE planets
SET image=$2
WHERE id=$1;

# Check
Use Postman to test the upload route (you can send a file in Postman).

