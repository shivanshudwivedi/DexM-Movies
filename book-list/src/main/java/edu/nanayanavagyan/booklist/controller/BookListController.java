package edu.nanayanavagyan.booklist.controller;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import edu.nanayanavagyan.booklist.models.Book;
import edu.nanayanavagyan.booklist.models.BookUnit;
import edu.nanayanavagyan.booklist.models.Rating;

@RestController
@RequestMapping("/bookList")
public class BookListController {

    @Autowired
    private RestTemplate restTemplate;


    
    @RequestMapping("/{readerId}")
    public List<BookUnit> getBooks(@PathVariable("readerId") String userId) {

        
        //get all rated book IDs
        List<Rating> ratings = Arrays.asList(
            new Rating("1", 4),
            new Rating("2", 3)

        );


          //For each book, get its details and add all these books into a list

        return ratings.stream().map(rating -> {
            Book book = restTemplate.getForObject("http://localhost:8081/books/" + rating.getBookId(), Book.class);
            return new BookUnit(book.getName(), "This is a good book!", rating.getRating());

        })
        .collect(Collectors.toList());    
        
    }
}
