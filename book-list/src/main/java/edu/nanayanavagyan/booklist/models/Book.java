package edu.nanayanavagyan.booklist.models;

public class Book {
    private String name;
    private String descript;
    private Integer rating;

    //Constructors
    public Book(){

    }

    public Book(String name, String descript, Integer rating){
        this.name = name;
        this.descript = descript;
        this.rating=rating;
    }


    //getters and setters
    public String getName(){
        return name;

    }

    public void settName(String name){
        this.name = name;
    }

    public String getDescript(){
        return descript;

    }

    public void settDescript(String descript){
        this.descript = descript;
    }

    public Integer getRating(){
        return rating;

    }

    public void settRating(Integer rating){
        this.rating = rating;
    }
    


}
