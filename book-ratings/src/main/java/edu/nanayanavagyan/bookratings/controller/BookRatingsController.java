package edu.nanayanavagyan.bookratings.controller;

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

    @RequestMapping("/{bookId}")
    public Rating getRating(@PathVariable("bookId") Integer bookId){
        return new Rating(bookId,"Anna Karenina", 4);
    }

    @RequestMapping("reader/{readerId}")
    public ReaderRating getReaderRating(@PathVariable("readerId") String readerId){
        List<Rating> readerRatings = Arrays.asList(
            new Rating(1, "Anna Karenina", 4),
            new Rating(2, "Normal People", 5)
        );
         ReaderRating readerRating =new ReaderRating();
         readerRating.setReaderRating(readerRatings);
         return readerRating;
    }

    
}
