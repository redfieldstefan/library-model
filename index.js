// Model a library using objects. A library contains shelves. Shelves contain books. 
// Books have an author and a title. Give the library methods to add and remove a shelf. 
// A shelf should have methods to add/remove a book. 
// Use a modular approach so that each type of object is contained in its own file.
// Add any functionality you think appropriate.

'use strict';

var Library = require('./library');
var library = new Library();
var Shelf = require('./shelf.js')(library);
var Book = require('./book.js');
var makeNoise = require('./noise.js');

		
var fiction = new Shelf('fiction');
var fantasy = new Shelf('fantasy');
var nonFiction = new Shelf('non fiction');
var childrens = new Shelf('childrens');
var mystery = new Shelf('mystery');

var baskerville = new Book('The Hound of the Baskervilles', 'Arthur Conan Doyle', 'mystery');
var pooh = new Book('Pooh', 'A. A. Milne', 'childrens');
var redWall = new Book('Redwall', 'Brian J.', 'childrens');
var whiteNoise = new Book('White Noise', 'Don Delilo', 'fiction');
var earthSea = new Book('Wizard of Earthsea', ' Ursula K. Le Guin', 'fantasy');

mystery.addBook(baskerville);
fiction.addBook(whiteNoise);
fantasy.addBook(earthSea);
childrens.addBook(pooh);
childrens.addBook(redWall);

library.searchTitle('Redwall');
library.searchAuthor('Christopher Robin');
library.searchSection('childrens');
library.listOfTitles();
makeNoise();
makeNoise();
makeNoise();
