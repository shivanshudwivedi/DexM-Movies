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

        String host_rating = System.getenv("HOST1") != null ? System.getenv("HOST1") : "localhost"; //it is the host related to microservice host_ratings
        String port_rating = System.getenv("PORT1") != null ? System.getenv("PORT1") : "8083";
        String lv_rating = System.getenv("LV1") != null ? System.getenv("LV1") : "ratings/reader/";
        String url_rating = "http://" + host_rating + ":" + port_rating + "/" + lv_rating + "/";

    

        ReaderRating ratings = restTemplate.getForObject(url_rating + readerId, ReaderRating.class);
        //System.out.println(apiKey1);

        //For each book, get its details and add all these books into a list
        return ratings.getReaderRating().stream().map(rating -> {

            String host_info = System.getenv("HOST2") != null ? System.getenv("HOST2") : "localhost"; //it is the host related to microservice host_ratings
            String port_info = System.getenv("PORT2") != null ? System.getenv("PORT2") : "8081";
            String lv_info = System.getenv("LV2") != null ? System.getenv("LV2") : "books/";
            String url_info = "http://" + host_info + ":" + port_info + "/" + lv_info + "/";

            Book book = restTemplate.getForObject(url_info + rating.getBookId(), Book.class);

            

            //Put all the books together
            return new BookUnit(book.getName(), "This is a good book!", rating.getRating());

        })
        .collect(Collectors.toList());    
        
    }
}
