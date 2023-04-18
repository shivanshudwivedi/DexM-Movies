package edu.nanayanavagyan.booklist.controller;

import java.util.Collections;
import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.nanayanavagyan.booklist.models.BookUnit;

@RestController
@RequestMapping("/bookList")
public class BookListController {
    
    
    @RequestMapping("/{readerId}")
    public List<BookUnit> getBooks(@PathVariable("readerId") String userId) {

        return Collections.singletonList(
            new BookUnit("Anna Karenina", "Famous piece of Russian literature.", 4)
        );
        
    }
}
