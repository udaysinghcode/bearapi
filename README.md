This is simple CRUD API as part of a lesson I taught on how to build APIs.

This API was used to power an AngularJS app I demonstrated in a lesson.

Get all bears:
curl -i -X GET http://localhost:3000/bears

Get bear with _id value of 543f2bc54ae7c6c67823e910 (use a value that exists in your database):
curl -i -X GET http://localhost:3000/wines/543f2bc54ae7c6c67823e910

Delete bear with _id value of 543f2bc54ae7c6c67823e910:
curl -i -X DELETE http://localhost:3000/bears/543f2bc54ae7c6c67823e910

Add a new bear:
curl -i -X POST -H 'Content-Type: application/json' -d '{"name": "Fat Bear", "kingdom": "Humania", "picture": "fat_bear.jpg"}' http://localhost:3000/bears

Put bear with _id value of 543f2bc54ae7c6c67823e910:
curl -i -X PUT -H 'Content-Type: application/json' -d '{"name": "Fat Bear", "kingdom": "Humania", "picture": "fat_bear.jpg"}'
http://localhost:3000/bears/543f2bc54ae7c6c67823e910

