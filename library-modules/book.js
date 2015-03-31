'use strict';

var Book = function(title, author, section) {
	this.title = title;
	this.author = author;
	this.section = section;
	this.checkedStatus = 'CHECKED IN';
};

module.exports = Book;

	