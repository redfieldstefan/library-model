# library-model
Model a library using objects. Question 3 for Code Fellows JavaScript coding challenge.

To get started run `npm install`, and to perform linting tasks run `grunt`.

Run `node index.js` to test drive library functionality.

Books are defined by the parameters `title`, `author`, and `section`.

Shelves hold books, and shelves are defined by `section`. Upon inititialization, shelves are pushed to the Library.

The library holds shelves, and a master array of all the books in the shelves. You `checkOut` and `checkIn` books at the library level.
You may also search the library for titles, authors, and see lists of books for each section.

If you `makeNoise` the librarian will get upset. 

