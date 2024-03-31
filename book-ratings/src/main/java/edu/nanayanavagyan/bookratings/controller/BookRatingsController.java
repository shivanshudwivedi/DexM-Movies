package edu.nanayanavagyan.bookratings.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.nanayanavagyan.bookratings.models.Rating;
import edu.nanayanavagyan.bookratings.models.ReaderRating;

@RestController
@RequestMapping("/ratings")
public class BookRatingsController {
     //creating the list
     public ArrayList<Rating> bookRatings = new ArrayList<Rating>();
    
     //creating new objects
     Rating book1 = new Rating(1, "Anna Karenina", 4);
     Rating book2 = new Rating(2, "Normal People", 4);
     Rating book3 = new Rating(3, "The Lord of the Rings", 5);
     Rating book4 = new Rating(4, "To Kill a Mockingbird", 5);
     Rating book5 = new Rating(5, "The Book of Five Rings",5);
     Rating book6 = new Rating(6, "Pride and Prejudice", 5);
     Rating book7 = new Rating(7, "The Picture of Dorian Gray", 4);
     Rating book8 = new Rating(8, "Life of Pi", 3);
     Rating book9 = new Rating(9, "Moby-Dick", 4);
     Rating book10 = new Rating(10, "Persepolis",5);
     
     //adding the books to the list 
     public void addBook(ArrayList<Rating> bookRatings){
        bookRatings.add(book1);
        bookRatings.add(book2);
        bookRatings.add(book3);
        bookRatings.add(book4);
        bookRatings.add(book5);
        bookRatings.add(book6);
        bookRatings.add(book7);
        bookRatings.add(book8);
        bookRatings.add(book9);
        bookRatings.add(book10);
     }

    @RequestMapping("/{bookId}")
    public Rating getRating(@PathVariable("bookId") Integer bookId){
        addBook(bookRatings);
        Rating ans = bookRatings.get(1);
        for(int i = 0; i < bookRatings.size(); i++){
            if(bookId == bookRatings.get(i).getBookId()){
                ans =  bookRatings.get(i);
            }
        }
        return ans;

        
    }

    @RequestMapping("reader/{readerId}")
    public ReaderRating getReaderRating(@PathVariable("readerId") int readerId){
        if(readerId == 1){
            List<Rating> readerRatings = Arrays.asList(
                new Rating(1, "Anna Karenina", 4),
                new Rating(4, "To Kill a Mockingbird", 5)
            );
            
            ReaderRating readerRating =new ReaderRating();
            readerRating.setReaderRating(readerRatings);
            return readerRating;
        }else if(readerId == 2){
            List<Rating> readerRatings = Arrays.asList(
            new Rating(3, "The Lord of the Rings", 5),
            new Rating(5, "The Book of Five Rings", 5),
            new Rating(6, "Pride and Prejudice", 5)
            );
            ReaderRating readerRating =new ReaderRating();
            readerRating.setReaderRating(readerRatings);
            return readerRating;
        }else if(readerId == 3){
            List<Rating> readerRatings = Arrays.asList(
            new Rating(2, "Normal People", 4)
            );
            
            ReaderRating readerRating =new ReaderRating();
            readerRating.setReaderRating(readerRatings);
            return readerRating;
        }else if(readerId == 4){
            List<Rating> readerRatings = Arrays.asList(
            new Rating(7, "The Picture of Dorian Gray", 4),
            new Rating(8, "Life of Pi", 3),
            new Rating(9, "Moby-Dick", 4)
            );

            ReaderRating readerRating =new ReaderRating();
            readerRating.setReaderRating(readerRatings);
            return readerRating;
        }else if(readerId == 5){
            List<Rating> readerRatings = Arrays.asList(
            new Rating(10, "Persepolis", 5)
            );
            

            ReaderRating readerRating =new ReaderRating();
            readerRating.setReaderRating(readerRatings);
            return readerRating;
        }else{
            return null;
        }
        
         
        
        
    }

    
}
