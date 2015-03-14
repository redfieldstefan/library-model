// Model a library using objects. A library contains shelves. Shelves contain books. 
// Books have an author and a title. Give the library methods to add and remove a shelf. 
// A shelf should have methods to add/remove a book. 
// Use a modular approach so that each type of object is contained in its own file.
// Add any functionality you think appropriate.


"use strict";

var _ = require('underscore');

var library = {
	shelves: [],
	checkedOut: [],
	checkedIn: [],
	masterList: [],
	addShelf: function (shelf) {
		this.shelves.push(shelf);
	},
	removeShelf: function(shelf){
		var shelfToRemove = this.shelves.indexOf(shelf);
		this.shelves.splice(shelfToRemove, 1);
	},
	checkIn: function(book) {

		var bookToCheckIn = this.checkedOut.indexOf(book);
		this.checkedOut.splice(bookToCheckIn, 1);

		this.shelves.forEach( function(shelf){
			if(book.section === shelf.section) {
				shelf.books.push(book);
				library.checkedIn.push(book);
				console.log(book.title +' added to ' + shelf.section);
			}
		});
	},
	checkOut: function(shelf, book){
		var bookToCheckOut = shelf.books.indexOf(book);
		var bookToCheckOutMaster = this.checkedIn.indexOf(book);

		shelf.books.splice(bookToCheckOut, 1);
		library.checkedIn.splice(bookToCheckOutMaster, 1);
		this.checkedOut.push(book);
	},
	listOfTitles: function(){
		console.log("Here are the title's our library carries:");
		this.masterList.forEach(function(book){
			console.log(book.title + " by " + book.author + " in the " + book.section + " section.");
		});
	},
	searchTitle: function(title) {
		this.checkedIn.forEach(function(el){
			if(el.title === title) {
				console.log("We have that one! " + title + " by " + el.author + " is in the " +  el.section + " section.");
			} 
		});
	},
	searchAuthor: function(author) {
		this.checkedIn.forEach(function(el){
			if(el.author === author) {
				console.log("We sure do have some title's by " + el.author + ", we have " + el.title + " in the " + el.section + " section.");
			} 
		});
	},
	searchSection: function(section){
		this.shelves.forEach(function(el){
			if(el.section === section){
				console.log("Here are the " + el.section + " titles.");
				el.books.forEach(function(book){
					console.log(book.title + " by " + book.author);
				});
			} 
		});
	}
};

var Shelf = function (section) {
	this.section = section;
	this.books = [];
	this.addBook = function (book) {
		this.books.push(book);
		library.checkedIn.push(book);
		library.masterList.push(book);
	};

	library.shelves.push(this);
};

var Book = function(title, author, section){
	this.title = title;
	this.author= author;
	this.section = section;
};

var disruptionMeter = 0;

var makeNoise = function(){
		disruptionMeter = disruptionMeter + 1;
		if(disruptionMeter === 1){
			console.log("SHHHHHH!!!!");
		} else if(disruptionMeter === 2) {
			console.log("AGAIN WITH THIS?");
		}else if(disruptionMeter === 3){
			console.log("GODAMN YOU!");
		}
		console.log("Librarian temper meter = " + disruptionMeter);
};
		
var fiction = new Shelf('fiction');
var fantasy = new Shelf('fantasy');
var nonFiction = new Shelf('non fiction');
var childrens = new Shelf("childrens");
var mystery = new Shelf("mystery");

var baskerville = new Book('The Hound of the Baskervilles', 'Arthur Conan Doyle', 'mystery');
var pooh = new Book('Pooh', 'A. A. Milne', 'childrens');
var redWall = new Book("Redwall", "Brian J.", "childrens");
var whiteNoise = new Book("White Noise", "Don Delilo", "fiction");
var earthSea = new Book("Wizard of Earthsea", " Ursula K. Le Guin", "fantasy");

mystery.addBook(baskerville);
fiction.addBook(whiteNoise);
fantasy.addBook(earthSea);
childrens.addBook(pooh);
childrens.addBook(redWall);

library.searchTitle("Redwall");
library.searchAuthor("Christopher Robin");
library.searchSection("childrens");
library.listOfTitles();
makeNoise();
makeNoise();
makeNoise();

// library.shelves.filter(function (el) {
//                         console.log(el.section === "fiction");
//                        })