package com.arproject.arproject.service;

import com.arproject.arproject.model.ArUser;

public interface ArUserService {

    ArUser findById(int id);
    ArUser findByUserName(String userName);
    ArUser addUser(ArUser arUser);
    ArUser updateUser(ArUser arUser);
    void deleteUser(int id);

  // -- for development --
    void deleteAllUsers();
}
