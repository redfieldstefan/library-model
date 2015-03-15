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
	this.checkedIn.forEach(function(el) {
		if (el.title === title) {
			console.log('We have that one! ' + title + ' by ' + el.author + ' is in the ' +  el.section + ' section.');
		} 
	});
};

Library.prototype.searchAuthor = function(author) {
	this.checkedIn.forEach(function(el) {
		if (el.author === author) {
			console.log('We sure do have some titles by ' + el.author + ', we have ' + el.title + ' in the ' + el.section + ' section.');
		} 
	});
};

Library.prototype.searchSection = function(section) {
	this.shelves.forEach(function(el) {
		if (el.section === section){
			console.log('Here are the ' + el.section + ' titles.');
			el.books.forEach(function(book) {
				console.log(book.title + ' by ' + book.author);
			});
		} 
	});
};

module.exports = Library;
