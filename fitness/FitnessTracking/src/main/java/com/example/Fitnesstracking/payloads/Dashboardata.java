package com.example.Fitnesstracking.payloads;

public class Dashboardata {
	
	private String txId;
    private String date;
    
	public Dashboardata(String txId, String date) {
		super();
		this.txId = txId;
		this.date = date;
	}
	
	
	public String getTxId() {
		return txId;
	}
	public void setTxId(String txId) {
		this.txId = txId;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
    
    

}
