package com.example.Fitnesstracking.payloads;

public class RadarItem {
    private String id;
    private long total;
    private long notCompleted;
    private long completed;
    
    
    
	public RadarItem(String id, long total, long notCompleted, long completed) {
		super();
		this.id = id;
		this.total = total;
		this.notCompleted = notCompleted;
		this.completed = completed;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public long getTotal() {
		return total;
	}
	public void setTotal(long total) {
		this.total = total;
	}
	public long getNotCompleted() {
		return notCompleted;
	}
	public void setNotCompleted(long notCompleted) {
		this.notCompleted = notCompleted;
	}
	public long getCompleted() {
		return completed;
	}
	public void setCompleted(long completed) {
		this.completed = completed;
	}




    
}
