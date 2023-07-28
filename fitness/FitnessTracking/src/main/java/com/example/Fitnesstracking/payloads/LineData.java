package com.example.Fitnesstracking.payloads;

import java.util.List;

public class LineData {
	private String id;
    private String color;
    private List<TwoItem> data;

    public LineData(String id, String color, List<TwoItem> data) {
        this.id = id;
        this.color = color;
        this.data = data;
    }

    public String getId() {
        return id;
    }

    public String getColor() {
        return color;
    }

    public List<TwoItem> getData() {
        return data;
    }
}
