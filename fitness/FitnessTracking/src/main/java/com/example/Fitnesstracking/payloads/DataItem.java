package com.example.Fitnesstracking.payloads;

public class DataItem {
    private String name;
    private long value;

    public DataItem(String name, long value) {
        this.name = name;
        this.value = value;
    }

    public String getName() {
        return name;
    }

    public long getValue() {
        return value;
    }
}
