package com.example.springapp;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.example.springapp.model.Set;
import com.example.springapp.model.User;

import com.example.springapp.model.Workout;
import com.example.springapp.model.Exercise;

import com.example.springapp.service.ExerciseServiceInterface;
import com.example.springapp.service.SetServiceInterface;
import com.example.springapp.service.UserServiceInterface;
import com.example.springapp.service.WorkoutServiceInterface;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;


@RunWith(SpringJUnit4ClassRunner.class) 
@SpringBootTest(classes = SpringappApplication.class)
@AutoConfigureMockMvc
class SpringappApplicationTests {

	 @Autowired
	    private MockMvc mockMvc;
	 
	 @Mock
	 private WorkoutServiceInterface workoutService;
	 
	 @Mock
	 private UserServiceInterface userService;
	 
	 @Mock
	 private ExerciseServiceInterface exerciseService;
	 
	 @Mock
	 private SetServiceInterface setService;
	 
	 User user=new User(1L,"ABC","abc@gmail.com","123","160cm","60kg",25L,"female","Weight loss","ADMIN");
	 User user1=new User(2L,"QWE","qwe@gmail.com","123","161cm","65kg",25L,"male","Weight loss","USER");

	 
 //WorkoutTestCases
	 
	 Workout work=new Workout(1L,user,LocalDate.of(2023, 05, 05),"1 hour","Notess");
	 Workout workout1=new Workout(2L,user,LocalDate.of(2023, 05, 06),"2 hour","Notess");
	 String s1 = "{\"id\":1,\"userId\":1,\"duration\":\"1 hour\",\"notes\":\"Notess\"}";
	 String s2 = "{\"userId\":1,\"duration\":\"onehour\",\"notes\":\"notess\"}";

	 
	 List<Workout> workoutList = Arrays.asList(work,workout1);
	 
	 Exercise ex= new Exercise(1L,1L,"plank","description");
	 Exercise ex1= new Exercise(2L,1L,"plankkk","description");
	 Exercise ex2= new Exercise(3L,1L,"Skipping","description");


	 List<Exercise> list= Arrays.asList(ex,ex1);
	 
	 
	 Set s=new Set(3L,1L,20L,"10kg","1 hour");
	 
	 Set setValue=new Set(1L,1L,20L,"10kg","1 hour");


	 Set set=new Set(2L,1L,2L,"10kg","1 hour");
	


	 List<Set> setList=Arrays.asList(s,set);
	 
		
	 @Test
	    public void testGetAllWorkout1() throws Exception {
	    	
	        Mockito.when(workoutService.getAllWorkout()).thenReturn(workoutList);
	        mockMvc.perform(MockMvcRequestBuilders.get("/workout"))
	                .andExpect(MockMvcResultMatchers.status().isOk())
	                .andDo(print())
	                .andExpect(content().contentType("application/json"))
					.andExpect(jsonPath("$").isArray())
					.andReturn();
	    }
	
	 @Test
	    public void testGetWorkoutById() throws Exception {
	    	
		 Long workoutId=1L;
		 String id="1";
	       Mockito.when(workoutService.getWorkoutById(workoutId)).thenReturn(workout1);
	        mockMvc.perform(MockMvcRequestBuilders.get("/workout")
	        		.param("id",id))
	                .andExpect(MockMvcResultMatchers.status().isOk())
	                .andDo(print())
	                .andExpect(content().contentType("application/json"))
					.andExpect(jsonPath("$").isArray())
					.andReturn();
	    }
	 
	 @Test
	    public void testGetWorkoutUserById() throws Exception {
	    	
		 Long UserId=1L;
		 String userId="1";
	       Mockito.when(workoutService.getWorkOutByUserId(UserId)).thenReturn(workoutList);
	        mockMvc.perform(MockMvcRequestBuilders.get("/workout")
	        		.param("userId",userId))
	                .andExpect(MockMvcResultMatchers.status().isOk())
	                .andDo(print())
	                .andExpect(content().contentType("application/json"))
					.andExpect(jsonPath("$").isArray())
					.andReturn();
	    }
	 
	 @Test
	    public void testGetAllexercise1() throws Exception {
	    	
	        Mockito.when(exerciseService.getAllExercise()).thenReturn(list);
	        mockMvc.perform(MockMvcRequestBuilders.get("/exercise"))
	                .andExpect(MockMvcResultMatchers.status().isOk())
	                .andDo(print())
	                .andExpect(content().contentType("application/json"))
					.andExpect(jsonPath("$").isArray())
					.andReturn();
	    }
	 
	 @Test
	    public void testGetById() throws Exception {
	    	
		 Long id=3L;
	        Mockito.when(exerciseService.getExerciseById(id)).thenReturn(ex2);
	        mockMvc.perform(MockMvcRequestBuilders.get("/exercise")
	        		.param("id", "3"))
	                .andExpect(MockMvcResultMatchers.status().isOk())
	                .andDo(print())
	                .andExpect(content().contentType("application/json"))
					.andExpect(jsonPath("$").isArray())
					.andReturn();
	    }
	 
	 @Test
	    public void testGetExerciseByWorkoutId() throws Exception {
	    	
		 Long Id=1L;
		 String workoutId="1";
	        Mockito.when(exerciseService.getExerciseByWorkoutId(Id)).thenReturn(Mockito.anyList());
	        mockMvc.perform(MockMvcRequestBuilders.get("/exercise")
	        		.param("workoutId", workoutId))
	                .andExpect(MockMvcResultMatchers.status().isOk())
	                .andDo(print())
	                .andExpect(content().contentType("application/json"))
					.andExpect(jsonPath("$").isArray())
					.andReturn();
	    }
	 
	 
	

	 //SetControllerTestCases
	 	
	 @Test
	    public void testGetSetById() throws Exception {
	    	
		 Long setId=1L;
		 String id="1";
	       Mockito.when(setService.getSetById(setId)).thenReturn(set);
	        mockMvc.perform(MockMvcRequestBuilders.get("/set")
	        		.param("id",id))
	                .andExpect(MockMvcResultMatchers.status().isOk())
	                .andDo(print())
	                .andExpect(content().contentType("application/json"))
					.andExpect(jsonPath("$").isArray())
					.andReturn();
	    }
	 
	 @Test
	    public void testGetSetAll1() throws Exception {
	    	
	       Mockito.when(setService.getAllSet()).thenReturn(setList);
	        mockMvc.perform(MockMvcRequestBuilders.get("/set"))
	                .andExpect(MockMvcResultMatchers.status().isOk())
	                .andDo(print())
	                .andExpect(content().contentType("application/json"))
					.andExpect(jsonPath("$").isArray())
					.andReturn();
	    }
	 
	 
	 
	 @Test
	    public void testGetSetByExerciseId() throws Exception {
	    	
		 Long id=1L;
		 String exerciseId="1";
	       Mockito.when(setService.getSetByExerciseId(id)).thenReturn(setList);
	        mockMvc.perform(MockMvcRequestBuilders.get("/set")
	        		.param("exerciseId",exerciseId))
	                .andExpect(MockMvcResultMatchers.status().isOk())
	                .andDo(print())
	                .andExpect(content().contentType("application/json"))
					.andExpect(jsonPath("$").isArray())
					.andReturn();
	    }	
	 
	  @Test
	    public void testDeleteSetById() throws Exception {
	        
	       mockMvc.perform(delete("/set")
	                .param("id", "3"))
					.andExpect(status().isOk())
					.andReturn();
	    }
	 
	 private String asJsonString(Object object) throws JsonProcessingException {
	        ObjectMapper objectMapper = new ObjectMapper();
	        return objectMapper.writeValueAsString(object);
	    }
	 

}
