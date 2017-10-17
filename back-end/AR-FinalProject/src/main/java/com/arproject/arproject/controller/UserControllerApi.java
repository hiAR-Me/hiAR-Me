package com.arproject.arproject.controller;


import com.arproject.arproject.model.User;
import com.arproject.arproject.repository.UserRepository;
import com.arproject.arproject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserControllerApi {

    //TODO: extend to an exception class look up when we did this in an assignment

    @Autowired
    UserService userService;

    @PostMapping("/api/add_user")
    public void addUser(@RequestBody User user) {
        User newUser = new User();
            newUser.setUserName(user.getUserName());
            newUser.setName(user.getName());
            newUser.setResume(user.getResume());
            newUser.setGithub(user.getGithub());
            newUser.setPortfolio(user.getPortfolio());
            newUser.setImage(user.getImage());
                userService.addUser(newUser);
    }

    @PutMapping("/api/update_user/{userName}")
    public void updateUser(@PathVariable("userName") String userName, @RequestBody User user) {
        User userUpdate = userService.findByUserName(userName);
            userUpdate.setName(user.getName());
            userUpdate.setResume(user.getResume());
            userUpdate.setGithub(user.getGithub());
            userUpdate.setPortfolio(user.getPortfolio());
            userUpdate.setImage(user.getImage());
                userService.updateUser(userUpdate);
    }

    @GetMapping("/api/get_user/{userName}")
    public User getUser(@PathVariable("userName") String userName) {
        return userService.findByUserName(userName);
    }

    @DeleteMapping("/api/delete_user/{userName}")
    public void deleteOneUser(@PathVariable("userName") String userName) {
        int userId = userService.findByUserName(userName).getId();
        userService.deleteUser(userId);
    }

    @DeleteMapping("/api/delete_all_users/{deleteCode}")
    public String deleteAllUsers(@PathVariable("deleteCode") Integer deleteCode) {
        if (deleteCode.equals(11022017)) {
            userService.deleteAllUsers();
        }
        return "INCORRECT CODE";
    }

}
