package com.abes.EmployeeAPI.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.abes.EmployeeAPI.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> { 
}