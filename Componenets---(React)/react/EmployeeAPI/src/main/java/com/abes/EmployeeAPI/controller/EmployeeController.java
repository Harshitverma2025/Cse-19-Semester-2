package com.abes.EmployeeAPI.controller;

import java.util.List; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.*; 

import com.abes.EmployeeAPI.model.Employee; 
import com.abes.EmployeeAPI.service.EmployeeService; 

public class EmployeeController {
	private EmployeeService service; 
	
    public Employee addEmployee(@RequestBody Employee employee) { 
        return service.saveEmployee(employee); 
    } 
 
    public List<Employee> getAllEmployees() { 
        return service.getAllEmployees(); 
    } 
    @GetMapping("/{id}") 
    public Employee getEmployee(@PathVariable int id) { 
        return service.getEmployeeById(id); 
    } 
    @DeleteMapping("/{id}") 
    public void deleteEmployee(@PathVariable int id) { 
        service.deleteEmployee(id); 
    } 
} 