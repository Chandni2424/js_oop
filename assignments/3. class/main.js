  class Book{
   constructor(title, genre, author, read, date){
       this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = read;
    this.date = new Date(date) || Date.new()
   }
};

var books = new Book("The Kite Runner", "Fiction", "Khaled Hosseni", true);

var books2 = new Book("The Kite Runner3", "Fiction2", "Khaled Hosseni5", true);

var books3 = new Book("The Kite Runner4", "Fiction0", "Khaled Hosseni6", false);



class Booklist{
  constructor(){
    this.books = [];
  }

  addBook(book){
    this.books.push(book);
  }

  readBooks(){
    var rBook = [];
    for(var i =0; i < this.books.length; i++)
    if(this.books[i].read == true) {
     rBook.push(this.books[i]);
    }
    return rBook;
  }

  unReadBooks(){
    var urBook = [];
    for(var i =0; i < this.books.length; i++)
    if(this.books[i].read==false){
      urBook.push(this.books[i]);
    }
  }

nextBookRead(){
  var nxtBk = [];
  for(var i =0; i < this.books.length; i++)
   if(this.books[i] != this.books[i+2]){
    nxtBook.push(this.books[i + 2]);
  }
}

currentBook(){
  var crntBk = [];
  for (var i =0; i<this.books.length; i++)
  if(this.books[i] != this.books[i +1]){
    crntBook.push(this.book[i + 1])
  }

}

lastBook(){
  var lasbk = [];
  for (var i = 0; var < this.books.length; i++)
  if(this.books[i] == this.books[i-1]){
    lasbk.push(this.book[i - 1]);
  }
};




var bookList = new Booklist();
bookList.addBook(books);
bookList.addBook(books2);
bookList.addBook(books3);