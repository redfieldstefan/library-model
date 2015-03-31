'use strict';

var Library = function() {
	this.shelves = [];

};

Library.prototype.addShelf = function(shelf) {
	this.shelves.push(shelf);
};

Library.prototype.removeShelf = function(shelf) {
	var shelfToRemove = this.shelves.indexOf(shelf);
	this.shelves.splice(shelfToRemove, 1);
};

Library.prototype.checkIn = function(title) {

	this.shelves.forEach(function(shelf) {
		shelf.books.forEach(function(book) {
			if (book.title === title) {
				if (book.checkedStatus === 'CHECKED OUT') {
					book.checkedStatus = 'CHECKED IN';
				}	
			}
		});
	});
};

Library.prototype.checkOut = function(title) {
	this.shelves.forEach(function(shelf) {
			shelf.books.forEach(function(book) {
				if (book.title === title) {
					if (book.checkedStatus === 'CHECKED IN') {
						book.checkedStatus = 'CHECKED OUT';
					}
				}
			});
		});
	
};

Library.prototype.listOfTitles = function() {
	console.log('Here are the titles our library carries:');
	
	this.shelves.forEach(function(shelf) {
		shelf.books.forEach(function(book) {
			console.log(book.title + ' by ' + book.author + ' in the ' + book.section + ' section. Its status is ' + book.checkedStatus);
		});
	});
};

Library.prototype.searchTitle = function(title) {
	
	this.shelves.forEach(function(shelf) {
		shelf.books.forEach(function(book) {
			if (book.title === title) {
				console.log('We have that one! ' + title + ' by ' + book.author + ' should be in the ' +  book.section + ' section. Right now its status is ' + book.checkedStatus);
			}
		});
	});

};

Library.prototype.searchAuthor = function(author) {
	
	console.log('Here are our titles by ' + author);

	this.shelves.forEach(function(shelf) {
		shelf.books.forEach(function(book) {
			if (book.author === author) {
				console.log(book.title  + ' is in the ' + book.section + ' section. Right now its status is ' + book.checkedStatus);
			}
		});
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
