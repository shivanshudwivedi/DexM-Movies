package edu.nanayanavagyan.booklist.models;

public class Book {
    private Integer bookId;
    private String name;
    private String author;
    private String genre;
    private Integer date;

    //constructors
    public Book(){
        
    }

    public Book(Integer bookId, String name, String author, String genre, Integer date){
        this.bookId=bookId;
        this.name=name;
        this.author=author;
        this.genre=genre;
        this.date=date;
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

    public void setName(String name){
        this.name = name;
    }

    public String getAuthor(){
        return author;

    }

    public void setAuthor(String author){
        this.author = author;
    }

    public String getGenre(){
        return genre;

    }

    public void setGenre(String genre){
        this.genre = genre;
    }


    public Integer getDate(){
        return date;

    }

    public void setDate(Integer date){
        this.date = date;
    }





}
