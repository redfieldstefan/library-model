'use strict';

var Library = function() {
	this.shelves = [];
	this.checkedOut = [];
	this.checkedIn = [];
	this.masterList = [];
};

Library.prototype.addShelf = function(shelf) {
	this.shelves.push(shelf);
};

Library.prototype.removeShelf = function(shelf) {
	var shelfToRemove = this.shelves.indexOf(shelf);
	this.shelves.splice(shelfToRemove, 1);
};

Library.prototype.checkIn = function(book) {
	var bookToCheckIn = this.checkedOut.indexOf(book);
	this.checkedOut.splice(bookToCheckIn, 1);

	this.shelves.forEach( function(shelf) {
		if (book.section === shelf.section) {
			shelf.books.push(book);
			this.checkedIn.push(book);
			console.log(book.title +' added to ' + shelf.section);
		}
	});
};

Library.prototype.checkOut = function(shelf, book) {
	var bookToCheckOut = shelf.books.indexOf(book);
	var bookToCheckOutMaster = this.checkedIn.indexOf(book);

	shelf.books.splice(bookToCheckOut, 1);
	this.checkedIn.splice(bookToCheckOutMaster, 1);
	this.checkedOut.push(book);
};

Library.prototype.listOfTitles = function() {
	console.log('Here are the titles our library carries:');
	this.masterList.forEach(function(book) {
		console.log(book.title + ' by ' + book.author + ' in the ' + book.section + ' section.');
	});
};

Library.prototype.searchTitle = function(title) {
	this.checkedIn.forEach(function(book) {
		if (book.title === title) {
			console.log('We have that one! ' + title + ' by ' + book.author + ' should be in the ' +  book.section + ' section.');
		} 
	});
};

Library.prototype.searchAuthor = function(author) {
	this.checkedIn.forEach(function(book) {
		if (book.author === author) {
			console.log('We sure do have some titles by ' + book.author + ', we have ' + book.title + ' in the ' + book.section + ' section.');
		} 
	});
};

Library.prototype.searchSection = function(section) {
	this.shelves.forEach(function(shelf) {
		if (shelf.section === section){
			console.log('Here are the ' + shelf.section + ' titles.');
			shelf.books.forEach(function(book) {
				console.log(book.title + ' by ' + book.author);
			});
		} 
	});
};

module.exports = Library;
