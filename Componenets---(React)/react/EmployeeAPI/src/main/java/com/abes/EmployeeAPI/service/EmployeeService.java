package com.abes.EmployeeAPI.service;

import java.util.List; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.stereotype.Service; 
import com.abes.EmployeeAPI.model.Employee; 
import com.abes.EmployeeAPI.repository.EmployeeRepository; 
 
public class EmployeeService { 

    private EmployeeRepository repository; 
 
    public Employee saveEmployee(Employee employee) { 
        return repository.save(employee); 
    } 
 
    public List<Employee> getAllEmployees() { 
        return repository.findAll(); 
    } 
 
    public Employee getEmployeeById(int id) { 
        return repository.findById(id).orElse(null); 
    } 
 
    public void deleteEmployee(int id) { 
        repository.deleteById(id); 
    } 
}