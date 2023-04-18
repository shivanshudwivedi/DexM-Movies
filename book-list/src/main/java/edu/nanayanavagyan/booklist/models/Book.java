package edu.nanayanavagyan.booklist.models;

public class Book {
    private Integer bookId;
    private String name;

    //constructors
    public Book(){
        
    }

    public Book(Integer bookId, String name){
        this.bookId=bookId;
        this.name=name;
    }

    //getter and setter
    public Integer getBookId(){
        return bookId;

    }

    public void setBookId(Integer bookId){
        this.bookId = bookId;
    }

    public String getName(){
        return name;

    }

    public void settName(String name){
        this.name = name;
    }



}
