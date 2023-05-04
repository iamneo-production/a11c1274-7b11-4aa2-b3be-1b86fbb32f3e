package com.examly.FitnessTracking.Controller;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class MyController {

    @GetMapping("/")
	public String landing() {
		return "This is Landing  page";
	}

	@GetMapping("/home")
	public String home() {
		return "This is Home page";
	}
}
