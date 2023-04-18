package edu.nanayanavagyan.bookinfromation.models;

public class Book {
    private String bookId;
    private String name;

    //constructors
    public Book(){
        
    }

    public Book(String bookId, String name){
        this.bookId=bookId;
        this.name=name;
    }

    //getter and setter
    public String getBookId(){
        return bookId;

    }

    public void setBookId(String bookId){
        this.bookId = bookId;
    }

    public String getName(){
        return name;

    }

    public void settName(String name){
        this.name = name;
    }



}
