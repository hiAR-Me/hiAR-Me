package com.arproject.arproject.controller;

import com.arproject.arproject.model.Visitor;
import com.arproject.arproject.service.VisitorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class VisitorControllerApi {

    @Autowired
    VisitorService visitorService;

    @PostMapping("/api/add_visitor")
    public Visitor addNewVisitor(@RequestBody Visitor visitor) {

        //TODO: complete route

        return visitor;
    }

    @GetMapping("/api/get_one_visitor/{visitorId}")
    public Visitor getOneVisitor(@PathVariable(name = "visitorId") int id) {

        //TODO: complete route

        return null;
    }

    @GetMapping("/api/get_all_visitors")
    public List<Visitor> getAllVisitors() {
        return visitorService.getAllVisitors();
    }

    @DeleteMapping("/api/delete_all_visitors/{deleteCode}")
    public String deleteAllUsers(@PathVariable("deleteCode") Integer deleteCode) {
        if (deleteCode.equals(11022017)) {
            visitorService.deleteAll();
        }
        return "DATABASE DELETED";
    }
}
