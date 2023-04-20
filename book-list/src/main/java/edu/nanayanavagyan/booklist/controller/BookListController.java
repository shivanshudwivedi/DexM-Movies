package edu.nanayanavagyan.booklist.controller;

import java.util.List;
import java.util.stream.Collectors;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import edu.nanayanavagyan.booklist.models.Book;
import edu.nanayanavagyan.booklist.models.BookUnit;
import edu.nanayanavagyan.booklist.models.ReaderRating;

@RestController
@RequestMapping("/bookList")
public class BookListController {

    @Autowired
    private RestTemplate restTemplate;


    
    @RequestMapping("/{readerId}")
    public List<BookUnit> getBooks(@PathVariable("readerId") Integer readerId)  {

        
        //get all rated book IDs
        String url1 = "http://localhost:8083/ratings/reader/";
        System.setProperty("SERVICE_URL1", url1);
        String serviceURL1 = System.getProperty("SERVICE_URL1");
        ReaderRating ratings = restTemplate.getForObject(serviceURL1 + readerId, ReaderRating.class);

        //For each book, get its details and add all these books into a list
        return ratings.getReaderRating().stream().map(rating -> {

            //For each book Id, get its details from the book information service
            String url2 = "http://localhost:8081/books/";
            System.setProperty("SERVICE_URL2", url2);
            String  serviceURL2 = System.getProperty("SERVICE_URL2");
            Book book = restTemplate.getForObject(serviceURL2 + rating.getBookId(), Book.class);

            //Put all the books together
            return new BookUnit(book.getName(), "This is a good book!", rating.getRating());

        })
        .collect(Collectors.toList());    
        
    }
}
