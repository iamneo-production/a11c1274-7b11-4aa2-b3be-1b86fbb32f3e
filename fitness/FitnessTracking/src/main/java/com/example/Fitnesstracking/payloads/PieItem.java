package com.example.Fitnesstracking.payloads;

public class PieItem {
    private String id;
    private String label;
    private long value;
    private String color;

    public PieItem(String id, String label, long value, String color) {
        this.id = id;
        this.label = label;
        this.value = value;
        this.color = color;
    }

    public String getId() {
        return id;
    }

    public String getLabel() {
        return label;
    }

    public long getValue() {
        return value;
    }

    public String getColor() {
        return color;
    }
}
