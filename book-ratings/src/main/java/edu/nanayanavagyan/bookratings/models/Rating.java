package edu.nanayanavagyan.bookratings.models;

public class Rating {
    private Integer bookId;
    private Integer rating;
    private String name;

    //constructors
    public Rating(){

    }

    public Rating (Integer bookId, String name, int rating){
        this.bookId=bookId;
        this.name = name;
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

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name=name;
    }



}
