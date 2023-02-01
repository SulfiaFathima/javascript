function book(title, author) {
    this.title = title;
    this.author = author;
}
var myBook = new book("Perl", "Tom");
book.prototype.price = null;
myBook.price = 100;
document.write("Book title is : " + myBook.title + "<br>");
document.write("Book author is : " + myBook.author + "<br>");
document.write("Book price is : " + myBook.price + "<br>");