# Tareas-Develhope-Node.js

# Do
Write a router with the following routes:

GET /api/planets: return all planets (JSON) with 200

GET /api/planets/:id: return a planet (JSON) by id with 200

POST /api/planets: create a planet, return only 201 code and a success JSON with key msg
Make sure every planet is created with id and name.

PUT /api/planets/:id: update a planet by id, return only 200 code and a success JSON with key msg

DELETE /api/planets/:id: delete a planet by id, return only 200 code and a success JSON with key msg

Validate planet fields where appropriate.

# Use
The dummy database of planets from the previous exercise.
joi library for validation.

# Check
Use Postman to test the routes.

Paths POST and PUT should receive data in JSON format (req.body).
