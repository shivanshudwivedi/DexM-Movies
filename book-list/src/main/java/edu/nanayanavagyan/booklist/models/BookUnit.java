package edu.nanayanavagyan.booklist.models;

public class BookUnit {
    private String name;
    private String author;
    private String genre;
    private Integer date;
    private Integer rating;

    //Constructors
    public BookUnit(){

    }

    public BookUnit(String name, String author, String genre, Integer date, Integer rating){
        this.name = name;
        this.author = author;
        this.genre = genre;
        this.date=date;
        this.rating=rating;
    }


    //getters and setters
    public String getName(){
        return name;

    }

    public void settName(String name){
        this.name = name;
    }

    public String getAuhtor(){
        return author;

    }

    public void setAuhtor(String author){
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

    public Integer getRating(){
        return rating;

    }

    public void settRating(Integer rating){
        this.rating = rating;
    }
    


}
