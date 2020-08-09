Unit 11 Express Homework: Note Taker

Description:

This application will allow users to create and save notes.

This application will allow users to view previously saved notes.

This application will allow users to delete previously saved notes.

Task:

- Create an application that can be used to write, save, and delete notes.
- This application will use an express backend and save and retrieve note data from a JSON file.

- The backend of the program has been created and connected to the frontend which was provided.

The following HTML routes will be created:

- GET /notes - Should return the notes.html file.
- GET * - Should return the index.html file

- The application will have a db.json file on the backend that will be used to store and retrieve notes using the fs module.

The following API routes will be created:

- GET /api/notes - Reads the db.json file and return all saved notes as JSON.

- POST /api/notes - Recieves a new note to save on the request body, add it to the db.json file, and then return the new note to the client.

DELETE /api/notes/:id 
- Recieves a query paramter containing the id of a note to delete. 
- Each note a unique id when it's saved. 

- In order to delete a note, you'll need to read all notes from the db.json file - remove the note with the given id property - and then rewrite the notes to the db.json file.

As the user:

- I want to be able to write and save notes.
- I want to be able to delete notes I've written before.
- So that I can organize my thoughts and keep track of the tasks I need to complete.

Business Context?

- This app is for users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. 
- Being able to take persistent notes allows users to have written information conveniently available when needed.
