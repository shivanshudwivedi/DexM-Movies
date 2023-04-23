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
        //String apiKey1 = System.getenv("API_KEY_1");
        //String url1 = "http://localhost:8083/ratings/reader/_VAR1_"; //VAR should be replaced by readerId
        //Integer myVar1 = readerId;
        String host1 = System.getProperty("HOST1","localhost");
        String port1 = System.getProperty("PORT1","8083");
        String lv1 = System.getProperty("LV1","ratings/reader/");
        String url1 = "http://" +host1 + ":" + port1 + "/" + lv1 + "/";

        /**url1 = url1.replace("_VAR_", Integer.toString(myVar1));
        System.setProperty("SERVICE_URL1", url1);
        String serviceURL1 = System.getProperty("SERVICE_URL1");
        */

        ReaderRating ratings = restTemplate.getForObject(url1 + readerId, ReaderRating.class);
        //System.out.println(apiKey1);

        //For each book, get its details and add all these books into a list
        return ratings.getReaderRating().stream().map(rating -> {

            //For each book Id, get its details from the book information service
            //String apiKey2 = System.getenv("API_KEY_2");
            String url2 = "http://localhost:8081/books/";
            Integer varBookId = rating.getBookId();
            Integer myVar2 = varBookId;
            url2 = url2.replace("_VAR_", Integer.toString(myVar2));
            System.setProperty("SERVICE_URL2", url2);
            String  serviceURL2 = System.getProperty("SERVICE_URL2");
            Book book = restTemplate.getForObject(serviceURL2 + rating.getBookId(), Book.class);
            

            //Put all the books together
            return new BookUnit(book.getName(), "This is a good book!", rating.getRating());

        })
        .collect(Collectors.toList());    
        
    }
}
