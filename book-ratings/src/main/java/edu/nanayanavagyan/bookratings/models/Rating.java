package edu.nanayanavagyan.bookratings.models;

public class Rating {
    private Integer bookId;
    private Integer rating;

    //constructors
    public Rating(){

    }

    public Rating (Integer bookId, int rating){
        this.bookId=bookId;
        this.rating=rating;
    }

    //getters and setters
    public Integer getBookId(){
        return bookId;
    }

    public void setBookId(Integer bookId){
        this.bookId=bookId;
    }

    public Integer getRating(){
        return rating;
    }

    public void setRating(Integer rating){
        this.rating=rating;
    }



}
