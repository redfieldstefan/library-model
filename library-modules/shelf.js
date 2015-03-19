'use strict';

module.exports = function(library) {
	
	var Shelf = function(section) {
		this.section = section;
		this.books = [];
		this.addBook = function(book) {
			this.books.push(book);
			library.checkedIn.push(book);
			library.masterList.push(book);
		};
		this.removeBook = function(book) {
			var bookToRemove = this.books.indexOf(book);
			this.books.splice(bookToRemove, 1);
		};

		library.shelves.push(this);
	};
	return Shelf;
};