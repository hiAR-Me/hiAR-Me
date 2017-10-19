package com.arproject.arproject.service;

import com.arproject.arproject.model.ArUser;
import com.arproject.arproject.model.UserObject;

import java.util.List;

public interface ArUserService {

  // *** ArUser ***
    ArUser findById(int id);
    ArUser findByUserName(String userName);
    ArUser addUser(ArUser arUser);
    ArUser updateUser(ArUser arUser);
    void deleteUser(int id);

    // -- for development --
    void deleteAllUsers();

  // *** UserObject ***
    ArUser addNewObject(UserObject userObject);
    ArUser deleteObject(int arUserId, int objectId);
}
