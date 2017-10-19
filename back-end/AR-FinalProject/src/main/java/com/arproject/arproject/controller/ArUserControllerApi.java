package com.arproject.arproject.controller;

import com.arproject.arproject.model.ArUser;
import com.arproject.arproject.repository.ArUserFileRepository;
import com.arproject.arproject.service.ArUserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;


@RestController
public class ArUserControllerApi {

    @Autowired
    ArUserService arUserService;

    @Autowired
    ArUserFileRepository arUserFileRepository;

  // --- JSON to Java Obj ---
    private ObjectMapper objMap = new ObjectMapper();

  // *** ADD USER ***
    @PostMapping("/api/add_user")
    public ArUser addUser(@RequestBody String json) throws IOException {
        ArUser newArUser = objMap.readValue(json, ArUser.class);

        return arUserService.addArUser(newArUser);
    }

  // *** EDIT USER ***
    @PutMapping("/api/update_user/{userName}")
    public ArUser updateUser(@PathVariable("userName") String userName,@RequestBody String json) throws IOException {
        ArUser updatesToUser = objMap.readValue(json, ArUser.class);
        ArUser existingUserData = arUserService.findByArUserName(userName);
        updatesToUser.setId(existingUserData.getId());

        return arUserService.updateArUser(updatesToUser);
    }

  // *** GET USER ***
    @GetMapping("/api/get_user/{userName}")
    public ArUser getUser(@PathVariable("userName") String userName) {
        return arUserService.findByArUserName(userName);
    }

  // *** DELETE USER ***
    @DeleteMapping("/api/delete_user/{userName}")
    public String deleteOneUser(@PathVariable("userName") String userName) {
        int userId = arUserService.findByArUserName(userName).getId();
        arUserService.deleteArUser(userId);

        return "USER DELETED";
    }

  // *** DELETE ALL USERS - FOR DEVELOPMENT ONLY ***
    @DeleteMapping("/api/delete_all_users/{deleteCode}")
    public String deleteAllUsers(@PathVariable("deleteCode") Integer deleteCode) {
        if (deleteCode.equals(11022017)) {
            arUserService.deleteAllArUsers();
        }
        return "DATABASE DELETED";
    }

}
