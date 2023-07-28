package com.example.Fitnesstracking.payloads;

public class TwoItem {
    private String x;
    private long y;

    public TwoItem(String x, long y) {
        this.x = x;
        this.y = y;
    }

    public String getX() {
        return x;
    }

    public long getY() {
        return y;
    }
    
}