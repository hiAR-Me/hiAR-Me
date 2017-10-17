package com.arproject.arproject.service;

import com.arproject.arproject.model.User;

public interface UserService {

    User findById(int id);
    User findByUserName(String userName);
    void addUser(User user);
    void updateUser(User user);
    void deleteUser(int id);

  // -- for development --
    void deleteAllUsers();
}
