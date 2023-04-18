package edu.nanayanavagyan.booklist.models;

public class Rating {
    private String bookId;
    private Integer rating;

    //constructors
    public Rating(){

    }

    public Rating (String bookId, int rating){
        this.bookId=bookId;
        this.rating=rating;
    }

    //getters and setters
    public String getBookId(){
        return bookId;
    }

    public void setBookId(String bookId){
        this.bookId=bookId;
    }

    public Integer getRating(){
        return rating;
    }

    public void setRating(Integer rating){
        this.rating=rating;
    }



}
