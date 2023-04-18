package edu.nanayanavagyan.bookratings.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.nanayanavagyan.bookratings.models.Rating;

@RestController
@RequestMapping("/ratings")
public class BookRatingsController {
    @RequestMapping("/{bookId}")
    public Rating getRating(@PathVariable("bookId") String bookId){
        return new Rating(bookId, 4);
    }


    
}
