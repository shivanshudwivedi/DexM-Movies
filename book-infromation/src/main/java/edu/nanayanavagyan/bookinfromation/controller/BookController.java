package edu.nanayanavagyan.bookinfromation.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.nanayanavagyan.bookinfromation.models.Book;

@RestController
@RequestMapping("/books")
public class BookController {

    //creating the list
    public ArrayList<Book> books = new ArrayList<Book>();
    
    //creating new objects
    Book book1 = new Book(1, "Anna Karenina", "Leo Tolstoy", "Novel", 1877);
    Book book2 = new Book(2, "Normal People", "Sally Rooney", "Novel, Psychological Fiction", 2018);
    Book book3 = new Book(3, "The Lord of the Rings", "J.R.R. Tolkien", "High-Fanatasy Novel", 1954);
    Book book4 = new Book(4, "To Kill a Mockingbird", "Harper Lee", "Southern Gothic Bildungsroman", 1960);
    Book book5 = new Book(5, "The Book of Five Rings", "Miyamoto Musashi", "Treatise", 1643);
    Book book6 = new Book(6, "Pride and Prejudice", "Jane Austen", "Romance Novel", 1813);
    Book book7 = new Book(7, "The Picture of Dorian Gray", "Oscar Wilde", "Gothic Fiction", 1890);
    Book book8 = new Book(8, "Life of Pi", "Yann Martel", "Adventure Fiction", 2001);
    Book book9 = new Book(9, "Moby-Dick", "Herman Melville", "Adventure Fiction",1851);
    Book book10 = new Book(10, "Persepolis", "Marjane Satrapi", "Graphic Novel", 2000);
    
    //adding the books to the list 
    public void addBook(ArrayList<Book> books){
        books.add(book1);
        books.add(book2);
        books.add(book3);
        books.add(book4);
        books.add(book5);
        books.add(book6);
        books.add(book7);
        books.add(book8);
        books.add(book9);
        books.add(book10);
    }

    @GetMapping("/hello")
    public String simple(){
        return "Hello!";
    }
    
    @RequestMapping("/{bookId}")
    //Change request to get
    public Book getBookInfo(@PathVariable("bookId") Integer bookId) {
        addBook(books);
        Book ans = books.get(1);
        for(int i = 0; i < books.size(); i++){
            if(bookId == books.get(i).getBookId()){
                ans =  books.get(i);
            }
        }
        return ans;
           
    } 
}
